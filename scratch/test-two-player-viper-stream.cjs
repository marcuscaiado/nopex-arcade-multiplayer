const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Marcus\\.gemini\\antigravity-ide\\brain\\90310e99-2fdd-412b-bd6e-5a222968fbfa';

async function runTwoPlayerTest() {
  console.log('🚀 Starting 2-player P2P Watch Party verification for Neon Viper 3D...');

  // Spawn Player A (Broadcaster)
  const portA = 9641;
  const chromeA = spawn(chromePath, [
    `--remote-debugging-port=${portA}`,
    '--headless=new',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-webgl',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,720',
    '--user-data-dir=C:\\Users\\Marcus\\.gemini\\antigravity-ide\\scratch\\.temp-chrome-player-a',
    'https://marcuscaiado.github.io/nopex-arcade-multiplayer/'
  ]);

  // Spawn Player B (Spectator)
  const portB = 9642;
  const chromeB = spawn(chromePath, [
    `--remote-debugging-port=${portB}`,
    '--headless=new',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-webgl',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,720',
    '--user-data-dir=C:\\Users\\Marcus\\.gemini\\antigravity-ide\\scratch\\.temp-chrome-player-b',
    'https://marcuscaiado.github.io/nopex-arcade-multiplayer/'
  ]);

  await new Promise(r => setTimeout(r, 4000));

  try {
    // Connect to A
    const listA = await getTabs(portA);
    const tabA = listA.find(t => t.url.includes('nopex-arcade-multiplayer')) || listA[0];
    const wsA = new globalThis.WebSocket(tabA.webSocketDebuggerUrl);
    const sendA = createSender(wsA);
    await new Promise(r => wsA.addEventListener('open', r));
    await sendA('Network.enable');
    await sendA('Network.setCacheDisabled', { cacheDisabled: true });
    await sendA('Page.enable');
    await sendA('Runtime.enable');

    // Connect to B
    const listB = await getTabs(portB);
    const tabB = listB.find(t => t.url.includes('nopex-arcade-multiplayer')) || listB[0];
    const wsB = new globalThis.WebSocket(tabB.webSocketDebuggerUrl);
    const sendB = createSender(wsB);
    await new Promise(r => wsB.addEventListener('open', r));
    await sendB('Network.enable');
    await sendB('Network.setCacheDisabled', { cacheDisabled: true });
    await sendB('Page.enable');
    await sendB('Runtime.enable');

    // Setup tags: Player A is MARC1, Player B is AMIGO
    console.log('Setting up player tags and identity...');
    await sendA('Runtime.evaluate', {
      expression: `(() => {
        const input = document.getElementById('tag-input');
        if (input) input.value = 'MARC1';
        const confirmBtn = document.querySelector('.identity-confirm-btn');
        if (confirmBtn) confirmBtn.click();
      })()`
    });

    await sendB('Runtime.evaluate', {
      expression: `(() => {
        const input = document.getElementById('tag-input');
        if (input) input.value = 'AMIGO';
        const confirmBtn = document.querySelector('.identity-confirm-btn');
        if (confirmBtn) confirmBtn.click();
      })()`
    });

    // Wait for P2P connection to establish
    console.log('Waiting 5s for WebRTC mesh connection...');
    await new Promise(r => setTimeout(r, 5000));

    // Player A launches Neon Viper 3D
    console.log('Player A launching Neon Viper 3D...');
    const launchA = await sendA('Runtime.evaluate', {
      expression: `(() => {
        const engine = window.__ARCADE_ENGINE__;
        const cab = engine.world.cabinets.find(c => c.game.id === 'neon-viper');
        engine.launchGame(cab.game, cab);
        return { launched: true, gameId: cab.game.id };
      })()`,
      returnByValue: true
    });
    console.log('Player A launch status:', launchA.result.value);

    // Wait 10 seconds for game to load inside iframe and begin streaming
    console.log('Waiting 10s for game iframe to render and stream frames...');
    await new Promise(r => setTimeout(r, 10000));

    // Inspect Player A's broadcast telemetry
    const diagA = await sendA('Runtime.evaluate', {
      expression: `(() => {
        const overlay = window.__ARCADE_ENGINE__?.overlay;
        let nonZero = 0;
        let centerPixel = null;
        if (overlay?._captureCanvas) {
          const ctx = overlay._captureCanvas.getContext('2d');
          const data = ctx.getImageData(0, 0, 256, 192).data;
          nonZero = Array.from(data).filter(v => v > 0).length;
          centerPixel = Array.from(ctx.getImageData(128, 96, 1, 1).data);
        }
        return {
          chosenCanvasId: overlay?._currentCanvas?.id,
          videoWidth: overlay?._captureVideo?.videoWidth,
          nonZeroPixels: nonZero,
          centerPixel
        };
      })()`,
      returnByValue: true
    });
    console.log('Broadcaster A Telemetry:', JSON.stringify(diagA.result.value, null, 2));

    // Inspect Player B's cabinet CRT screen for neon-viper
    const diagB = await sendB('Runtime.evaluate', {
      expression: `(() => {
        const engine = window.__ARCADE_ENGINE__;
        const cab = engine?.world?.cabinets?.find(c => c.game.id === 'neon-viper');
        let nonZero = 0;
        let centerPixel = null;
        if (cab?.screenCanvas) {
          const ctx = cab.screenCanvas.getContext('2d');
          const data = ctx.getImageData(0, 0, 256, 224).data;
          nonZero = Array.from(data).filter(v => v > 0).length;
          centerPixel = Array.from(ctx.getImageData(128, 112, 1, 1).data);
        }
        return {
          occupiedBy: cab?.occupiedBy,
          isLiveStreaming: cab?.isLiveStreaming,
          nonZeroPixels: nonZero,
          centerPixel
        };
      })()`,
      returnByValue: true
    });
    console.log('Spectator B Cabinet Telemetry:', JSON.stringify(diagB.result.value, null, 2));

    // Player B activates Camarote mode to watch Player A
    console.log('Spectator B activating Camarote spectator mode...');
    await sendB('Runtime.evaluate', {
      expression: `(() => {
        const engine = window.__ARCADE_ENGINE__;
        const cab = engine.world.cabinets.find(c => c.game.id === 'neon-viper');
        engine.startSpectatingCabinet(cab);
      })()`
    });

    await new Promise(r => setTimeout(r, 2000));

    // Take screenshot of Spectator B's camarote screen!
    const shotB = await sendB('Page.captureScreenshot', { format: 'png' });
    const shotPath = path.join(artifactDir, 'p2p_spectator_b_neon_viper_working.png');
    fs.writeFileSync(shotPath, Buffer.from(shotB.data, 'base64'));
    console.log(`📸 Screenshot of Spectator B saved to: ${shotPath}`);

    wsA.close();
    wsB.close();
  } finally {
    chromeA.kill();
    chromeB.kill();
  }
}

function getTabs(port) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}/json`, res => {
      let d = '';
      res.on('data', chunk => d += chunk);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

function createSender(ws) {
  let id = 1;
  return function send(method, params = {}) {
    return new Promise((resolve) => {
      const curId = id++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === curId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  };
}

runTwoPlayerTest().catch(e => {
  console.error('❌ Error during test:', e);
  process.exit(1);
});
