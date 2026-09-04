import './style.css';
import ARCADE_GAMES from './games-manifest.json';
import { Arcade3DEngine } from './arcade3d/engine.js';
import { IdentityManager } from './arcade3d/identity-modal.js';
import { musicManager } from './arcade3d/music-manager.js';

const GIST_RAW_URL = 'https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json';

function initNopexArcade() {
  const container = document.getElementById('arcade-3d-canvas-container');
  const errorBanner = document.getElementById('webgl-error');

  if (!container) {
    console.error('Missing #arcade-3d-canvas-container');
    return;
  }

  let engine = null;

  // Identity Modal & Setup
  const identityManager = new IdentityManager((identity) => {
    if (!engine) {
      try {
        engine = new Arcade3DEngine(container, ARCADE_GAMES, identity);
        engine.start();
        window.__ARCADE_ENGINE__ = engine;
        window.__MUSIC_MANAGER__ = musicManager;

        // Ambient Jukebox Auto-start on player action
        const unlockAudio = () => {
          musicManager.unlockAndPlay();
        };
        window.addEventListener('pointerdown', unlockAudio, { once: true });
        window.addEventListener('keydown', unlockAudio, { once: true });
        window.addEventListener('touchstart', unlockAudio, { once: true });
        unlockAudio();
      } catch (err) {
        console.error('Fatal WebGL / Three.js Initialization Error:', err);
        if (errorBanner) {
          errorBanner.style.display = 'block';
          errorBanner.textContent = 'Erro ao inicializar 3D: ' + err.message;
        }
      }
    } else {
      engine.setPlayerIdentity(identity);
    }
  });

  // TAG button in top header
  const tagBtn = document.getElementById('arcade-tag-btn');
  if (tagBtn) {
    tagBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      identityManager.showModal();
    });
  }

  // Hook High Scores broadcast from local play
  if (window.ArcadeLeaderboard && window.ArcadeLeaderboard.submitScore) {
    const originalSubmit = window.ArcadeLeaderboard.submitScore.bind(window.ArcadeLeaderboard);
    window.ArcadeLeaderboard.submitScore = function(gameId, score) {
      const res = originalSubmit(gameId, score);
      if (window.__ARCADE_NETWORK__) {
        const game = ARCADE_GAMES.find(g => g.id === gameId);
        const title = game ? game.title : gameId;
        window.__ARCADE_NETWORK__.broadcastHighScore(title, score);
      }
      return res;
    };
  }

  // Also listen for iframe postMessage
  window.addEventListener('message', (e) => {
    if (e.data && (e.data.type === 'ARCADE_SCORE' || e.data.type === 'GAME_SCORE') && e.data.score) {
      if (window.__ARCADE_NETWORK__) {
        const game = ARCADE_GAMES.find(g => g.id === e.data.gameId);
        const title = (game && game.title) || e.data.gameTitle || 'Arcade Game';
        window.__ARCADE_NETWORK__.broadcastHighScore(title, Number(e.data.score));
      }
    }
  });

  // Teleport Select Handler
  const teleportSelect = document.getElementById('teleport-select');
  if (teleportSelect) {
    teleportSelect.addEventListener('change', (e) => {
      const gameId = e.target.value;
      if (gameId && engine) {
        import('./arcade3d/audio.js').then(m => m.playDopamineChime());
        engine.teleportToCabinet(gameId);
        teleportSelect.blur();
      }
    });
  }

  // Mobile Control Mode Switcher (Joystick <-> D-Pad)
  const ctrlToggle = document.getElementById('arcade-ctrl-toggle');
  const joystickEl = document.getElementById('arcade-joystick');
  const dpadEl = document.getElementById('arcade-dpad');
  let currentMode = 'joystick';

  if (ctrlToggle && joystickEl && dpadEl) {
    ctrlToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentMode === 'joystick') {
        currentMode = 'dpad';
        joystickEl.style.display = 'none';
        dpadEl.style.display = 'flex';
        ctrlToggle.innerHTML = '<span>🕹️ JOYSTICK</span>';
      } else {
        currentMode = 'joystick';
        joystickEl.style.display = 'block';
        dpadEl.style.display = 'none';
        ctrlToggle.innerHTML = '<span>🎮 D-PAD</span>';
      }
    });
  }

  // Fetch Live Global Leaderboards for Hologram HUD Cards
  async function syncWorldRecords() {
    window.__ARCADE_LEADERBOARDS__ = window.__ARCADE_LEADERBOARDS__ || {};
    try {
      const res = await fetch(`${GIST_RAW_URL}?_t=${Date.now()}`);
      if (res.ok) {
        const cloudData = await res.json();
        ARCADE_GAMES.forEach(game => {
          let localScores = [];
          try {
            localScores = JSON.parse(localStorage.getItem(`arcade_lb_${game.id}`) || '[]');
          } catch(e) {}
          const cloudScores = cloudData[game.id] || [];
          const allScores = [...cloudScores, ...localScores].filter(s => s && s.name && s.score);
          allScores.sort((a, b) => b.score - a.score);

          const champ = allScores[0];
          if (champ) {
            window.__ARCADE_LEADERBOARDS__[game.id] = {
              topScore: champ.score,
              topPilot: (String(champ.name).replace(/[^a-zA-Z0-9]/g, '').toUpperCase().substring(0, 3) || 'MRC')
            };
          }
        });
      }
    } catch(e) {
      console.warn('Could not sync cloud records:', e);
    }
  }

  syncWorldRecords();
}

// Bulletproof execution regardless of script load timing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNopexArcade);
} else {
  initNopexArcade();
}
