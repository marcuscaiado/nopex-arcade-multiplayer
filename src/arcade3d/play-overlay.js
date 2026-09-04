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
    this._frameInterval = null;
    this._captureCanvas = null;
    this._captureCtx = null;
    this._captureVideo = null;
    this._currentCanvas = null;
    this.onStreamReady = null; // (stream, gameId) => void
    this.onStreamEnded = null; // (gameId) => void
    this.onFrameReady = null;  // (frameDataUrl, gameId) => void
    this.onFrameEnded = null;  // (gameId) => void

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

      // Start stream capture & continuous frame broadcasting for Watch Party
      this.startFrameBroadcasting(game.id);
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

  startFrameBroadcasting(gameId) {
    if (this._frameInterval) {
      clearInterval(this._frameInterval);
      this._frameInterval = null;
    }

    if (!this._captureCanvas) {
      this._captureCanvas = document.createElement('canvas');
      this._captureCanvas.width = 256;
      this._captureCanvas.height = 192;
      this._captureCtx = this._captureCanvas.getContext('2d', { alpha: false });
    }

    let streamNotified = false;

    // Stream frames at ~11 FPS (every 90ms)
    this._frameInterval = setInterval(() => {
      if (!this.isOpen || !this.iframe) {
        if (this._frameInterval) {
          clearInterval(this._frameInterval);
          this._frameInterval = null;
        }
        return;
      }

      try {
        const doc = this.iframe.contentDocument || this.iframe.contentWindow?.document;
        if (!doc) return;

        // Find main game canvas (sort by area if multiple exist)
        const canvases = Array.from(doc.querySelectorAll('canvas'));
        if (canvases.length === 0) return;

        let canvas = canvases[0];
        if (canvases.length > 1) {
          canvases.sort((a, b) => (b.width * b.height) - (a.width * a.height));
          canvas = canvases[0];
        }

        // Initialize capture video if captureStream is available
        if (canvas !== this._currentCanvas) {
          this._currentCanvas = canvas;
          if (typeof canvas.captureStream === 'function') {
            try {
              const stream = canvas.captureStream(12);
              this.currentStream = stream;
              if (!this._captureVideo) {
                this._captureVideo = document.createElement('video');
                this._captureVideo.muted = true;
                this._captureVideo.playsInline = true;
                this._captureVideo.autoplay = true;
              }
              this._captureVideo.srcObject = stream;
              this._captureVideo.play().catch(() => {});

              if (!streamNotified && this.onStreamReady) {
                streamNotified = true;
                this.onStreamReady(stream, gameId);
              }
            } catch (e) {}
          }
        }

        // Choose frame source: video compositor if active, otherwise direct canvas
        let source = canvas;
        if (this._captureVideo && this._captureVideo.videoWidth > 0 && !this._captureVideo.paused) {
          source = this._captureVideo;
        }

        if (source && (source.videoWidth > 0 || source.width > 0)) {
          this._captureCtx.drawImage(source, 0, 0, 256, 192);
          const frameData = this._captureCanvas.toDataURL('image/webp', 0.42);
          if (this.onFrameReady && frameData && frameData.length > 50) {
            this.onFrameReady(frameData, gameId);
          }
        }
      } catch (err) {
        // Cross-origin restriction or temporary canvas busy
      }
    }, 90);
  }

  close() {
    if (!this.isOpen) return;
    const closingGameId = this.activeGame ? this.activeGame.id : null;
    this.isOpen = false;
    window.__arcadeOverlayOpen = false;

    // Stop continuous frame broadcasting
    if (this._frameInterval) {
      clearInterval(this._frameInterval);
      this._frameInterval = null;
    }

    if (this._captureVideo) {
      try {
        if (this._captureVideo.srcObject) {
          this._captureVideo.srcObject.getTracks().forEach(t => t.stop());
        }
        this._captureVideo.pause();
        this._captureVideo.srcObject = null;
      } catch (e) {}
    }
    this._currentCanvas = null;

    if (this.currentStream) {
      try {
        this.currentStream.getTracks().forEach(track => track.stop());
      } catch (e) {}
      this.currentStream = null;
    }

    if (this.onStreamEnded && closingGameId) {
      this.onStreamEnded(closingGameId);
    }
    if (this.onFrameEnded && closingGameId) {
      this.onFrameEnded(closingGameId);
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
