import { playCabinetHighlight } from './audio.js';

export class ArcadeInteraction {
  constructor(cabinets, onPlayGame, onDiscoverCabinet = null, onWatchGame = null) {
    this.cabinets = cabinets;
    this.onPlayGame = onPlayGame;
    this.onDiscoverCabinet = onDiscoverCabinet;
    this.onWatchGame = onWatchGame;
    this.activeCabinet = null;
    this.lastHoveredCab = null;

    // DOM Hologram Card & Action Prompt elements
    this.promptEl = document.getElementById('arcade-3d-prompt');
    this.promptTitle = document.getElementById('arcade-prompt-title');
    this.promptDesc = document.getElementById('arcade-prompt-desc');
    this.promptRecord = document.getElementById('arcade-prompt-record');
    this.actionBtn = document.getElementById('arcade-action-btn');
    this.playBtn = document.getElementById('arcade-hologram-play-btn');
    this.watchBtn = document.getElementById('arcade-hologram-watch-btn');

    this.bindInputs();
  }

  bindInputs() {
    window.addEventListener('keydown', (e) => {
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        return;
      }
      if (window.__arcadeOverlayOpen || window.__arcadeSpectating) return;

      if ((e.code === 'Enter' || e.code === 'KeyE') && this.activeCabinet) {
        e.preventDefault();
        this.triggerPlay();
      }

      if (e.code === 'KeyV' && this.activeCabinet) {
        e.preventDefault();
        this.triggerWatch();
      }
    });

    if (this.actionBtn) {
      this.actionBtn.addEventListener('click', () => {
        if (this.activeCabinet) {
          if (this.activeCabinet.isLiveStreaming && this.onWatchGame) {
            this.triggerWatch();
          } else {
            this.triggerPlay();
          }
        }
      });
    }

    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => {
        if (this.activeCabinet) this.triggerPlay();
      });
    }

    if (this.watchBtn) {
      this.watchBtn.addEventListener('click', () => {
        if (this.activeCabinet) this.triggerWatch();
      });
    }

    if (this.promptEl) {
      this.promptEl.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && this.activeCabinet) {
          if (this.activeCabinet.isLiveStreaming && this.onWatchGame) {
            this.triggerWatch();
          } else {
            this.triggerPlay();
          }
        }
      });
    }
  }

  triggerPlay() {
    if (this.activeCabinet && this.onPlayGame) {
      this.onPlayGame(this.activeCabinet.game, this.activeCabinet);
    }
  }

  triggerWatch() {
    if (this.activeCabinet && this.onWatchGame) {
      this.onWatchGame(this.activeCabinet);
    }
  }

  update(player) {
    if (window.__arcadeSpectating) {
      if (this.promptEl) this.promptEl.classList.remove('visible');
      if (this.actionBtn) this.actionBtn.classList.remove('visible');
      return;
    }

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

      const isLiveNow = !!(closestCab.isLiveStreaming || closestCab.occupiedBy);
      if (this.lastHoveredCab !== closestCab || this._lastLiveState !== isLiveNow) {
        if (this.lastHoveredCab !== closestCab) playCabinetHighlight();
        this.lastHoveredCab = closestCab;
        this._lastLiveState = isLiveNow;
        this.renderHologram(closestCab.game);
        if (this.onDiscoverCabinet) {
          this.onDiscoverCabinet(closestCab.game.id);
        }
      }

      if (this.promptEl) this.promptEl.classList.add('visible');
      if (this.actionBtn) this.actionBtn.classList.add('visible');
    } else {
      this.activeCabinet = null;
      this.lastHoveredCab = null;
      this._lastLiveState = null;
      if (this.promptEl) this.promptEl.classList.remove('visible');
      if (this.actionBtn) this.actionBtn.classList.remove('visible');
    }
  }

  renderHologram(game) {
    const isLive = this.activeCabinet && (this.activeCabinet.isLiveStreaming || this.activeCabinet.occupiedBy);
    const pilotTag = this.activeCabinet ? (this.activeCabinet.liveStreamTag || this.activeCabinet.occupiedBy) : null;

    if (this.watchBtn) {
      this.watchBtn.style.display = isLive ? 'inline-flex' : 'none';
    }

    if (this.promptTitle) {
      if (isLive) {
        this.promptTitle.innerHTML = `<span style="color:#ff0055; animation: blink-dot 1.2s infinite;">🔴 AO VIVO</span> • ${game.icon || '🎮'} ${game.name || 'ARCADE GAME'}`;
      } else {
        this.promptTitle.innerHTML = `${game.icon || '🎮'} ${game.name || 'ARCADE GAME'}`;
      }
    }
    if (this.promptDesc) {
      if (game.isJukebox) {
        this.promptDesc.textContent = game.description || 'Pressione [E] ou [ENTER] para abrir o Jukebox de trilhas clássicas.';
      } else if (isLive) {
        this.promptDesc.textContent = `Partida em andamento com [${pilotTag}]. Pressione [V] para assistir a transmissão ao vivo ou [E] para jogar.`;
      } else {
        this.promptDesc.textContent = game.description || 'Pressione [ENTER] ou [E] para entrar na máquina e jogar.';
      }
    }
    if (this.promptRecord) {
      if (game.isJukebox) {
        this.promptRecord.innerHTML = `🎵 <strong>RETRO ARCADE JUKEBOX</strong> • 15 Trilhas Clássicas dos Jogos`;
      } else if (isLive) {
        this.promptRecord.innerHTML = `🔴 <strong>AO VIVO NO SALÃO</strong> • Piloto: <strong>[${pilotTag}]</strong> • Pressione <kbd class="kbd-neon">V</kbd> para Assistir`;
      } else {
        const lb = window.__ARCADE_LEADERBOARDS__ && window.__ARCADE_LEADERBOARDS__[game.id];
        if (lb && lb.topScore) {
          this.promptRecord.innerHTML = `🏆 Recorde Mundial: <strong>${lb.topScore.toLocaleString()} ${game.unit || 'PTS'}</strong> [${lb.topPilot || 'MRC'}]`;
        } else {
          this.promptRecord.innerHTML = `⚡ 60 FPS Instantâneo • <strong>${(game.category || 'ACTION').toUpperCase()}</strong>`;
        }
      }
    }
    if (this.playBtn) {
      if (game.isJukebox) {
        this.playBtn.innerHTML = `<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">J</kbd> PARA OUVIR</span> ➔`;
      } else if (isLive) {
        this.playBtn.innerHTML = `<span>ASSISTIR <kbd class="kbd-action">V</kbd> OU JOGAR <kbd class="kbd-action">E</kbd></span> ➔`;
      } else {
        this.playBtn.innerHTML = `<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">ENTER</kbd> PARA JOGAR</span> ➔`;
      }
    }
    if (this.actionBtn) {
      if (game.isJukebox) {
        this.actionBtn.innerHTML = `<span>OUVIR</span> 📻`;
      } else if (isLive) {
        this.actionBtn.innerHTML = `<span>ASSISTIR</span> 🔴`;
      } else {
        this.actionBtn.innerHTML = `<span>JOGAR</span> 🕹️`;
      }
    }
  }
}
