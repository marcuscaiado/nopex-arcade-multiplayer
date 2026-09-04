import { playCabinetHighlight } from './audio.js';

export class ArcadeInteraction {
  constructor(cabinets, onPlayGame) {
    this.cabinets = cabinets;
    this.onPlayGame = onPlayGame;
    this.activeCabinet = null;
    this.lastHoveredCab = null;

    // DOM Hologram Card & Action Prompt elements
    this.promptEl = document.getElementById('arcade-3d-prompt');
    this.promptTitle = document.getElementById('arcade-prompt-title');
    this.promptDesc = document.getElementById('arcade-prompt-desc');
    this.promptRecord = document.getElementById('arcade-prompt-record');
    this.actionBtn = document.getElementById('arcade-action-btn');
    this.playBtn = document.getElementById('arcade-hologram-play-btn');

    this.bindInputs();
  }

  bindInputs() {
    window.addEventListener('keydown', (e) => {
      if ((e.code === 'Enter' || e.code === 'KeyE') && this.activeCabinet) {
        e.preventDefault();
        this.triggerPlay();
      }
    });

    if (this.actionBtn) {
      this.actionBtn.addEventListener('click', () => {
        if (this.activeCabinet) this.triggerPlay();
      });
    }

    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => {
        if (this.activeCabinet) this.triggerPlay();
      });
    }

    if (this.promptEl) {
      this.promptEl.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && this.activeCabinet) {
          this.triggerPlay();
        }
      });
    }
  }

  triggerPlay() {
    if (this.activeCabinet && this.onPlayGame) {
      this.onPlayGame(this.activeCabinet.game, this.activeCabinet);
    }
  }

  update(player) {
    let closestCab = null;
    let closestDist = Infinity;

    for (const cab of this.cabinets) {
      cab.isHovered = false;
      const d = Math.hypot(player.x - cab.standSpot.x, player.z - cab.standSpot.z);
      if (d < 3.8 && d < closestDist) {
        closestDist = d;
        closestCab = cab;
      }
    }

    if (closestCab) {
      closestCab.isHovered = true;
      this.activeCabinet = closestCab;

      if (this.lastHoveredCab !== closestCab) {
        playCabinetHighlight();
        this.lastHoveredCab = closestCab;
        this.renderHologram(closestCab.game);
      }

      if (this.promptEl) this.promptEl.classList.add('visible');
      if (this.actionBtn) this.actionBtn.classList.add('visible');
    } else {
      this.activeCabinet = null;
      this.lastHoveredCab = null;
      if (this.promptEl) this.promptEl.classList.remove('visible');
      if (this.actionBtn) this.actionBtn.classList.remove('visible');
    }
  }

  renderHologram(game) {
    if (this.promptTitle) {
      this.promptTitle.innerHTML = `${game.icon || '🎮'} ${game.name || 'ARCADE GAME'}`;
    }
    if (this.promptDesc) {
      this.promptDesc.textContent = game.description || 'Pressione [ENTER] ou [E] para entrar na máquina e jogar.';
    }
    if (this.promptRecord) {
      const lb = window.__ARCADE_LEADERBOARDS__ && window.__ARCADE_LEADERBOARDS__[game.id];
      if (lb && lb.topScore) {
        this.promptRecord.innerHTML = `🏆 Recorde Mundial: <strong>${lb.topScore.toLocaleString()} ${game.unit || 'PTS'}</strong> [${lb.topPilot || 'MRC'}]`;
      } else {
        this.promptRecord.innerHTML = `⚡ 60 FPS Instantâneo • <strong>${(game.category || 'ACTION').toUpperCase()}</strong>`;
      }
    }
  }
}
