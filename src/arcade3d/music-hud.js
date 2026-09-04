import { musicManager } from './music-manager.js';

export class ArcadeMusicHud {
  constructor(onOpenJukeboxModal) {
    this.onOpenJukeboxModal = onOpenJukeboxModal;
    this.hudContainer = document.getElementById('arcade-music-hud');
    this.tickerEl = document.getElementById('music-hud-ticker');
    this.playBtn = document.getElementById('music-hud-play');
    this.prevBtn = document.getElementById('music-hud-prev');
    this.nextBtn = document.getElementById('music-hud-next');
    this.expandBtn = document.getElementById('music-hud-expand');
    this.volBtn = document.getElementById('music-hud-vol');
    this.bars = document.querySelectorAll('.hud-eq-bar');

    this.isMuted = false;
    this.prevVolume = 0.7;

    this.bindEvents();
    musicManager.subscribe((data) => this.update(data));
  }

  bindEvents() {
    if (this.playBtn) {
      this.playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        musicManager.togglePlay();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        musicManager.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        musicManager.next();
      });
    }

    if (this.expandBtn) {
      this.expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.onOpenJukeboxModal) this.onOpenJukeboxModal();
      });
    }

    if (this.tickerEl) {
      this.tickerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.onOpenJukeboxModal) this.onOpenJukeboxModal();
      });
    }

    if (this.volBtn) {
      this.volBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.isMuted) {
          this.isMuted = false;
          musicManager.setVolume(this.prevVolume || 0.7);
          this.volBtn.textContent = '🔊';
        } else {
          this.isMuted = true;
          this.prevVolume = musicManager.volume;
          musicManager.setVolume(0);
          this.volBtn.textContent = '🔇';
        }
      });
    }
  }

  update(data) {
    if (this.playBtn) {
      this.playBtn.innerHTML = data.isPlaying ? '⏸' : '▶';
      this.playBtn.setAttribute('title', data.isPlaying ? 'Pausar' : 'Tocar');
    }

    if (this.tickerEl && data.currentTrack) {
      const isProc = data.isProcedural ? ' [SYNTH AI]' : '';
      this.tickerEl.innerHTML = `🎵 <strong>${data.currentTrack.artistName}</strong> — ${data.currentTrack.title}${isProc}`;
    }

    // Toggle animated equalizer bars
    const eq = document.getElementById('music-hud-eq');
    if (eq) {
      if (data.isPlaying && !data.isDucked) {
        eq.classList.add('dancing');
      } else {
        eq.classList.remove('dancing');
      }
    }
  }
}
