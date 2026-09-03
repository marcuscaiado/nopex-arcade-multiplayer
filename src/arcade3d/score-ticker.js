// Global High Score Broadcast & Ticker for Nopex Arcade Multiplayer

export class ScoreTicker {
  constructor() {
    this.tickerEl = null;
    this.createBanner();
  }

  createBanner() {
    let el = document.getElementById('mp-score-ticker');
    if (el) el.remove();

    el = document.createElement('div');
    el.id = 'mp-score-ticker';
    el.style.cssText = `
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%) translateY(-100px);
      background: linear-gradient(135deg, rgba(255, 211, 42, 0.95), rgba(255, 56, 56, 0.95));
      color: #000;
      font-family: 'Press Start 2P', monospace;
      font-size: 11px;
      font-weight: 900;
      padding: 10px 24px;
      border-radius: 30px;
      box-shadow: 0 0 25px rgba(255, 211, 42, 0.8), 0 4px 15px rgba(0, 0, 0, 0.5);
      z-index: 12000;
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: none;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      white-space: nowrap;
    `;

    document.body.appendChild(el);
    this.tickerEl = el;
  }

  showRecord(playerName, gameTitle, score) {
    if (!this.tickerEl) return;

    const formatted = typeof score === 'number' ? score.toLocaleString('pt-BR') : score;
    this.tickerEl.innerHTML = `
      <span style="font-size: 16px;">🏆</span>
      <span>NOVO RECORDE: <strong>${playerName}</strong> MARCOU <strong>${formatted} PTS</strong> EM ${gameTitle.toUpperCase()}!</span>
      <span style="font-size: 16px;">🔥</span>
    `;

    // Pop in
    this.tickerEl.style.transform = 'translateX(-50%) translateY(0)';

    // Play fanfare audio
    this.playFanfareAudio();

    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      this.tickerEl.style.transform = 'translateX(-50%) translateY(-100px)';
    }, 6000);
  }

  playFanfareAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') ctx.resume();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.1 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.3);
      });
    } catch (_) {}
  }
}
