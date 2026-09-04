/**
 * ARCADE RETRO CLASSICS JUKEBOX ENGINE
 * High-fidelity Web Audio API player for authentic retro game soundtracks.
 * Connects real recorded game audio to CRT FFT visualizers and handles smooth game audio ducking.
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
    this.subscribers = new Set();

    // Web Audio Graph
    this.audioCtx = null;
    this.audioElement = null;
    this.sourceNode = null;
    this.gainNode = null;
    this.duckGainNode = null;
    this.analyserNode = null;

    this.currentTrackTime = 0;
    this.tickerInterval = null;
  }

  async init() {
    try {
      const res = await fetch('/music/catalog.json');
      if (res.ok) {
        this.catalog = await res.json();
        this.tracks = this.catalog.tracks || [];
        this.artists = this.catalog.artists || [];
      }
    } catch (e) {
      console.warn('Could not load /music/catalog.json:', e);
      this.tracks = [];
      this.artists = [];
    }

    this.setupAudioGraph();
    this.startTicker();
    this.notify();
    return this;
  }

  setupAudioGraph() {
    if (this.audioCtx) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    this.audioCtx = new AudioContext();
    this.analyserNode = this.audioCtx.createAnalyser();
    this.analyserNode.fftSize = 64;
    this.analyserNode.smoothingTimeConstant = 0.8;

    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

    this.duckGainNode = this.audioCtx.createGain();
    this.duckGainNode.gain.setValueAtTime(1.0, this.audioCtx.currentTime);

    // Chain: Source -> Gain -> DuckGain -> Analyser -> Output
    this.gainNode.connect(this.duckGainNode);
    this.duckGainNode.connect(this.analyserNode);
    this.analyserNode.connect(this.audioCtx.destination);

    // HTML5 Audio Element for streaming the real game tracks
    this.audioElement = new Audio();
    this.audioElement.crossOrigin = 'anonymous';

    try {
      this.sourceNode = this.audioCtx.createMediaElementSource(this.audioElement);
      this.sourceNode.connect(this.gainNode);
    } catch (e) {
      console.warn('MediaElementSource binding note:', e);
    }

    this.audioElement.addEventListener('ended', () => {
      this.next();
    });

    this.audioElement.addEventListener('timeupdate', () => {
      if (!isNaN(this.audioElement.currentTime)) {
        this.currentTrackTime = this.audioElement.currentTime;
      }
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Audio playback error for current track:', e);
    });
  }

  resumeContext() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
  }

  getCurrentTrack() {
    if (!this.tracks.length) return null;
    return this.tracks[this.currentIndex];
  }

  async playTrack(index) {
    this.resumeContext();

    if (index < 0) index = this.tracks.length - 1;
    if (index >= this.tracks.length) index = 0;
    this.currentIndex = index;

    const track = this.getCurrentTrack();
    if (!track) return;

    this.currentTrackTime = 0;

    if (this.audioElement && track.audioUrl) {
      this.audioElement.src = track.audioUrl;
      this.audioElement.load();
      const playPromise = this.audioElement.play();
      if (playPromise) {
        playPromise.then(() => {
          this.isPlaying = true;
          this.notify();
        }).catch(err => {
          console.warn('Playback requires user gesture or failed to start:', err);
          this.isPlaying = false;
          this.notify();
        });
      }
    }
  }

  togglePlay() {
    this.resumeContext();
    if (!this.tracks.length) return;

    if (this.isPlaying) {
      this.pause();
    } else {
      if (this.audioElement && this.audioElement.src && !this.audioElement.src.endsWith('/')) {
        this.audioElement.play().then(() => {
          this.isPlaying = true;
          this.notify();
        }).catch(() => {
          this.playTrack(this.currentIndex);
        });
      } else {
        this.playTrack(this.currentIndex);
      }
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
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

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
    this.notify();
  }

  /**
   * Ducks audio down smoothly to 12% when opening an arcade game cabinet
   */
  duck(isDucked) {
    this.isDucked = isDucked;
    if (!this.duckGainNode || !this.audioCtx) return;

    const target = isDucked ? 0.12 : 1.0;
    const now = this.audioCtx.currentTime;
    this.duckGainNode.gain.cancelScheduledValues(now);
    this.duckGainNode.gain.linearRampToValueAtTime(target, now + 0.35);
  }

  getFrequencyData(outputArray) {
    if (!this.analyserNode) {
      outputArray.fill(0);
      return;
    }
    this.analyserNode.getByteFrequencyData(outputArray);
  }

  startTicker() {
    if (this.tickerInterval) clearInterval(this.tickerInterval);
    this.tickerInterval = setInterval(() => {
      if (this.isPlaying) {
        if (this.audioElement && !isNaN(this.audioElement.currentTime)) {
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
    const duration = (this.audioElement && this.audioElement.duration && !isNaN(this.audioElement.duration))
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
