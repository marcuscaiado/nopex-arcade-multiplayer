const http = require('http');
const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function diagnoseP2PFrames() {
  console.log('🚀 Spawning two peers with console spy...');
  const portA = 9661;
  const portB = 9662;

  const chromeA = spawn(chromePath, [
    `--remote-debugging-port=${portA}`,
    '--headless=new',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-webgl',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,720',
    '--user-data-dir=C:\\Users\\Marcus\\.gemini\\antigravity-ide\\scratch\\.temp-diag-a',
    'https://marcuscaiado.github.io/nopex-arcade-multiplayer/'
  ]);

  const chromeB = spawn(chromePath, [
    `--remote-debugging-port=${portB}`,
    '--headless=new',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-webgl',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    '--window-size=1280,720',
    '--user-data-dir=C:\\Users\\Marcus\\.gemini\\antigravity-ide\\scratch\\.temp-diag-b',
    'https://marcuscaiado.github.io/nopex-arcade-multiplayer/'
  ]);

  await new Promise(r => setTimeout(r, 4000));

  try {
    const tabA = (await getTabs(portA))[0];
    const wsA = new globalThis.WebSocket(tabA.webSocketDebuggerUrl);
    const sendA = createSender(wsA);
    await new Promise(r => wsA.addEventListener('open', r));
    await sendA('Runtime.enable');

    const tabB = (await getTabs(portB))[0];
    const wsB = new globalThis.WebSocket(tabB.webSocketDebuggerUrl);
    const sendB = createSender(wsB);
    await new Promise(r => wsB.addEventListener('open', r));
    await sendB('Runtime.enable');

    wsA.addEventListener('message', e => {
      const m = JSON.parse(e.data);
      if (m.method === 'Runtime.consoleAPICalled') {
        console.log('[PEER A]:', m.params.args.map(a => a.value || a.description).join(' '));
      }
    });

    wsB.addEventListener('message', e => {
      const m = JSON.parse(e.data);
      if (m.method === 'Runtime.consoleAPICalled') {
        console.log('[PEER B]:', m.params.args.map(a => a.value || a.description).join(' '));
      }
    });

    // Instrument both peers to spy on frameAction and onRemoteGameFrame
    await sendA('Runtime.evaluate', {
      expression: `(() => {
        const input = document.getElementById('tag-input');
        if (input) input.value = 'MARC1';
        document.querySelector('.identity-confirm-btn')?.click();
      })()`
    });

    await sendB('Runtime.evaluate', {
      expression: `(() => {
        const input = document.getElementById('tag-input');
        if (input) input.value = 'AMIGO';
        document.querySelector('.identity-confirm-btn')?.click();
      })()`
    });

    await new Promise(r => setTimeout(r, 5000));

    // Instrument Peer B's frameAction
    await sendB('Runtime.evaluate', {
      expression: `(() => {
        const net = window.__ARCADE_ENGINE__?.network;
        if (!net) { console.log('[PEER B INSTRUMENT] No network!'); return; }
        const origFrameMsg = net.frameAction.onMessage;
        net.frameAction.onMessage = (data, meta) => {
          console.log('[PEER B GOT FRAME MSG]:', data.g, 'dataLength:', data.f?.length);
          if (origFrameMsg) origFrameMsg(data, meta);
        };
        const origRemoteFrame = net.onRemoteGameFrame;
        net.onRemoteGameFrame = (gameId, pilotTag, frameData, peerId) => {
          console.log('[PEER B CALL onRemoteGameFrame]:', gameId, pilotTag, frameData?.length);
          if (origRemoteFrame) origRemoteFrame(gameId, pilotTag, frameData, peerId);
        };
        console.log('[PEER B] Instrumented frame listeners successfully!');
      })()`
    });

    // Instrument Peer A's frame sending
    await sendA('Runtime.evaluate', {
      expression: `(() => {
        const net = window.__ARCADE_ENGINE__?.network;
        if (!net) return;
        const origSend = net.broadcastLiveFrame.bind(net);
        let sentCount = 0;
        net.broadcastLiveFrame = (gameId, frameData) => {
          sentCount++;
          if (sentCount % 20 === 1) {
            console.log('[PEER A BROADCAST FRAME]:', gameId, 'length:', frameData?.length, 'count:', sentCount);
          }
          origSend(gameId, frameData);
        };
      })()`
    });

    console.log('Peer A launching Neon Viper 3D...');
    await sendA('Runtime.evaluate', {
      expression: `(() => {
        const engine = window.__ARCADE_ENGINE__;
        const cab = engine.world.cabinets.find(c => c.game.id === 'neon-viper');
        engine.launchGame(cab.game, cab);
      })()`
    });

    await new Promise(r => setTimeout(r, 8000));

    // Check Peer B's cabinet state
    const resB = await sendB('Runtime.evaluate', {
      expression: `(() => {
        const cab = window.__ARCADE_ENGINE__?.world?.cabinets?.find(c => c.game.id === 'neon-viper');
        return {
          occupiedBy: cab?.occupiedBy,
          isLiveStreaming: cab?.isLiveStreaming,
          peersCount: window.__ARCADE_ENGINE__?.network?.peers?.size
        };
      })()`,
      returnByValue: true
    });
    console.log('Final Peer B State:', resB.result.value);

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

diagnoseP2PFrames().catch(console.error);
