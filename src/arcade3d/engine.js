import * as THREE from 'three';
import { ArcadePlayer } from './player.js';
import { buildArcadeWorld } from './world.js';
import { ArcadeInteraction } from './interaction.js';
import { ArcadePlayOverlay } from './play-overlay.js';
import { ScoreTicker } from './score-ticker.js';
import { ArcadeNetwork } from './network.js';
import { musicManager } from './music-manager.js';
import { ArcadeJukeboxModal } from './jukebox-modal.js';
import { ArcadeMusicHud } from './music-hud.js';
import { ArcadeWatchHud } from './watch-hud.js';

export class Arcade3DEngine {
  constructor(containerEl, gamesManifest, identity = null) {
    this.container = containerEl;
    this.gamesManifest = gamesManifest;
    this.identity = identity;

    this.isRunning = false;
    this.isZoomingIn = false;
    this.zoomTarget = null;
    this.zoomProgress = 0;

    this.isSpectating = false;
    this.spectateTarget = null;
    this.watchHud = null;

    this.initScene();
    this.initWorld();
    this.initPlayer();
    this.initTokens();
    this.initInteraction();
    this.initOverlay();
    this.initWatchHud();
    this.initJukebox();
    this.initNetwork();
    this.initPointerLock();
    this.initChatDock();
    this.initMobileControls();
    this.initTapToWalk();

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.onResize(), 150);
    });
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d122b);
    this.scene.fog = new THREE.Fog(0x0d122b, 40, 95);

    const width = this.container.clientWidth || window.innerWidth || 1280;
    const height = this.container.clientHeight || window.innerHeight || 720;

    this.camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
    this.camera.position.set(0, 4.2, 13.5);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));

    this.container.appendChild(this.renderer.domElement);
    this.clock = new THREE.Clock();

    // Tap-to-walk Raycaster and Destination Ring Pulse
    this.raycaster = new THREE.Raycaster();
    const ringGeo = new THREE.RingGeometry(0.5, 0.75, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    this.destinationRing = new THREE.Mesh(ringGeo, ringMat);
    this.destinationRing.rotation.x = -Math.PI / 2;
    this.destinationRing.position.set(0, 0.05, 0);
    this.scene.add(this.destinationRing);
    this.destinationPulse = 0;
  }

  initWorld() {
    this.world = buildArcadeWorld(this.scene, this.gamesManifest);
  }

  initPlayer() {
    this.player = new ArcadePlayer(this.scene, this.identity);
  }

  initTokens() {
    let stored = parseInt(localStorage.getItem('arcade_tokens'), 10);
    if (isNaN(stored) || stored <= 0) stored = 25;
    this.tokens = stored;
    try {
      this.discoveredCabinets = new Set(JSON.parse(localStorage.getItem('arcade_discovered') || '[]'));
    } catch (e) {
      this.discoveredCabinets = new Set();
    }
    this.updateTokensDisplay();
  }

  updateTokensDisplay() {
    const el = document.getElementById('arcade-tokens-val');
    if (el) el.textContent = this.tokens;
    localStorage.setItem('arcade_tokens', String(this.tokens));
  }

  spendToken() {
    if (this.tokens > 0) {
      this.tokens -= 1;
    } else {
      this.tokens = 5; // Automatic bonus reload
    }
    this.updateTokensDisplay();
    import('./audio.js').then(m => m.playCoinDrop?.());
  }

  awardExplorationToken(cabId) {
    if (cabId && !this.discoveredCabinets.has(cabId)) {
      this.discoveredCabinets.add(cabId);
      try {
        localStorage.setItem('arcade_discovered', JSON.stringify([...this.discoveredCabinets]));
      } catch (e) {}
      this.tokens += 2;
      this.updateTokensDisplay();
    }
  }

  initInteraction() {
    this.interaction = new ArcadeInteraction(
      this.world.cabinets,
      (game, cabinet) => this.launchGame(game, cabinet),
      (cabId) => this.awardExplorationToken(cabId),
      (cabinet) => this.startSpectatingCabinet(cabinet)
    );
  }

  initOverlay() {
    this.overlay = new ArcadePlayOverlay(() => {
      this.isZoomingIn = false;
      this.zoomProgress = 0;
      this.clock.getDelta(); // Reset clock delta so camera doesn't jump
      if (this.zoomTarget) {
        this.zoomTarget.clearOccupied();
        this.zoomTarget = null;
      }
      if (this.network) {
        this.network.broadcastActivity('ONLINE');
        this.network.broadcastPlayingGame(null, false);
      }
    });

    // Wire live stream broadcast when player canvas is captured
    this.overlay.onStreamReady = (stream, gameId) => {
      console.log(`[Watch Party] Broadcasting local gameplay stream for ${gameId}`);
      if (this.network) {
        this.network.startBroadcastingGame(stream, gameId);
      }
      const localCab = this.world.cabinets.find(c => c.game.id === gameId);
      if (localCab) {
        localCab.setLiveStream(stream, this.identity ? this.identity.tag : 'VOCÊ');
      }
    };

    this.overlay.onFrameReady = (frameData, gameId) => {
      if (this.network) {
        this.network.broadcastLiveFrame(gameId, frameData);
      }
      const localCab = this.world.cabinets.find(c => c.game.id === gameId);
      if (localCab) {
        localCab.setLiveFrame(frameData, this.identity ? this.identity.tag : 'VOCÊ');
      }
    };

    this.overlay.onFrameEnded = (gameId) => {
      console.log(`[Watch Party] Ending local frame stream for ${gameId}`);
      if (this.network) {
        this.network.stopBroadcastingGame();
      }
      const localCab = this.world.cabinets.find(c => c.game.id === gameId);
      if (localCab) {
        localCab.clearLiveStream();
      }
    };

    this.overlay.onStreamEnded = (gameId) => {
      console.log(`[Watch Party] Ending local stream for ${gameId}`);
      if (this.network) {
        this.network.stopBroadcastingGame();
      }
      const localCab = this.world.cabinets.find(c => c.game.id === gameId);
      if (localCab) {
        localCab.clearLiveStream();
      }
    };
  }

  initWatchHud() {
    this.watchHud = new ArcadeWatchHud({
      onExit: () => this.stopSpectating(),
      onCheer: (cheerText) => {
        const myTag = this.identity?.tag || 'VOCÊ';
        const myColor = this.identity?.colorHex || '#00f5ff';
        this.player.showSpeechBubble(cheerText);
        if (this.network) {
          this.network.broadcastChat(cheerText);
        }
        this.appendChatMessage(myTag, cheerText, myColor, true);
      }
    });

    // Escape and V keys to exit spectator camarote mode
    window.addEventListener('keydown', (e) => {
      if (!this.isSpectating) return;
      // CRITICAL: Debounce exit by at least 400ms to prevent the exact same keydown event
      // that opened spectating from immediately stopping it in the same event dispatch loop!
      if (Date.now() - (this._spectateStartTime || 0) < 400) return;

      const isExitKey = (e.code === 'Escape' || e.key === 'Escape' || e.code === 'KeyV' || e.key === 'v' || e.key === 'V');
      if (isExitKey) {
        e.preventDefault();
        e.stopPropagation();
        this.stopSpectating();
      }
    }, true);
  }

  startSpectatingCabinet(cabinet) {
    if (!cabinet) return;
    if (this.overlay && this.overlay.isOpen) return;

    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }

    this._spectateStartTime = Date.now();
    this.isSpectating = true;
    this.spectateTarget = cabinet;
    window.__arcadeSpectating = true;

    if (this.interaction) {
      if (this.interaction.promptEl) this.interaction.promptEl.classList.remove('visible');
      if (this.interaction.actionBtn) this.interaction.actionBtn.classList.remove('visible');
    }

    import('./audio.js').then(m => m.playDopamineChime?.());

    if (this.watchHud) {
      this.watchHud.show(cabinet, 1);
    }
  }

  stopSpectating() {
    if (!this.isSpectating) return;
    this.isSpectating = false;
    this.spectateTarget = null;
    window.__arcadeSpectating = false;
    this.clock.getDelta(); // Reset camera delta

    if (this.watchHud) {
      this.watchHud.hide();
    }
  }

  initJukebox() {
    this.jukeboxModal = new ArcadeJukeboxModal();
    this.musicHud = new ArcadeMusicHud(() => this.openJukebox());
    musicManager.init();
  }

  openJukebox() {
    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }
    if (this.jukeboxModal) {
      import('./audio.js').then(m => m.playDopamineChime?.());
      this.jukeboxModal.open();
    }
  }

  initNetwork() {
    this.scoreTicker = new ScoreTicker();
    this.network = new ArcadeNetwork(this.scene, this.identity || { tag: 'MARC1', color: 0x00f5ff, colorHex: '#00f5ff' }, this.scoreTicker);
    window.__ARCADE_NETWORK__ = this.network;

    this.network.onCabinetOccupancyChange = (peerId, tag, gameId, isPlaying, isLiveStream) => {
      if (isPlaying && gameId) {
        const cab = this.world.cabinets.find(c => c.game.id === gameId);
        if (cab) {
          cab.setOccupiedBy(tag, !!isLiveStream);
        }
      } else {
        this.world.cabinets.forEach(cab => {
          if (cab.occupiedBy === tag) {
            cab.clearOccupied();
            if (this.isSpectating && this.spectateTarget === cab) {
              this.stopSpectating();
            }
          }
        });
      }
    };

    this.network.onRemoteGameStream = (gameId, pilotTag, stream, peerId) => {
      console.log(`[Watch Party] Applying remote video stream for ${gameId} from ${pilotTag}`);
      const cab = this.world.cabinets.find(c => c.game.id === gameId);
      if (cab) {
        cab.setLiveStream(stream, pilotTag);
        if (this.isSpectating && this.spectateTarget === cab && this.watchHud) {
          this.watchHud.show(cab, 1);
        }
      }
    };

    this.network.onRemoteGameStreamEnded = (gameId, peerId) => {
      console.log(`[Watch Party] Remote stream ended for ${gameId}`);
      const cab = this.world.cabinets.find(c => c.game.id === gameId);
      if (cab) {
        cab.clearLiveStream();
      }
      if (this.isSpectating && this.spectateTarget === cab) {
        this.stopSpectating();
      }
    };

    this.network.onRemoteGameFrame = (gameId, pilotTag, frameData, peerId) => {
      const cab = this.world.cabinets.find(c => c.game.id === gameId);
      if (cab) {
        cab.setLiveFrame(frameData, pilotTag);
        if (this.isSpectating && this.spectateTarget === cab && this.watchHud) {
          if (!this.watchHud.isOpen) {
            this.watchHud.show(cab, 1);
          }
        }
      }
    };

    this.network.onRemoteGameFrameEnded = (gameId, peerId) => {
      console.log(`[Watch Party] Remote frame stream ended for ${gameId}`);
      if (gameId) {
        const cab = this.world.cabinets.find(c => c.game.id === gameId);
        if (cab) {
          cab.clearLiveStream();
        }
        if (this.isSpectating && this.spectateTarget === cab) {
          this.stopSpectating();
        }
      } else {
        this.world.cabinets.forEach(cab => {
          if (cab.isLiveStreaming) {
            cab.clearLiveStream();
            if (this.isSpectating && this.spectateTarget === cab) {
              this.stopSpectating();
            }
          }
        });
      }
    };
  }

  initPointerLock() {
    const dom = this.renderer.domElement;
    this.isPointerLocked = false;
    this.camPitch = 0;

    dom.addEventListener('click', (e) => {
      if (document.body.classList.contains('touch-device') || ('ontouchstart' in window)) return;
      if (window.__arcadeOverlayOpen || (this.overlay && this.overlay.isOpen)) return;
      if (this.jukeboxModal && this.jukeboxModal.isOpen) return;

      if (e.target.closest && e.target.closest('.nopex-hud-header, .arcade-music-hud, .arcade-commands-dock, .arcade-hologram-card, .arcade-jukebox-modal, #arcade-chat-dock')) {
        return;
      }

      if (document.pointerLockElement !== dom && dom.requestPointerLock) {
        dom.requestPointerLock();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = (document.pointerLockElement === dom);
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isPointerLocked) return;
      if (window.__arcadeOverlayOpen || (this.overlay && this.overlay.isOpen)) return;

      const movementX = e.movementX || 0;
      const movementY = e.movementY || 0;

      this.player.rotation -= movementX * 0.0032;
      this.player.targetRotation = this.player.rotation;
      this.camPitch = Math.max(-0.2, Math.min(0.35, (this.camPitch || 0) - movementY * 0.0018));
    });
  }

  initChatDock() {
    const dock = document.getElementById('arcade-chat-dock');
    const messagesEl = document.getElementById('arcade-chat-messages');
    const input = document.getElementById('arcade-chat-input');
    const sendBtn = document.getElementById('arcade-chat-send');
    const mobileToggle = document.getElementById('mobile-chat-toggle');

    this.chatDock = dock;
    this.chatMessagesEl = messagesEl;
    this.chatInput = input;

    const sendMessage = () => {
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      input.value = '';

      const myTag = this.identity?.tag || 'VOCÊ';
      const myColor = this.identity?.colorHex || '#00f5ff';

      this.player.showSpeechBubble(text);

      if (this.network) {
        this.network.broadcastChat(text);
      }

      this.appendChatMessage(myTag, text, myColor, true);
      input.blur();
    };

    if (sendBtn) {
      sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendMessage();
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        e.stopPropagation();
        if (e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
        } else if (e.key === 'Escape') {
          input.blur();
        }
      });
    }

    if (mobileToggle && dock) {
      mobileToggle.addEventListener('click', () => {
        dock.classList.toggle('active');
        if (dock.classList.contains('active') && input) {
          input.focus();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (window.__arcadeOverlayOpen) return;
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.code === 'KeyC') {
        e.preventDefault();
        if (document.pointerLockElement) {
          document.exitPointerLock?.();
        }
        if (dock) dock.classList.add('active');
        if (input) {
          input.focus();
          input.select();
        }
      }
    });

    window.addEventListener('arcade-chat-received', (e) => {
      const detail = e.detail;
      if (!detail) return;
      this.appendChatMessage(detail.tag || 'P2', detail.text, detail.colorHex || '#ff007f', false);
    });
  }

  appendChatMessage(tag, text, colorHex, isSelf = false) {
    if (!this.chatMessagesEl) return;
    const row = document.createElement('div');
    row.className = `chat-msg-row ${isSelf ? 'msg-self' : ''}`;

    const tagSpan = document.createElement('span');
    tagSpan.className = 'chat-msg-tag';
    tagSpan.textContent = `[${tag}]: `;
    tagSpan.style.color = colorHex || '#00f5ff';

    const textSpan = document.createElement('span');
    textSpan.className = 'chat-msg-text';
    textSpan.textContent = text;

    row.appendChild(tagSpan);
    row.appendChild(textSpan);
    this.chatMessagesEl.appendChild(row);

    while (this.chatMessagesEl.children.length > 25) {
      this.chatMessagesEl.removeChild(this.chatMessagesEl.firstChild);
    }

    this.chatMessagesEl.scrollTop = this.chatMessagesEl.scrollHeight;

    if (this.chatDock) {
      this.chatDock.classList.add('active');
      clearTimeout(this._chatHideTimer);
      this._chatHideTimer = setTimeout(() => {
        if (document.activeElement !== this.chatInput) {
          this.chatDock.classList.remove('active');
        }
      }, 7000);
    }
  }

  setPlayerIdentity(identity) {
    this.identity = identity;
    if (this.player) {
      this.player.setIdentity(identity);
    }
    if (this.network) {
      this.network.identity = identity;
      this.network.broadcastIdentity();
    }
  }

  launchGame(game, cabinet) {
    if (cabinet && cabinet.isJukebox) {
      this.openJukebox();
      return;
    }

    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }

    this.spendToken();
    this.isZoomingIn = true;
    this.zoomTarget = cabinet;
    this.zoomProgress = 0;

    if (cabinet) {
      cabinet.setOccupiedBy(this.identity ? this.identity.tag : 'VOCÊ');
    }

    if (this.network) {
      this.network.broadcastActivity(game.title || game.name);
      this.network.broadcastPlayingGame(game.id, true);
    }

    // Smooth camera zoom towards cabinet screen before opening overlay
    setTimeout(() => {
      this.overlay.open(game);
    }, 550);
  }

  teleportToCabinet(gameId) {
    const cab = this.world.cabinets.find(c => c.game.id === gameId);
    if (!cab) return;
    this.player.clearNavigationTarget();
    this.player.x = cab.standSpot.x;
    this.player.z = cab.standSpot.z;
    this.player.rotation = cab.rotationY + Math.PI;
    this.player.targetRotation = this.player.rotation;
    this.interaction.update(this.player);
  }

  showDestinationPulse(x, z) {
    this.destinationRing.position.set(x, 0.04, z);
    this.destinationRing.scale.set(0.6, 0.6, 0.6);
    this.destinationRing.material.opacity = 0.9;
    this.destinationPulse = 1.0;
  }

  initTapToWalk() {
    let touchStartTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;

    const handlePointerDown = (e) => {
      touchStartTime = performance.now();
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    };

    const handlePointerUp = (e) => {
      const dt = performance.now() - touchStartTime;
      const dx = Math.abs(e.clientX - touchStartX);
      const dy = Math.abs(e.clientY - touchStartY);

      // Must be a clean quick tap, not a drag or long hold
      if (dt > 380 || dx > 20 || dy > 20) return;

      // Ignore if clicking UI elements, HUD, modal, or controls
      const target = e.target;
      if (target.closest('.nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer')) {
        return;
      }

      const rect = this.renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera({ x: mouseX, y: mouseY }, this.camera);

      // 1. Check if an arcade cabinet was tapped
      let tappedCabinet = null;
      let closestDist = Infinity;

      for (const cab of this.world.cabinets) {
        const intersects = this.raycaster.intersectObjects(cab.group.children, true);
        if (intersects.length > 0 && intersects[0].distance < closestDist) {
          closestDist = intersects[0].distance;
          tappedCabinet = cab;
        }
      }

      if (tappedCabinet) {
        this.showDestinationPulse(tappedCabinet.standSpot.x, tappedCabinet.standSpot.z);
        this.player.setNavigationTarget(tappedCabinet.standSpot.x, tappedCabinet.standSpot.z, () => {
          this.interaction.update(this.player);
        });
        return;
      }

      // 2. Check if the floor was tapped
      if (this.world.floorMesh) {
        const floorIntersects = this.raycaster.intersectObject(this.world.floorMesh);
        if (floorIntersects.length > 0) {
          const pt = floorIntersects[0].point;
          // Clamp target to room bounds
          const b = this.world.roomBounds;
          const targetX = Math.max(b.minX + 0.5, Math.min(b.maxX - 0.5, pt.x));
          const targetZ = Math.max(b.minZ + 0.5, Math.min(b.maxZ - 0.5, pt.z));

          this.showDestinationPulse(targetX, targetZ);
          this.player.setNavigationTarget(targetX, targetZ, () => {
            this.interaction.update(this.player);
          });
        }
      }
    };

    const dom = this.renderer.domElement;
    dom.addEventListener('pointerdown', handlePointerDown);
    dom.addEventListener('pointerup', handlePointerUp);
  }

  initMobileControls() {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      document.body.classList.add('touch-device');
    }

    const joystickArea = document.getElementById('arcade-joystick');
    const stickThumb = document.getElementById('joystick-thumb');
    if (!joystickArea || !stickThumb) return;

    let touchId = null;
    let startX = 0;
    let startY = 0;
    const maxRadius = 45;

    // Arrow indicator elements
    const arrowUp = joystickArea.querySelector('.arrow-up');
    const arrowDown = joystickArea.querySelector('.arrow-down');
    const arrowLeft = joystickArea.querySelector('.arrow-left');
    const arrowRight = joystickArea.querySelector('.arrow-right');

    const updateArrows = (dx, dy) => {
      if (arrowUp) arrowUp.classList.toggle('active', dy < -12);
      if (arrowDown) arrowDown.classList.toggle('active', dy > 12);
      if (arrowLeft) arrowLeft.classList.toggle('active', dx < -12);
      if (arrowRight) arrowRight.classList.toggle('active', dx > 12);
    };

    const handleTouchStart = (e) => {
      // Don't capture if overlay is open
      if (this.overlay && this.overlay.isOpen) return;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const rect = joystickArea.getBoundingClientRect();
        
        // Touch on the joystick widget itself OR anywhere in the bottom-left quadrant
        const inJoystick = (t.clientX >= rect.left && t.clientX <= rect.right && t.clientY >= rect.top && t.clientY <= rect.bottom);
        const inLeftQuadrant = (t.clientX <= window.innerWidth * 0.55 && t.clientY >= window.innerHeight * 0.40);

        if (touchId === null && (inJoystick || inLeftQuadrant)) {
          // Check target to ensure we don't block HUD or header
          if (t.target && t.target.closest && t.target.closest('.nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay')) {
            continue;
          }

          e.preventDefault();
          touchId = t.identifier;

          if (inJoystick) {
            startX = rect.left + rect.width / 2;
            startY = rect.top + rect.height / 2;
          } else {
            // Dynamic repositioning: center joystick under player's thumb
            startX = t.clientX;
            startY = t.clientY;
            joystickArea.style.left = `${Math.max(12, Math.min(window.innerWidth - 130, startX - rect.width / 2))}px`;
            joystickArea.style.bottom = `${Math.max(12, Math.min(window.innerHeight - 130, window.innerHeight - startY - rect.height / 2))}px`;
          }

          joystickArea.classList.add('active');
          this.player.clearNavigationTarget();
          break;
        }
      }
    };

    const handleTouchMove = (e) => {
      if (touchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === touchId) {
          e.preventDefault();
          let dx = t.clientX - startX;
          let dy = t.clientY - startY;
          const dist = Math.hypot(dx, dy);

          if (dist > maxRadius) {
            dx = (dx / dist) * maxRadius;
            dy = (dy / dist) * maxRadius;
          }

          stickThumb.style.transform = `translate(${dx}px, ${dy}px)`;
          updateArrows(dx, dy);
          this.player.setJoystickVector(dx / maxRadius, dy / maxRadius);
          break;
        }
      }
    };

    const handleTouchEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchId) {
          touchId = null;
          stickThumb.style.transform = `translate(0px, 0px)`;
          joystickArea.classList.remove('active');
          updateArrows(0, 0);
          this.player.setJoystickVector(0, 0);
          break;
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    // On-Screen D-Pad Buttons
    const dpadButtons = [
      { id: 'dpad-up', vx: 0, vy: -1 },
      { id: 'dpad-down', vx: 0, vy: 1 },
      { id: 'dpad-left', vx: -1, vy: 0 },
      { id: 'dpad-right', vx: 1, vy: 0 }
    ];

    dpadButtons.forEach(({ id, vx, vy }) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const press = (e) => {
        e.preventDefault();
        this.player.clearNavigationTarget();
        this.player.setJoystickVector(vx, vy);
        btn.classList.add('pressed');
      };

      const release = (e) => {
        e.preventDefault();
        this.player.setJoystickVector(0, 0);
        btn.classList.remove('pressed');
      };

      btn.addEventListener('pointerdown', press);
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointerleave', release);
      btn.addEventListener('pointercancel', release);
    });
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();
    this.onResize();
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // CRITICAL: When game overlay is active (e.g. playing Bomberman, Mario, GTA 2),
    // PAUSE 3D rendering and world updates to allocate 100% CPU and GPU to the emulator!
    if (this.overlay && this.overlay.isOpen) {
      if (this.network) {
        // Lightweight network keepalive tick only
        this.network.update(delta, this.camera);
      }
      return;
    }

    const time = this.clock.getElapsedTime();

    // 1. Update World & Cabinets (with player position for distance culling)
    this.world.update(time, this.player);

    // Animate tap destination ring
    if (this.destinationPulse > 0) {
      this.destinationPulse -= delta * 1.6;
      const s = 0.6 + (1.0 - Math.max(0, this.destinationPulse)) * 0.9;
      this.destinationRing.scale.set(s, s, s);
      this.destinationRing.material.opacity = Math.max(0, this.destinationPulse) * 0.9;
      if (this.destinationPulse <= 0) {
        this.destinationRing.material.opacity = 0;
      }
    }

    // 2. Update Player
    this.player.update(delta, this.world.roomBounds, this.world.cabinets, this.camera);
    this.interaction.update(this.player);

    // 3. Update WebRTC Network Telemetry & Remote Players
    if (this.network) {
      this.network.broadcastLocalPosition(this.player.x, this.player.z, this.player.rotation, this.player.isMoving, this.player.y);
      this.network.update(delta, this.camera);
    }

    // 4. Camera Follow, Cinematic Spectator Over-the-Shoulder, or Smooth Zoom
    if (this.isSpectating && this.spectateTarget) {
      const cab = this.spectateTarget;
      const rotY = cab.rotationY;

      // Exact Screen Center in world space
      const screenCenterX = cab.position.x + Math.sin(rotY) * 0.51;
      const screenCenterY = 2.15;
      const screenCenterZ = cab.position.z + Math.cos(rotY) * 0.51;
      const screenCenter = new THREE.Vector3(screenCenterX, screenCenterY, screenCenterZ);

      // Forward and lateral right vectors
      const fwdX = Math.sin(rotY);
      const fwdZ = Math.cos(rotY);
      const rightX = Math.cos(rotY);
      const rightZ = -Math.sin(rotY);

      // Cinematic over-the-shoulder camera position framing the CRT screen:
      // ~2.0m distance from cabinet along forward line
      // ~2.18m eye level height with organic subtle breathing
      // ~0.28m lateral right offset framing the cabinet
      const targetCamPos = new THREE.Vector3(
        cab.position.x + fwdX * 2.0 + rightX * 0.28,
        2.18 + Math.sin(time * 1.8) * 0.012,
        cab.position.z + fwdZ * 2.0 + rightZ * 0.28
      );

      this.camera.position.lerp(targetCamPos, 0.12);
      this.camera.lookAt(screenCenter);
    } else if (this.isZoomingIn && this.zoomTarget) {
      const cab = this.zoomTarget;
      const rotY = cab.rotationY;

      // Exact Screen Center in world space
      const screenCenterX = cab.position.x + Math.sin(rotY) * 0.51;
      const screenCenterY = 2.15;
      const screenCenterZ = cab.position.z + Math.cos(rotY) * 0.51;
      const screenCenter = new THREE.Vector3(screenCenterX, screenCenterY, screenCenterZ);

      // Normal vector directly perpendicular to the angled CRT face
      const normalX = Math.sin(rotY) * 0.975;
      const normalY = 0.22;
      const normalZ = Math.cos(rotY) * 0.975;

      // Camera position placed directly along the screen normal at distance 1.35m
      const targetCamPos = new THREE.Vector3(
        screenCenterX + normalX * 1.35,
        screenCenterY + normalY * 1.35,
        screenCenterZ + normalZ * 1.35
      );

      this.camera.position.lerp(targetCamPos, 0.16);
      this.camera.lookAt(screenCenter);
    } else {
      // Third-person smooth follow with pitch support
      const pitch = this.camPitch || 0;
      const targetCamX = this.player.x;
      const targetCamY = 4.0 + pitch * 2.2;
      // Clamp camera so it NEVER penetrates the south wall
      const targetCamZ = Math.min(26.0, this.player.z + 6.2);

      this.camera.position.x += (targetCamX - this.camera.position.x) * 0.14;
      this.camera.position.y += (targetCamY - this.camera.position.y) * 0.14;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.14;

      // Smooth lookTarget with synchronized lerp
      if (!this.camLookTarget) {
        this.camLookTarget = new THREE.Vector3(this.player.x, 1.4, this.player.z - 1.2);
      }
      this.camLookTarget.x += (this.player.x - this.camLookTarget.x) * 0.14;
      this.camLookTarget.y = 1.4 + pitch * 3.5;
      this.camLookTarget.z += ((this.player.z - 1.2) - this.camLookTarget.z) * 0.14;

      this.camera.lookAt(this.camLookTarget);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
