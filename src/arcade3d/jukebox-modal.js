import { musicManager } from './music-manager.js';

export class ArcadeJukeboxModal {
  constructor() {
    this.modalEl = document.getElementById('arcade-jukebox-modal');
    this.isOpen = false;
    this.selectedArtistId = 'all';
    this.showLyrics = false;

    this.renderSkeleton();
    this.bindEvents();

    musicManager.subscribe((data) => this.onMusicStateUpdate(data));
  }

  renderSkeleton() {
    if (!this.modalEl) return;

    this.modalEl.innerHTML = `
      <div class="jukebox-backdrop" id="jukebox-backdrop"></div>
      <div class="jukebox-window">
        <!-- Top Bar -->
        <div class="jukebox-header">
          <div class="jukebox-brand">
            <span class="jukebox-logo-icon">⚡</span>
            <div>
              <div class="jukebox-title">RETRO ARCADE JUKEBOX</div>
              <div class="jukebox-subtitle">TRILHAS SONORAS CLÁSSICAS DOS JOGOS</div>
            </div>
          </div>
          <div class="jukebox-header-actions">
            <button id="jukebox-close-btn" class="jukebox-close-btn" title="Fechar Jukebox (ESC)">✕ FECHAR</button>
          </div>
        </div>

        <!-- Artist Filter Tabs -->
        <div class="jukebox-tabs" id="jukebox-artist-tabs">
          <button class="juke-tab active" data-artist="all">🎵 Todas as Músicas</button>
        </div>

        <!-- Main Content Area: Track Grid + Lyrics Panel -->
        <div class="jukebox-body">
          <div class="jukebox-tracklist" id="jukebox-track-container">
            <!-- Dynamically populated -->
          </div>

          <div class="jukebox-lyrics-panel" id="jukebox-lyrics-panel" style="display: none;">
            <div class="lyrics-header">
              <span class="lyrics-tag">LETRA & TRÍVIA DO JOGO</span>
              <button id="lyrics-close-btn" class="lyrics-close-btn">✕</button>
            </div>
            <div class="lyrics-content" id="jukebox-lyrics-content">
              Nenhuma informação disponível para esta faixa.
            </div>
          </div>
        </div>

        <!-- Bottom Player Dock -->
        <div class="jukebox-dock">
          <div class="dock-left">
            <img id="dock-cover" class="dock-cover-img" src="" alt="Capa" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200'; this.onerror=null;" />
            <div class="dock-info">
              <div id="dock-title" class="dock-title">Selecione uma música</div>
              <div id="dock-artist" class="dock-artist">Phase AI FM</div>
            </div>
            <button id="dock-lyrics-toggle" class="dock-lyrics-btn" title="Exibir Letra">📝 LETRA</button>
          </div>

          <div class="dock-center">
            <div class="dock-buttons">
              <button id="dock-prev" class="dock-ctrl-btn" title="Anterior">⏮</button>
              <button id="dock-play" class="dock-ctrl-btn dock-play-btn" title="Play/Pause">▶</button>
              <button id="dock-next" class="dock-ctrl-btn" title="Próxima">⏭</button>
            </div>
            <div class="dock-scrubber-wrap">
              <span id="dock-time-cur" class="dock-time">0:00</span>
              <div class="dock-progress-track" id="dock-progress-track">
                <div class="dock-progress-bar" id="dock-progress-bar"></div>
              </div>
              <span id="dock-time-dur" class="dock-time">0:00</span>
            </div>
          </div>

          <div class="dock-right">
            <div class="dock-vol-wrap">
              <span class="dock-vol-icon">🔊</span>
              <input type="range" id="dock-vol-slider" min="0" max="1" step="0.05" value="0.7" class="dock-vol-slider" />
            </div>
            <div class="dock-visualizer-mini">
              <canvas id="dock-canvas" width="60" height="24"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;

    this.initCanvasVisualizer();
  }

  initCanvasVisualizer() {
    this.canvas = document.getElementById('dock-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.freqData = new Uint8Array(16);

    const loop = () => {
      if (this.isOpen && this.ctx) {
        this.ctx.clearRect(0, 0, 60, 24);
        musicManager.getFrequencyData(this.freqData);

        for (let i = 0; i < 8; i++) {
          const val = this.freqData[i] / 255.0;
          const h = Math.max(3, val * 22);
          this.ctx.fillStyle = i % 2 === 0 ? '#00f5ff' : '#ff007f';
          this.ctx.fillRect(i * 7 + 2, 24 - h, 5, h);
        }
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  bindEvents() {
    const closeBtn = document.getElementById('jukebox-close-btn');
    const backdrop = document.getElementById('jukebox-backdrop');
    const playBtn = document.getElementById('dock-play');
    const prevBtn = document.getElementById('dock-prev');
    const nextBtn = document.getElementById('dock-next');
    const volSlider = document.getElementById('dock-vol-slider');
    const lyricsToggle = document.getElementById('dock-lyrics-toggle');
    const lyricsClose = document.getElementById('lyrics-close-btn');

    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (backdrop) backdrop.addEventListener('click', () => this.close());

    if (playBtn) playBtn.addEventListener('click', () => musicManager.togglePlay());
    if (prevBtn) prevBtn.addEventListener('click', () => musicManager.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => musicManager.next());

    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        musicManager.setVolume(parseFloat(e.target.value));
      });
    }

    if (lyricsToggle) {
      lyricsToggle.addEventListener('click', () => {
        this.showLyrics = !this.showLyrics;
        this.updateLyricsPanel();
      });
    }

    if (lyricsClose) {
      lyricsClose.addEventListener('click', () => {
        this.showLyrics = false;
        this.updateLyricsPanel();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (this.isOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.close();
        } else if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
          e.preventDefault();
          musicManager.togglePlay();
        }
      }
    });
  }

  open() {
    this.isOpen = true;
    if (this.modalEl) {
      this.modalEl.style.display = 'flex';
      setTimeout(() => this.modalEl.classList.add('active'), 10);
    }
    this.populateTabs();
    this.renderTracks();
    this.onMusicStateUpdate({
      isPlaying: musicManager.isPlaying,
      currentTrack: musicManager.getCurrentTrack(),
      currentTime: musicManager.currentTrackTime,
      duration: (musicManager.getCurrentTrack() && musicManager.getCurrentTrack().durationSec) || 140
    });
  }

  close() {
    this.isOpen = false;
    if (this.modalEl) {
      this.modalEl.classList.remove('active');
      setTimeout(() => {
        this.modalEl.style.display = 'none';
      }, 250);
    }
  }

  populateTabs() {
    const tabsContainer = document.getElementById('jukebox-artist-tabs');
    if (!tabsContainer || !musicManager.artists.length) return;

    let html = `<button class="juke-tab ${this.selectedArtistId === 'all' ? 'active' : ''}" data-artist="all">🎵 Todas as Músicas</button>`;

    musicManager.artists.forEach(artist => {
      const active = this.selectedArtistId === artist.id ? 'active' : '';
      html += `
        <button class="juke-tab ${active}" data-artist="${artist.id}">
          <img src="${artist.avatar}" class="tab-avatar" alt="" onerror="this.style.display='none'" />
          ${artist.name}
        </button>
      `;
    });

    tabsContainer.innerHTML = html;

    tabsContainer.querySelectorAll('.juke-tab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedArtistId = btn.getAttribute('data-artist');
        tabsContainer.querySelectorAll('.juke-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderTracks();
      });
    });
  }

  renderTracks() {
    const container = document.getElementById('jukebox-track-container');
    if (!container) return;

    const tracks = musicManager.tracks.filter(t => {
      if (this.selectedArtistId === 'all') return true;
      return t.artistId === this.selectedArtistId;
    });

    if (!tracks.length) {
      container.innerHTML = `<div class="juke-empty">Nenhuma faixa encontrada neste filtro.</div>`;
      return;
    }

    const currentTrack = musicManager.getCurrentTrack();

    container.innerHTML = tracks.map(t => {
      const isCurrent = currentTrack && currentTrack.id === t.id;
      const isPlaying = isCurrent && musicManager.isPlaying;

      return `
        <div class="juke-track-card ${isCurrent ? 'now-active' : ''}" data-id="${t.id}">
          <div class="track-card-cover-wrap">
            <img src="${t.cover}" class="track-card-cover" alt="${t.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200'" />
            <button class="track-card-play-btn" data-track-id="${t.id}">
              ${isPlaying ? '⏸' : '▶'}
            </button>
          </div>
          <div class="track-card-info">
            <div class="track-card-title-row">
              <span class="track-card-title">${t.title}</span>
              ${isCurrent ? '<span class="now-playing-badge">OUVINDO</span>' : ''}
            </div>
            <div class="track-card-artist">${t.artistName} • <span class="album-name">${t.album || 'Single'}</span></div>
            <div class="track-card-meta">
              <span class="track-meta-badge">⚡ ${t.bpm || 128} BPM</span>
              <span class="track-meta-plays">▶ ${t.plays || '1M'}</span>
              <span class="track-meta-time">⏱ ${t.duration || '2:15'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.juke-track-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = card.getAttribute('data-id');
        const trackIdx = musicManager.tracks.findIndex(t => t.id === id);
        if (trackIdx !== -1) {
          if (musicManager.currentIndex === trackIdx && musicManager.isPlaying) {
            musicManager.togglePlay();
          } else {
            musicManager.playTrack(trackIdx);
          }
        }
      });
    });
  }

  onMusicStateUpdate(data) {
    const playBtn = document.getElementById('dock-play');
    const dockCover = document.getElementById('dock-cover');
    const dockTitle = document.getElementById('dock-title');
    const dockArtist = document.getElementById('dock-artist');
    const timeCur = document.getElementById('dock-time-cur');
    const timeDur = document.getElementById('dock-time-dur');
    const progBar = document.getElementById('dock-progress-bar');

    if (playBtn) playBtn.innerHTML = data.isPlaying ? '⏸' : '▶';

    if (data.currentTrack) {
      if (dockCover) dockCover.src = data.currentTrack.cover;
      if (dockTitle) dockTitle.textContent = data.currentTrack.title;
      if (dockArtist) dockArtist.textContent = `${data.currentTrack.artistName} • ${data.currentTrack.synthStyle || 'AI Synth'}`;
    }

    if (timeCur && data.currentTime !== undefined) {
      timeCur.textContent = this.formatSeconds(data.currentTime);
    }
    if (timeDur && data.duration !== undefined) {
      timeDur.textContent = this.formatSeconds(data.duration);
    }
    if (progBar && data.duration) {
      const pct = Math.min(100, (data.currentTime / data.duration) * 100);
      progBar.style.width = `${pct}%`;
    }

    if (data.type === 'state') {
      this.renderTracks();
      this.updateLyricsPanel();
    }
  }

  updateLyricsPanel() {
    const panel = document.getElementById('jukebox-lyrics-panel');
    const content = document.getElementById('jukebox-lyrics-content');
    if (!panel || !content) return;

    if (!this.showLyrics) {
      panel.style.display = 'none';
      return;
    }

    panel.style.display = 'flex';
    const track = musicManager.getCurrentTrack();

    if (track && track.lyrics && track.lyrics.length) {
      content.innerHTML = track.lyrics.map(line => `
        <div class="lyrics-line">
          <span class="lyrics-time">[${this.formatSeconds(line.time)}]</span>
          <span class="lyrics-text">${line.text}</span>
        </div>
      `).join('');
    } else {
      content.innerHTML = `<div class="lyrics-empty">Nenhuma letra sincronizada para esta faixa instrumental.</div>`;
    }
  }

  formatSeconds(sec) {
    if (isNaN(sec) || sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}
