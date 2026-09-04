import { playCoinDrop, playCabinetExit } from './audio.js';
import { musicManager } from './music-manager.js';

export class ArcadePlayOverlay {
  constructor(onCloseCallback) {
    this.onCloseCallback = onCloseCallback;
    this.overlay = document.getElementById('arcade-game-overlay');
    this.iframe = document.getElementById('arcade-game-iframe');
    this.titleEl = document.getElementById('arcade-overlay-title');
    this.closeBtn = document.getElementById('arcade-overlay-back');
    this.fullscreenBtn = document.getElementById('arcade-overlay-fullscreen');
    this.reloadBtn = document.getElementById('arcade-overlay-reload');

    this.isOpen = false;
    this.activeGame = null;
    this.currentStream = null;
    this._streamPollTimer = null;
    this.onStreamReady = null; // (stream, gameId) => void
    this.onStreamEnded = null; // (gameId) => void

    this.bindEvents();
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.overlay.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    if (this.reloadBtn) {
      this.reloadBtn.addEventListener('click', () => {
        if (this.iframe && this.activeGame) {
          this.iframe.src = this.activeGame.url;
        }
      });
    }

    // Universal message listener for games that postMessage to exit
    window.addEventListener('message', (e) => {
      if (e.data && (
        e.data.type === 'CLOSE_ARCADE_GAME' ||
        e.data.type === 'ARCADE_CLOSE' ||
        e.data.type === 'ARCADE_EXIT' ||
        e.data === 'closeArcade' ||
        e.data === 'escape'
      )) {
        this.close();
      }
    });

    // Parent window Escape listener (and key forwarder)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        e.preventDefault();
        e.stopPropagation();
        this.close();
        return;
      }

      // Forward game controls to iframe if open so keyboard control works instantaneously
      if (this.isOpen && this.iframe && this.iframe.contentWindow) {
        const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'W', 'a', 'A', 's', 'S', 'd', 'D', ' ', 'Enter'];
        if (gameKeys.includes(e.key)) {
          try {
            this.iframe.contentWindow.postMessage({ type: 'ARCADE_KEY_DOWN', key: e.key, code: e.code }, '*');
            this.iframe.contentWindow.dispatchEvent(new KeyboardEvent('keydown', { key: e.key, code: e.code, bubbles: true }));
          } catch (err) {}
        }
      }
    }, true);
  }

  attachIframeEscape() {
    if (!this.iframe) return;
    try {
      const win = this.iframe.contentWindow;
      const doc = this.iframe.contentDocument || win?.document;
      const onEscape = (e) => {
        if (e.key === 'Escape' || e.code === 'Escape' || e.keyCode === 27) {
          e.preventDefault();
          e.stopPropagation();
          this.close();
        }
      };

      if (win) {
        win.removeEventListener('keydown', onEscape, true);
        win.addEventListener('keydown', onEscape, true);
      }
      if (doc) {
        doc.removeEventListener('keydown', onEscape, true);
        doc.addEventListener('keydown', onEscape, true);
      }
    } catch (err) {
      // Cross-origin restriction (fallback relies on postMessage and overlay buttons)
    }
  }

  open(game) {
    this.isOpen = true;
    window.__arcadeOverlayOpen = true;
    if (document.exitPointerLock) {
      document.exitPointerLock();
    }
    this.activeGame = game;

    // Play coin insert chime and duck background music
    playCoinDrop();
    musicManager.duck(true);

    if (this.titleEl) {
      this.titleEl.innerHTML = `${game.icon || '🎮'} ${game.name || 'JOGO'}`;
    }

    if (this.iframe) {
      this.iframe.src = game.url;
      this.iframe.onload = () => {
        try {
          this.iframe.focus();
          if (this.iframe.contentWindow) this.iframe.contentWindow.focus();
          this.attachIframeEscape();
        } catch (err) {}
      };

      // Periodic check to ensure listener is attached once emulator finishes booting
      setTimeout(() => this.attachIframeEscape(), 150);
      setTimeout(() => this.attachIframeEscape(), 600);
      setTimeout(() => this.attachIframeEscape(), 1500);

      // Start stream capture monitoring for WebRTC watch party
      this.startStreamMonitoring(game.id);
    }

    if (this.overlay) {
      this.overlay.style.display = 'flex';
      setTimeout(() => {
        this.overlay.classList.add('active');
        try {
          if (this.iframe) {
            this.iframe.focus();
            if (this.iframe.contentWindow) this.iframe.contentWindow.focus();
            this.attachIframeEscape();
          }
        } catch (err) {}
      }, 100);
    }
  }

  captureGameStream() {
    if (!this.iframe) return null;
    try {
      const doc = this.iframe.contentDocument || this.iframe.contentWindow?.document;
      if (!doc) return null;
      const canvas = doc.querySelector('canvas');
      if (canvas && typeof canvas.captureStream === 'function') {
        return canvas.captureStream(24); // 24 FPS stream
      }
    } catch (e) {
      // Cross-origin restriction (expected for non-local iframes)
    }
    return null;
  }

  startStreamMonitoring(gameId) {
    if (this._streamPollTimer) clearInterval(this._streamPollTimer);

    let attempts = 0;
    const maxAttempts = 15; // Poll every 400ms for up to 6 seconds while game boots

    this._streamPollTimer = setInterval(() => {
      attempts++;
      if (!this.isOpen) {
        clearInterval(this._streamPollTimer);
        this._streamPollTimer = null;
        return;
      }

      const stream = this.captureGameStream();
      if (stream) {
        clearInterval(this._streamPollTimer);
        this._streamPollTimer = null;
        this.currentStream = stream;
        console.log(`[Watch Party] Captured game stream for ${gameId} (${stream.getVideoTracks().length} video track)`);
        if (this.onStreamReady) {
          this.onStreamReady(stream, gameId);
        }
      } else if (attempts >= maxAttempts) {
        clearInterval(this._streamPollTimer);
        this._streamPollTimer = null;
      }
    }, 400);
  }

  close() {
    if (!this.isOpen) return;
    const closingGameId = this.activeGame ? this.activeGame.id : null;
    this.isOpen = false;
    window.__arcadeOverlayOpen = false;

    // Stop stream polling and active media stream tracks
    if (this._streamPollTimer) {
      clearInterval(this._streamPollTimer);
      this._streamPollTimer = null;
    }
    if (this.currentStream) {
      try {
        this.currentStream.getTracks().forEach(track => track.stop());
      } catch (e) {}
      this.currentStream = null;
    }
    if (this.onStreamEnded && closingGameId) {
      this.onStreamEnded(closingGameId);
    }

    // Immediately exit fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    playCabinetExit();
    musicManager.duck(false);

    if (this.overlay) {
      this.overlay.classList.remove('active');
      setTimeout(() => {
        this.overlay.style.display = 'none';
        if (this.iframe) this.iframe.src = 'about:blank';
      }, 250);
    }

    if (this.onCloseCallback) {
      this.onCloseCallback();
    }
  }
}
