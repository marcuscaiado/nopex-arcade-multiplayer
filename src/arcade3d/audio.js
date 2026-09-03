/**
 * 3D Virtual Arcade - Procedural Audio Synthesizer
 * Built with native Web Audio API (zero external assets, zero latency)
 */

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Footstep sound on soft arcade carpet
 */
export function playFootstep() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(95 + Math.random() * 20, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

/**
 * Authentic Arcade Coin Drop & Insert Chime (Ding-clink + mechanism drop)
 */
export function playCoinDrop() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // High metal chime 1
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1850, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(2450, ctx.currentTime + 0.12);
    gain1.gain.setValueAtTime(0.18, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.28);

    // Celestial Dopamine Arpeggio (C5, E5, G5, C6) - Pure Serotonin Delivery
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const startTime = ctx.currentTime + idx * 0.05;
      g.gain.setValueAtTime(0, startTime);
      g.gain.linearRampToValueAtTime(0.16, startTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.5);

      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.55);
    });

    // Deep warm velvet sub-bass boom
    const sub = ctx.createOscillator();
    const subG = ctx.createGain();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(110, ctx.currentTime + 0.12);
    sub.frequency.exponentialRampToValueAtTime(42, ctx.currentTime + 0.45);
    subG.gain.setValueAtTime(0.26, ctx.currentTime + 0.12);
    subG.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
    sub.connect(subG);
    subG.connect(ctx.destination);
    sub.start(ctx.currentTime + 0.12);
    sub.stop(ctx.currentTime + 0.45);
  } catch (e) {}
}

/**
 * Pure comforting dopamine chime for UI and teleports
 */
export function playDopamineChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      const startTime = ctx.currentTime + idx * 0.055;
      g.gain.setValueAtTime(0, startTime);
      g.gain.linearRampToValueAtTime(0.18, startTime + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.45);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.5);
    });
  } catch (e) {}
}

/**
 * Soft proximity highlight chime when approaching an arcade cabinet
 */
export function playCabinetHighlight() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.18);
  } catch (e) {}
}

/**
 * Exit cabinet zoom out swoosh
 */
export function playCabinetExit() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}
