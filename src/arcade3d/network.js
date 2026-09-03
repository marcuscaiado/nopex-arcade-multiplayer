import { joinRoom } from 'trystero/nostr';
import { RemoteArcadePlayer } from './remote-player.js';

export class ArcadeNetwork {
  constructor(scene, identity, scoreTicker) {
    this.scene = scene;
    this.identity = identity; // { tag, color, colorHex }
    this.scoreTicker = scoreTicker;
    this.peers = new Map(); // peerId -> RemoteArcadePlayer
    this.room = null;
    this.sendPos = null;
    this.sendId = null;
    this.sendAct = null;
    this.sendScore = null;

    this.hudEl = null;
    this.createHud();
    this.connect();
  }

  createHud() {
    let el = document.getElementById('mp-network-hud');
    if (el) el.remove();

    el = document.createElement('div');
    el.id = 'mp-network-hud';
    el.style.cssText = `
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: auto;
    `;

    el.innerHTML = `
      <div id="mp-players-badge" style="
        background: rgba(14, 14, 24, 0.88);
        border: 1px solid #00f5ff;
        backdrop-filter: blur(10px);
        padding: 6px 14px;
        border-radius: 20px;
        color: #00f5ff;
        font-family: 'Press Start 2P', monospace;
        font-size: 9px;
        font-weight: 800;
        box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
        display: flex;
        align-items: center;
        gap: 6px;
      ">
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></span>
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
        ]
      };
      const roomId = 'nopex-main-hub';

      this.room = joinRoom(config, roomId);

      // 1. Actions setup (Trystero 0.25 returns action objects)
      this.posAction = this.room.makeAction('pos');
      this.idAction = this.room.makeAction('id');
      this.actAction = this.room.makeAction('act');
      this.scoreAction = this.room.makeAction('score');

      // 2. Peer Handshakes
      this.room.onPeerJoin = (peerId) => {
        console.log(`[WebRTC] Peer connected: ${peerId}`);
        // Send our identity to the new peer
        if (this.idAction) {
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
        this.updateHudCount();
      };

      // 3. Receive Peer Identity
      this.idAction.onMessage = (data, { peerId }) => {
        if (!data || !data.tag) return;
        if (this.peers.has(peerId)) {
          const remote = this.peers.get(peerId);
          remote.tag = data.tag.slice(0, 5).toUpperCase();
          remote.colorHex = data.colorHex || '#00f5ff';
          remote.renderNameTagCanvas();
        } else {
          // Limit to 10 peers max (9 remotes + local player)
          if (this.peers.size >= 9) return;
          const remote = new RemoteArcadePlayer(this.scene, peerId, data.tag, data.colorHex);
          this.peers.set(peerId, remote);
          this.updateHudCount();
        }
      };

      // 4. Receive Position Telemetry
      this.posAction.onMessage = (data, { peerId }) => {
        if (!data) return;
        const remote = this.peers.get(peerId);
        if (remote) {
          remote.setTelemetry(data.x, data.z, data.r, data.m);
        }
      };

      // 5. Receive Activity (Cabinet occupancy)
      this.actAction.onMessage = (data, { peerId }) => {
        if (!data) return;
        const remote = this.peers.get(peerId);
        if (remote) {
          remote.setActivity(data.status || 'ONLINE');
        }
      };

      // 6. Receive High Score Broadcast
      this.scoreAction.onMessage = (data) => {
        if (!data) return;
        if (this.scoreTicker) {
          this.scoreTicker.showRecord(data.player, data.game, data.score);
        }
      };

    } catch (err) {
      console.warn('[WebRTC] Connection failed, operating in offline hub mode:', err);
    }
  }

  broadcastIdentity() {
    if (!this.idAction) return;
    this.idAction.send({
      tag: this.identity.tag,
      colorHex: this.identity.colorHex
    });
  }

  broadcastLocalPosition(x, z, rotY, isMoving) {
    if (!this.posAction) return;
    this.posAction.send({
      x: Math.round(x * 100) / 100,
      z: Math.round(z * 100) / 100,
      r: Math.round(rotY * 100) / 100,
      m: !!isMoving
    });
  }

  broadcastActivity(statusText) {
    if (!this.actAction) return;
    this.actAction.send({ status: statusText });
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
