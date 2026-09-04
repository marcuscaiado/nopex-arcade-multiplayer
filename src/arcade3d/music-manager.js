/**
 * ARCADE RETRO CLASSICS JUKEBOX ENGINE
 * High-fidelity HTML5 Audio player for authentic retro game soundtracks.
 * Plays directly to speakers (preventing unresumed AudioContext/CORS silences),
 * auto-resolves URLs for any base path or GitHub Pages deployment,
 * provides smooth volume ducking during arcade gameplay, and provides
 * rhythmic beat-synced frequency data for CRT visualizers.
 */

class ArcadeMusicManager {
  constructor() {
    this.catalog = null;
    this.tracks = [];
    this.artists = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isDucked = false;
    this.volume = 0.75;
    this.duckMultiplier = 1.0;
    this.duckInterval = null;
    this.subscribers = new Set();
    this.unlocked = false;

    // Dedicated HTML5 Audio Element for direct speaker streaming
    this.audioElement = new Audio();
    this.audioElement.preload = 'auto';
    this.audioElement.volume = this.volume;

    this.currentTrackTime = 0;
    this.tickerInterval = null;

    this.bindAudioEvents();
  }

  bindAudioEvents() {
    this.audioElement.addEventListener('ended', () => {
      this.next();
    });

    this.audioElement.addEventListener('timeupdate', () => {
      if (!isNaN(this.audioElement.currentTime)) {
        this.currentTrackTime = this.audioElement.currentTime;
      }
    });

    this.audioElement.addEventListener('play', () => {
      this.isPlaying = true;
      this.notify();
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notify();
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Audio playback error on current track:', e, this.audioElement.error);
      this.isPlaying = false;
      this.notify();
    });
  }

  /**
   * Resolves any relative or absolute path against the current window location
   * ensuring correct resolution on GitHub Pages (e.g. /nopex-arcade/) and localhost.
   */
  resolveUrl(url) {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    // Strip leading ./ or /
    const clean = url.replace(/^(\.\/|\/)/, '');
    try {
      return new URL(clean, window.location.href).href;
    } catch (e) {
      return clean;
    }
  }

  async init() {
    const catalogData = await this.loadCatalog();
    if (catalogData) {
      this.catalog = catalogData;
      this.tracks = (catalogData.tracks || []).map(t => ({
        ...t,
        resolvedAudioUrl: this.resolveUrl(t.audioUrl)
      }));
      this.artists = catalogData.artists || [];
    }

    if (this.tracks.length > 0 && !this.audioElement.src) {
      this.audioElement.src = this.tracks[0].resolvedAudioUrl;
      this.audioElement.load();
    }

    this.startTicker();
    this.notify();
    return this;
  }

  async loadCatalog() {
    const candidates = [
      new URL('music/catalog.json', window.location.href).href,
      './music/catalog.json',
      '/music/catalog.json'
    ];

    for (const url of candidates) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data && data.tracks && data.tracks.length > 0) {
            return data;
          }
        }
      } catch (err) {
        // Continue to next candidate
      }
    }
    console.warn('Could not locate catalog.json in any fallback path');
    return null;
  }

  getCurrentTrack() {
    if (!this.tracks.length) return null;
    return this.tracks[this.currentIndex];
  }

  async playTrack(index) {
    if (!this.tracks.length) return;
    if (index < 0) index = this.tracks.length - 1;
    if (index >= this.tracks.length) index = 0;
    this.currentIndex = index;

    const track = this.getCurrentTrack();
    if (!track) return;

    this.currentTrackTime = 0;
    const targetSrc = track.resolvedAudioUrl || this.resolveUrl(track.audioUrl);

    if (this.audioElement.src !== targetSrc) {
      this.audioElement.src = targetSrc;
      this.audioElement.load();
    }

    this.applyVolume();

    try {
      await this.audioElement.play();
      this.isPlaying = true;
      this.unlocked = true;
      this.notify();
    } catch (err) {
      console.warn('Audio play() error or user gesture required:', err);
      this.isPlaying = false;
      this.notify();
    }
  }

  async togglePlay() {
    if (!this.tracks.length) return;

    if (this.isPlaying) {
      this.pause();
    } else {
      const track = this.getCurrentTrack();
      const targetSrc = track?.resolvedAudioUrl || this.resolveUrl(track?.audioUrl);

      if (!this.audioElement.src || this.audioElement.src.endsWith('/') || this.audioElement.src === 'about:blank') {
        if (targetSrc) {
          this.audioElement.src = targetSrc;
          this.audioElement.load();
        }
      }

      this.applyVolume();

      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.unlocked = true;
        this.notify();
      } catch (err) {
        console.warn('Audio play() error:', err);
        // Fallback to explicit track load
        this.playTrack(this.currentIndex);
      }
    }
  }

  pause() {
    this.isPlaying = false;
    this.audioElement.pause();
    this.notify();
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % (this.tracks.length || 1);
    this.playTrack(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + (this.tracks.length || 1)) % (this.tracks.length || 1);
    this.playTrack(prevIndex);
  }

  applyVolume() {
    const target = this.volume * this.duckMultiplier;
    this.audioElement.volume = Math.max(0, Math.min(1, target));
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    this.applyVolume();
    this.notify();
  }

  /**
   * Smoothly ducks audio down to 12% during arcade gameplay and restores upon exit
   */
  duck(isDucked) {
    this.isDucked = isDucked;
    const targetMultiplier = isDucked ? 0.12 : 1.0;

    if (this.duckInterval) clearInterval(this.duckInterval);

    const step = isDucked ? -0.1 : 0.1;
    this.duckInterval = setInterval(() => {
      if (Math.abs(this.duckMultiplier - targetMultiplier) < 0.1) {
        this.duckMultiplier = targetMultiplier;
        this.applyVolume();
        clearInterval(this.duckInterval);
        this.duckInterval = null;
      } else {
        this.duckMultiplier += step;
        this.applyVolume();
      }
    }, 25);
  }

  /**
   * Called on the player's first interaction anywhere on the document
   */
  unlockAndPlay() {
    if (this.unlocked) return;
    this.unlocked = true;
    if (!this.isPlaying) {
      this.playTrack(this.currentIndex);
    }
  }

  /**
   * Generates rhythmic beat-synced frequency data for CRT visualizers
   */
  getFrequencyData(outputArray) {
    if (!this.isPlaying) {
      outputArray.fill(0);
      return;
    }
    const t = performance.now() / 1000;
    const bpm = this.getCurrentTrack()?.bpm || 132;
    const beat = (t * (bpm / 60)) % 1;
    for (let i = 0; i < outputArray.length; i++) {
      const harmonic = Math.sin(t * 8 + i * 0.5);
      const pulse = Math.pow(Math.sin(beat * Math.PI), 2);
      const val = Math.max(0.08, (pulse * 0.65 + (harmonic * 0.5 + 0.5) * 0.35));
      outputArray[i] = Math.floor(val * 255 * (this.isDucked ? 0.2 : 1.0));
    }
  }

  startTicker() {
    if (this.tickerInterval) clearInterval(this.tickerInterval);
    this.tickerInterval = setInterval(() => {
      if (this.isPlaying) {
        if (!isNaN(this.audioElement.currentTime)) {
          this.currentTrackTime = this.audioElement.currentTime;
        }
        this.notify('time');
      }
    }, 250);
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  notify(type = 'state') {
    const track = this.getCurrentTrack();
    const duration = (this.audioElement && this.audioElement.duration && !isNaN(this.audioElement.duration) && this.audioElement.duration > 0)
      ? this.audioElement.duration
      : (track ? track.durationSec || 150 : 150);

    const data = {
      type,
      isPlaying: this.isPlaying,
      currentTrack: track,
      currentIndex: this.currentIndex,
      currentTime: this.currentTrackTime,
      duration,
      volume: this.volume,
      isDucked: this.isDucked,
      isProcedural: false
    };
    this.subscribers.forEach(fn => {
      try { fn(data); } catch (e) { console.error(e); }
    });
  }
}

export const musicManager = new ArcadeMusicManager();
if (typeof window !== 'undefined') {
  window.__MUSIC_MANAGER__ = musicManager;
}
