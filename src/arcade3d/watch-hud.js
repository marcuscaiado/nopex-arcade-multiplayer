/**
 * ArcadeWatchHud - Diegetic Spectator Camarote HUD
 * Overlays a sleek cyberpunk spectator control bar when viewing live gameplay
 * over the shoulder in 3D, featuring quick cheers, live indicators, and exit hotkey.
 */
export class ArcadeWatchHud {
  constructor(options = {}) {
    this.onExit = options.onExit || null;
    this.onCheer = options.onCheer || null;

    this.isOpen = false;
    this.activeCabinet = null;

    this.container = null;
    this.titleEl = null;
    this.pilotEl = null;
    this.countEl = null;
    this.cheerButtons = [];

    this.initDOM();
  }

  initDOM() {
    let el = document.getElementById('arcade-watch-hud');
    if (!el) {
      el = document.createElement('div');
      el.id = 'arcade-watch-hud';
      el.className = 'arcade-watch-hud';
      el.innerHTML = `
        <div class="watch-hud-topbar">
          <div class="watch-hud-live-badge">
            <span class="live-dot-pulse"></span>
            <span class="live-text">AO VIVO</span>
          </div>
          <div class="watch-hud-game-info">
            <span class="watch-hud-game-name" id="watch-hud-game-name">ARCADE GAME</span>
            <span class="watch-hud-divider">•</span>
            <span class="watch-hud-pilot" id="watch-hud-pilot">PILOTO: P1</span>
          </div>
          <div class="watch-hud-spectators" id="watch-hud-spectators">
            👁️ 1
          </div>
          <button class="watch-hud-exit-btn" id="watch-hud-exit-btn" title="Sair do Camarote (ESC / V)">
            <kbd class="kbd-neon">V</kbd>
            <span>SAIR DO CAMAROTE</span>
            <span class="exit-x">✕</span>
          </button>
        </div>

        <div class="watch-hud-bottombar">
          <div class="watch-hud-cheers-label">TORCIDA RÁPIDA:</div>
          <div class="watch-hud-cheers-dock">
            <button class="watch-cheer-btn" data-cheer="🔥 GG!">🔥 GG!</button>
            <button class="watch-cheer-btn" data-cheer="💥 BOA!">💥 BOA!</button>
            <button class="watch-cheer-btn" data-cheer="👏 MANDOU BEM!">👏 MANDOU BEM!</button>
            <button class="watch-cheer-btn" data-cheer="😱 CUIDADO!">😱 CUIDADO!</button>
            <button class="watch-cheer-btn" data-cheer="🪙 MAIS UMA FICHA!">🪙 MAIS UMA!</button>
          </div>
          <div class="watch-hud-hint">
            Pressione <kbd class="kbd-neon">ESC</kbd> ou <kbd class="kbd-neon">V</kbd> para voltar a andar
          </div>
        </div>
      `;
      document.body.appendChild(el);
    }

    this.container = el;
    this.titleEl = el.querySelector('#watch-hud-game-name');
    this.pilotEl = el.querySelector('#watch-hud-pilot');
    this.countEl = el.querySelector('#watch-hud-spectators');
    this.exitBtn = el.querySelector('#watch-hud-exit-btn');

    if (this.exitBtn) {
      this.exitBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.onExit) this.onExit();
      });
    }

    // Cheers buttons listener
    const cheerBtns = el.querySelectorAll('.watch-cheer-btn');
    cheerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cheerText = btn.getAttribute('data-cheer');
        if (cheerText && this.onCheer) {
          this.onCheer(cheerText);
          // Dopamine feedback animation on button
          btn.classList.add('cheer-popped');
          setTimeout(() => btn.classList.remove('cheer-popped'), 350);
        }
      });
    });
  }

  show(cabinet, spectatorCount = 1) {
    if (!this.container) return;
    this.isOpen = true;
    this.activeCabinet = cabinet;

    const gameName = cabinet?.game?.name || cabinet?.game?.title || 'ARCADE CLASSIC';
    const pilotTag = cabinet?.liveStreamTag || cabinet?.occupiedBy || 'PILOTO';

    if (this.titleEl) this.titleEl.textContent = gameName.toUpperCase();
    if (this.pilotEl) this.pilotEl.textContent = `PILOTO: ${pilotTag.toUpperCase()}`;
    if (this.countEl) this.countEl.innerHTML = `👁️ ${spectatorCount}`;

    this.container.classList.add('active');
    document.body.classList.add('arcade-spectating');
  }

  updateSpectators(count) {
    if (this.countEl) {
      this.countEl.innerHTML = `👁️ ${count}`;
    }
  }

  hide() {
    if (!this.container) return;
    this.isOpen = false;
    this.activeCabinet = null;
    this.container.classList.remove('active');
    document.body.classList.remove('arcade-spectating');
  }
}
