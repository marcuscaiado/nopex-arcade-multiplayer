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

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          this.close();
        }
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
    });
  }

  open(game) {
    this.isOpen = true;
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
        } catch (err) {}
      };
    }

    if (this.overlay) {
      this.overlay.style.display = 'flex';
      setTimeout(() => {
        this.overlay.classList.add('active');
        try {
          if (this.iframe) {
            this.iframe.focus();
            if (this.iframe.contentWindow) this.iframe.contentWindow.focus();
          }
        } catch (err) {}
      }, 100);
    }
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;

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
