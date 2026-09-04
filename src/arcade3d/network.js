import { joinRoom } from 'trystero/nostr';
import { RemoteArcadePlayer } from './remote-player.js';

export class ArcadeNetwork {
  constructor(scene, identity, scoreTicker) {
    this.scene = scene;
    this.identity = identity; // { tag, color, colorHex }
    this.scoreTicker = scoreTicker;
    this.peers = new Map(); // peerId -> RemoteArcadePlayer
    this.room = null;

    // Actions
    this.posAction = null;
    this.idAction = null;
    this.actAction = null;
    this.scoreAction = null;
    this.chatAction = null;
    this.onCabinetOccupancyChange = null;

    // Rate limiting & dead reckoning telemetry variables
    this.lastBroadcastTime = 0;
    this.lastSentX = null;
    this.lastSentY = null;
    this.lastSentZ = null;
    this.lastSentRot = null;
    this.lastSentMoving = null;
    this.heartbeatTimer = null;

    this.hudEl = null;
    this.createHud();
    this.connect();
  }

  createHud() {
    let el = document.getElementById('mp-network-hud');
    if (el) el.remove();

    // Prefer mounting inside header left pod if present to prevent overlapping right buttons
    const mount = document.getElementById('mp-hud-mount');
    if (mount) {
      mount.innerHTML = `
        <span class="online-indicator-dot"></span>
        <span id="mp-count-text">1/10 ONLINE</span>
      `;
      this.hudEl = mount;
      this.updateHudCount();
      return;
    }

    el = document.createElement('div');
    el.id = 'mp-network-hud';
    el.style.cssText = `
      position: absolute;
      top: 14px;
      left: calc(230px + env(safe-area-inset-left, 0px));
      z-index: 25;
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: auto;
    `;

    el.innerHTML = `
      <div id="mp-players-badge" class="hud-online-mount">
        <span class="online-indicator-dot"></span>
        <span id="mp-count-text">1/10 ONLINE</span>
      </div>
    `;

    document.body.appendChild(el);
    this.hudEl = el;
  }

  updateHudCount() {
    const countEl = document.getElementById('mp-count-text');
    if (countEl) {
      const total = this.peers.size + 1;
      countEl.textContent = `${total}/10 ONLINE`;
    }
  }

  connect() {
    try {
      const config = {
        appId: 'nopex-arcade-webrtc-v1',
        relayUrls: [
          'wss://nos.lol',
          'wss://relay.damus.io',
          'wss://relay.primal.net',
          'wss://purplerelay.com'
        ],
        rtcConfig: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' }
          ]
        }
      };
      const roomId = 'nopex-main-hub';

      this.room = joinRoom(config, roomId);

      // 1. Actions setup (Trystero 0.25 returns action objects)
      this.posAction = this.room.makeAction('pos');
      this.idAction = this.room.makeAction('id');
      this.actAction = this.room.makeAction('act');
      this.scoreAction = this.room.makeAction('score');
      this.chatAction = this.room.makeAction('chat');

      // 2. Peer Handshakes
      this.room.onPeerJoin = (peerId) => {
        console.log(`[WebRTC] Peer connected: ${peerId}`);
        // Send our identity directly to the newly connected peer
        if (this.idAction && this.identity) {
          this.idAction.send({
            tag: this.identity.tag,
            colorHex: this.identity.colorHex
          }, { target: peerId });
        }
        this.updateHudCount();
      };

      this.room.onPeerLeave = (peerId) => {
        console.log(`[WebRTC] Peer disconnected: ${peerId}`);
        const remote = this.peers.get(peerId);
        if (remote) {
          remote.dispose();
          this.peers.delete(peerId);
        }
        if (this.onCabinetOccupancyChange) {
          this.onCabinetOccupancyChange(peerId, null, null, false);
        }
        this.updateHudCount();
      };

      // 3. Receive Peer Identity (Bidirectional Handshake & Dynamic Recovery)
      this.idAction.onMessage = (data, { peerId }) => {
        if (!data || !data.tag) return;
        if (this.peers.has(peerId)) {
          const remote = this.peers.get(peerId);
          if (remote.tag !== data.tag || remote.colorHex !== data.colorHex) {
            remote.tag = data.tag.slice(0, 5).toUpperCase();
            remote.colorHex = data.colorHex || '#00f5ff';
            remote.renderNameTagCanvas();
          }
        } else {
          // Limit to 10 peers max (9 remotes + local player)
          if (this.peers.size >= 9) return;
          const remote = new RemoteArcadePlayer(this.scene, peerId, data.tag, data.colorHex);
          this.peers.set(peerId, remote);
          this.updateHudCount();

          // CRITICAL: Immediately send our identity back targeted to this peer
          // to guarantee mutual discovery without needing a page refresh!
          if (this.idAction && this.identity) {
            this.idAction.send({
              tag: this.identity.tag,
              colorHex: this.identity.colorHex
            }, { target: peerId });
          }
        }
      };

      // 4. Receive Position Telemetry
      this.posAction.onMessage = (data, { peerId }) => {
        if (!data) return;
        const remote = this.peers.get(peerId);
        if (remote) {
          remote.setTelemetry(data.x, data.z, data.r, data.m, data.y || 0);
        } else {
          // Received telemetry from an unmapped peer: self-heal by requesting identity!
          if (this.idAction && this.identity) {
            this.idAction.send({
              tag: this.identity.tag,
              colorHex: this.identity.colorHex
            }, { target: peerId });
          }
        }
      };

      // 5. Receive Activity (Cabinet occupancy)
      this.actAction.onMessage = (data, { peerId }) => {
        if (!data) return;
        const remote = this.peers.get(peerId);
        if (remote) {
          remote.setActivity(data.status || 'ONLINE');
        }
        if (this.onCabinetOccupancyChange) {
          const tag = (remote && remote.tag) || data.tag || 'P2';
          this.onCabinetOccupancyChange(peerId, tag, data.gameId, !!data.playing);
        }
      };

      // 6. Receive High Score Broadcast
      this.scoreAction.onMessage = (data) => {
        if (!data) return;
        if (this.scoreTicker) {
          this.scoreTicker.showRecord(data.player, data.game, data.score);
        }
      };

      // 7. Receive Chat Messages (Speech bubble + Chat dock feed)
      this.chatAction.onMessage = (data, { peerId }) => {
        if (!data || !data.text) return;
        const remote = this.peers.get(peerId);
        const tag = data.tag || (remote ? remote.tag : 'P2');
        const colorHex = data.colorHex || (remote ? remote.colorHex : '#00f5ff');

        if (remote) {
          remote.showSpeechBubble(data.text);
        }

        window.dispatchEvent(new CustomEvent('arcade-chat-received', {
          detail: { peerId, tag, text: data.text, colorHex }
        }));
      };

      // 8. Periodic Presence Heartbeat (every 2.5s)
      // Ensures newly joined peers are detected within 2 seconds without requiring refresh
      if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = setInterval(() => {
        if (this.idAction && this.identity) {
          this.broadcastIdentity();
        }
      }, 2500);

    } catch (err) {
      console.warn('[WebRTC] Connection failed, operating in offline hub mode:', err);
    }
  }

  broadcastIdentity() {
    if (!this.idAction || !this.identity) return;
    this.idAction.send({
      tag: this.identity.tag,
      colorHex: this.identity.colorHex
    });
  }

  // Rate-limited to max 20 Hz (50ms) + Dead Reckoning
  broadcastLocalPosition(x, z, rotY, isMoving, y = 0) {
    if (!this.posAction) return;

    const now = performance.now();
    // Cap telemetry at 20 Hz to prevent network flooding and frame drops
    if (now - this.lastBroadcastTime < 50) return;

    const dx = this.lastSentX !== null ? Math.abs(x - this.lastSentX) : 999;
    const dy = this.lastSentY !== null ? Math.abs(y - this.lastSentY) : 999;
    const dz = this.lastSentZ !== null ? Math.abs(z - this.lastSentZ) : 999;
    const dr = this.lastSentRot !== null ? Math.abs(rotY - this.lastSentRot) : 999;
    const dm = isMoving !== this.lastSentMoving;

    // Dead-reckoning: if standing still and within 0.02m threshold, don't spam packets (keepalive every 1.5s)
    if (dx < 0.02 && dy < 0.02 && dz < 0.02 && dr < 0.03 && !dm && (now - this.lastBroadcastTime < 1500)) {
      return;
    }

    this.lastBroadcastTime = now;
    this.lastSentX = x;
    this.lastSentY = y;
    this.lastSentZ = z;
    this.lastSentRot = rotY;
    this.lastSentMoving = isMoving;

    this.posAction.send({
      x: Math.round(x * 100) / 100,
      y: Math.round(y * 100) / 100,
      z: Math.round(z * 100) / 100,
      r: Math.round(rotY * 100) / 100,
      m: !!isMoving
    });
  }

  broadcastActivity(statusText) {
    if (!this.actAction) return;
    this.actAction.send({ status: statusText });
  }

  broadcastPlayingGame(gameId, isPlaying) {
    if (!this.actAction) return;
    this.actAction.send({
      status: isPlaying ? 'PLAYING' : 'ONLINE',
      gameId: gameId || null,
      playing: !!isPlaying,
      tag: this.identity ? this.identity.tag : 'P1'
    });
  }

  broadcastChat(text) {
    if (!this.chatAction || !text) return;
    this.chatAction.send({
      text: text.slice(0, 140),
      tag: this.identity ? this.identity.tag : 'P1',
      colorHex: this.identity ? this.identity.colorHex : '#00f5ff'
    });
  }

  broadcastHighScore(gameTitle, score) {
    if (!this.scoreAction) return;
    this.scoreAction.send({
      player: this.identity.tag,
      game: gameTitle,
      score: score,
      time: Date.now()
    });

    // Also trigger locally
    if (this.scoreTicker) {
      this.scoreTicker.showRecord(this.identity.tag, gameTitle, score);
    }
  }

  update(dt, camera) {
    this.peers.forEach(remote => {
      remote.update(dt, camera);
    });
  }
}
