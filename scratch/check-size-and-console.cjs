const http = require('http');
const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function checkConsoleAndSizes() {
  const port = 9650;
  const chromeProcess = spawn(chromePath, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-webgl',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,720',
    '--user-data-dir=C:\\Users\\Marcus\\.gemini\\antigravity-ide\\scratch\\.temp-chrome-size-check',
    'https://marcuscaiado.github.io/nopex-arcade-multiplayer/'
  ]);

  await new Promise(r => setTimeout(r, 4000));

  try {
    const listRes = await new Promise((resolve, reject) => {
      http.get(`http://localhost:${port}/json`, res => {
        let d = '';
        res.on('data', chunk => d += chunk);
        res.on('end', () => resolve(JSON.parse(d)));
      }).on('error', reject);
    });

    const targetTab = listRes.find(t => t.url.includes('nopex-arcade-multiplayer')) || listRes[0];
    const ws = new globalThis.WebSocket(targetTab.webSocketDebuggerUrl);

    let id = 1;
    function send(method, params = {}) {
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
    }

    await new Promise(r => ws.addEventListener('open', r));
    await send('Network.enable');
    await send('Page.enable');
    await send('Runtime.enable');

    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        const text = msg.params.args.map(a => a.value || a.description).join(' ');
        console.log(`[Browser Console ${msg.params.type}]:`, text);
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('[Browser Exception]:', msg.params.exceptionDetails);
      }
    });

    console.log('Launching Neon Viper 3D...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const input = document.getElementById('tag-input');
        if (input) input.value = 'MARC1';
        const confirmBtn = document.querySelector('.identity-confirm-btn');
        if (confirmBtn) confirmBtn.click();
        const engine = window.__ARCADE_ENGINE__;
        const cab = engine.world.cabinets.find(c => c.game.id === 'neon-viper');
        engine.launchGame(cab.game, cab);
      })()`
    });

    await new Promise(r => setTimeout(r, 8000));

    const check = await send('Runtime.evaluate', {
      expression: `(() => {
        const overlay = window.__ARCADE_ENGINE__?.overlay;
        const network = window.__ARCADE_ENGINE__?.network;
        let dataUrlLength = 0;
        let dataUrlSample = '';
        if (overlay?._captureCanvas) {
          dataUrlSample = overlay._captureCanvas.toDataURL('image/webp', 0.42);
          dataUrlLength = dataUrlSample.length;
        }

        return {
          currentCanvas: overlay?._currentCanvas ? overlay._currentCanvas.id : null,
          dataUrlLength,
          dataUrlPrefix: dataUrlSample.slice(0, 50),
          networkActive: !!network,
          roomActive: !!network?.room,
          hasFrameAction: !!network?.frameAction,
          lastSentFrameTime: network?.lastSentFrameTime
        };
      })()`,
      returnByValue: true
    });

    console.log('Data URL Diagnostics:', check.result.value);

    ws.close();
  } finally {
    chromeProcess.kill();
  }
}

checkConsoleAndSizes().catch(console.error);
