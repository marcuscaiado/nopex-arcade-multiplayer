import { playCabinetHighlight } from './audio.js';

export class ArcadeInteraction {
  constructor(cabinets, onPlayGame, onDiscoverCabinet = null, onWatchGame = null) {
    this.cabinets = cabinets;
    this.onPlayGame = onPlayGame;
    this.onDiscoverCabinet = onDiscoverCabinet;
    this.onWatchGame = onWatchGame;
    this.activeCabinet = null;
    this.lastHoveredCab = null;
    this._lastPlayerPos = null;

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

      const isWatchKey = (e.code === 'KeyV' || e.key === 'v' || e.key === 'V');
      if (isWatchKey) {
        const target = this.activeCabinet || this.findClosestLiveCabinet();
        if (target && (target.isLiveStreaming || target.occupiedBy)) {
          e.preventDefault();
          e.stopPropagation();
          this.triggerWatch(target);
          return;
        }
      }

      const isPlayKey = (e.code === 'Enter' || e.code === 'KeyE' || e.key === 'e' || e.key === 'E' || e.key === 'Enter');
      if (isPlayKey && this.activeCabinet) {
        e.preventDefault();
        e.stopPropagation();
        this.triggerPlay(this.activeCabinet);
        return;
      }
    }, true);

    if (this.actionBtn) {
      this.actionBtn.addEventListener('click', () => {
        if (this.activeCabinet) {
          if (this.activeCabinet.isLiveStreaming && this.onWatchGame) {
            this.triggerWatch(this.activeCabinet);
          } else {
            this.triggerPlay(this.activeCabinet);
          }
        }
      });
    }

    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => {
        if (this.activeCabinet) this.triggerPlay(this.activeCabinet);
      });
    }

    if (this.watchBtn) {
      this.watchBtn.addEventListener('click', () => {
        if (this.activeCabinet) this.triggerWatch(this.activeCabinet);
      });
    }

    if (this.promptEl) {
      this.promptEl.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && this.activeCabinet) {
          if (this.activeCabinet.isLiveStreaming && this.onWatchGame) {
            this.triggerWatch(this.activeCabinet);
          } else {
            this.triggerPlay(this.activeCabinet);
          }
        }
      });
    }
  }

  findClosestLiveCabinet() {
    let best = null;
    let bestDist = 5.2; // Proximity search up to 5.2m for live cabinets
    for (const cab of this.cabinets) {
      if (cab.isLiveStreaming || cab.occupiedBy) {
        if (this._lastPlayerPos) {
          const d = Math.hypot(this._lastPlayerPos.x - cab.position.x, this._lastPlayerPos.z - cab.position.z);
          if (d < bestDist) {
            bestDist = d;
            best = cab;
          }
        } else {
          best = cab;
        }
      }
    }
    return best;
  }

  triggerPlay(cab = this.activeCabinet) {
    if (cab && this.onPlayGame) {
      this.onPlayGame(cab.game, cab);
    }
  }

  triggerWatch(cab = this.activeCabinet) {
    if (cab && this.onWatchGame) {
      this.onWatchGame(cab);
    }
  }

  update(player) {
    this._lastPlayerPos = { x: player.x, z: player.z };

    if (window.__arcadeSpectating) {
      if (this.promptEl) this.promptEl.classList.remove('visible');
      if (this.actionBtn) this.actionBtn.classList.remove('visible');
      return;
    }

    let closestCab = null;
    let closestDist = Infinity;

    for (const cab of this.cabinets) {
      cab.isHovered = false;
      const dStand = Math.hypot(player.x - cab.standSpot.x, player.z - cab.standSpot.z);
      const dCenter = Math.hypot(player.x - cab.position.x, player.z - cab.position.z);
      const d = Math.min(dStand, dCenter * 0.92);
      if (d < 4.2 && d < closestDist) {
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
