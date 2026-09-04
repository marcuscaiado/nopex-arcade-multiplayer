import * as THREE from 'three';

// Vibrant neon theme presets for cabinets
const CABINET_THEMES = [
  { primary: 0x00f5ff, secondary: 0x7928ca, accent: 0xff007f },
  { primary: 0xff007f, secondary: 0x00f5ff, accent: 0xffd32a },
  { primary: 0x05ffa1, secondary: 0x00f5ff, accent: 0xff007f },
  { primary: 0xffd32a, secondary: 0xff007f, accent: 0x00f5ff },
  { primary: 0x7928ca, secondary: 0x00f5ff, accent: 0x05ffa1 }
];

/**
 * Creates Backlit Marquee Canvas Texture (Always 100% Bright)
 */
function createMarqueeTexture(game, theme) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  // Deep gradient background
  const grad = ctx.createLinearGradient(0, 0, 512, 128);
  grad.addColorStop(0, '#0a0d24');
  grad.addColorStop(0.5, '#191f48');
  grad.addColorStop(1, '#0a0d24');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 128);

  // Outer glowing border
  ctx.strokeStyle = '#' + theme.secondary.toString(16).padStart(6, '0');
  ctx.lineWidth = 4;
  ctx.strokeRect(6, 6, 500, 116);

  // Inner neon accent border
  ctx.strokeStyle = '#' + theme.primary.toString(16).padStart(6, '0');
  ctx.lineWidth = 2;
  ctx.strokeRect(12, 12, 488, 104);

  // Game Title & Icon
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#' + theme.primary.toString(16).padStart(6, '0');
  ctx.shadowBlur = 15;

  const title = `${game.icon || '🎮'} ${(game.name || 'ARCADE').toUpperCase()}`;
  ctx.fillText(title, 256, 54);

  // Subtitle / Genre
  ctx.font = 'bold 16px monospace';
  ctx.fillStyle = '#' + theme.accent.toString(16).padStart(6, '0');
  ctx.shadowBlur = 8;
  ctx.fillText(`• ${game.category ? game.category.toUpperCase() : 'CLASSIC ARCADE'} •`, 256, 96);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates animated CRT Screen Canvas Texture (512x512 with centered title, logo & coin prompt)
 */
function createScreenTexture(game, theme) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const update = (time) => {
    // 1. Dark CRT Cyber Background
    ctx.fillStyle = '#060a1e';
    ctx.fillRect(0, 0, 512, 512);

    // 2. Cyan Grid Matrix
    ctx.strokeStyle = 'rgba(0, 245, 255, 0.2)';
    ctx.lineWidth = 2;
    const gridOffset = (time * 30) % 32;
    for (let y = gridOffset; y < 512; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }
    for (let x = 0; x < 512; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }

    // 3. Header Badge
    ctx.fillStyle = 'rgba(255, 0, 127, 0.4)';
    ctx.fillRect(100, 35, 312, 36);
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 2;
    ctx.strokeRect(100, 35, 312, 36);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px "Press Start 2P", monospace, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★ ARCADE CLASSIC ★', 256, 53);

    // 4. Central Pulsing Game Icon (Centered at Y = 160)
    const scale = 1.0 + Math.sin(time * 3.5) * 0.08;
    ctx.save();
    ctx.translate(256, 160);
    ctx.scale(scale, scale);
    ctx.font = '76px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#' + theme.primary.toString(16).padStart(6, '0');
    ctx.shadowBlur = 24;
    ctx.fillText(game.icon || '🎮', 0, 0);
    ctx.restore();

    // 5. Game Title (Centered at Y = 260)
    ctx.font = 'bold 28px "Outfit", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#' + theme.primary.toString(16).padStart(6, '0');
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#ffffff';
    ctx.fillText((game.name || 'ARCADE GAME').toUpperCase(), 256, 260);

    // 6. Category Tag (Centered at Y = 310)
    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = '#ffd32a';
    ctx.shadowColor = '#ffd32a';
    ctx.shadowBlur = 10;
    ctx.fillText(`• ${(game.category || 'ACTION').toUpperCase()} • 60 FPS •`, 256, 310);

    // 7. Flashing "INSERT COIN [SPACE]" Prompt (Centered at Y = 410)
    if (Math.floor(time * 2.5) % 2 === 0) {
      ctx.fillStyle = '#' + theme.primary.toString(16).padStart(6, '0');
      ctx.font = 'bold 22px monospace';
      ctx.shadowColor = '#' + theme.accent.toString(16).padStart(6, '0');
      ctx.shadowBlur = 16;
      ctx.fillText('▶ PRESS [ENTER/E] TO PLAY ◀', 256, 410);

      ctx.font = '14px monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.shadowBlur = 0;
      ctx.fillText('INSERT 1 COIN (25¢)', 256, 442);
    }

    // 8. CRT Scanlines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    for (let y = 0; y < 512; y += 4) {
      ctx.fillRect(0, y, 512, 2);
    }

    // 9. CRT Glass Bezel Border
    ctx.strokeStyle = '#' + theme.primary.toString(16).padStart(6, '0');
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 504, 504);

    texture.needsUpdate = true;
  };

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  update(0);
  return { texture, update };
}

export function createArcadeCabinet(game, position, rotationY = 0) {
  const group = new THREE.Group();
  group.position.set(position.x, 0, position.z);
  group.rotation.y = rotationY;

  // Pick deterministic theme based on game id hash
  let hash = 0;
  for (let i = 0; i < (game.id || '').length; i++) {
    hash = ((hash << 5) - hash) + game.id.charCodeAt(i);
  }
  let theme = CABINET_THEMES[Math.abs(hash) % CABINET_THEMES.length];
  if (game.id === 'street-fighter-2') {
    theme = { primary: 0xff3b30, secondary: 0x0066ff, accent: 0xffd32a };
  }
  if (game.id === 'super-mario') {
    theme = { primary: 0xe52521, secondary: 0x43b047, accent: 0xfbd000 };
  }
  if (game.id === 'super-bomberman') {
    theme = { primary: 0x0070ec, secondary: 0xffffff, accent: 0xff4757 };
  }
  if (game.id === 'gta-2') {
    theme = { primary: 0xffd32a, secondary: 0x0066ff, accent: 0xff3838 };
  }

  // Materials with good ambient visibility
  const cabinetBodyMat = new THREE.MeshStandardMaterial({
    color: 0x1e243d,
    roughness: 0.4,
    metalness: 0.3
  });

  const sideDecalMat = new THREE.MeshStandardMaterial({
    color: theme.primary,
    roughness: 0.3,
    metalness: 0.4
  });

  const neonTrimMat = new THREE.MeshBasicMaterial({
    color: theme.primary
  });

  // 1. Lower Cabinet Base
  const baseGeo = new THREE.BoxGeometry(1.6, 1.4, 1.3);
  const baseMesh = new THREE.Mesh(baseGeo, cabinetBodyMat);
  baseMesh.position.set(0, 0.7, 0);
  group.add(baseMesh);

  // Coin door panel
  const coinDoorGeo = new THREE.PlaneGeometry(0.7, 0.8);
  const coinDoorMat = new THREE.MeshStandardMaterial({ color: 0x0c0f20, roughness: 0.5, metalness: 0.7 });
  const coinDoor = new THREE.Mesh(coinDoorGeo, coinDoorMat);
  coinDoor.position.set(0, 0.75, 0.66);
  group.add(coinDoor);

  // Dual illuminated coin reject buttons (orange neon)
  const coinSlotGeo = new THREE.BoxGeometry(0.14, 0.1, 0.04);
  const coinSlotMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
  const coinSlot1 = new THREE.Mesh(coinSlotGeo, coinSlotMat);
  coinSlot1.position.set(-0.16, 0.9, 0.68);
  const coinSlot2 = new THREE.Mesh(coinSlotGeo, coinSlotMat);
  coinSlot2.position.set(0.16, 0.9, 0.68);
  group.add(coinSlot1);
  group.add(coinSlot2);

  // 2. Control Deck (Angled Shelf with Joysticks & Buttons)
  const deckGeo = new THREE.BoxGeometry(1.65, 0.22, 0.7);
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x14182b, roughness: 0.3, metalness: 0.4 });
  const deckMesh = new THREE.Mesh(deckGeo, deckMat);
  deckMesh.position.set(0, 1.4, 0.48);
  deckMesh.rotation.x = 0.22;
  group.add(deckMesh);

  // Joysticks
  const joystickStickGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.14);
  const joystickStickMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9 });
  const joystickBallGeo = new THREE.SphereGeometry(0.05, 12, 12);
  const joystickBallMat = new THREE.MeshBasicMaterial({ color: theme.accent });

  const jStick1 = new THREE.Mesh(joystickStickGeo, joystickStickMat);
  jStick1.position.set(-0.35, 1.55, 0.48);
  const jBall1 = new THREE.Mesh(joystickBallGeo, joystickBallMat);
  jBall1.position.set(-0.35, 1.63, 0.48);
  group.add(jStick1);
  group.add(jBall1);

  // Arcade Action Buttons (6 glowing buttons)
  const btnGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.03, 10);
  const btnColors = [0x00f5ff, 0xff007f, 0xffd32a, 0x05ffa1];
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
      const bMat = new THREE.MeshBasicMaterial({ color: btnColors[(row * 3 + col) % btnColors.length] });
      const bMesh = new THREE.Mesh(btnGeo, bMat);
      bMesh.position.set(0.12 + col * 0.1, 1.48 - row * 0.06, 0.54 - row * 0.08);
      group.add(bMesh);
    }
  }

  // 3. Middle Housing & CRT Monitor
  const midGeo = new THREE.BoxGeometry(1.6, 1.3, 1.1);
  const midMesh = new THREE.Mesh(midGeo, cabinetBodyMat);
  midMesh.position.set(0, 2.1, -0.05);
  group.add(midMesh);

  // Angled CRT Screen Bezel
  const bezelGeo = new THREE.BoxGeometry(1.4, 1.0, 0.08);
  const bezelMat = new THREE.MeshStandardMaterial({ color: 0x080b18, roughness: 0.8 });
  const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
  bezelMesh.position.set(0, 2.15, 0.46);
  bezelMesh.rotation.x = -0.25;
  group.add(bezelMesh);

  // CRT Canvas Screen (Unlit MeshBasicMaterial for 100% brightness)
  const { texture: screenTex, update: updateScreenTex } = createScreenTexture(game, theme);
  const screenGeo = new THREE.PlaneGeometry(1.22, 0.88);
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTex });
  const screenMesh = new THREE.Mesh(screenGeo, screenMat);
  screenMesh.position.set(0, 2.15, 0.51);
  screenMesh.rotation.x = -0.25;
  group.add(screenMesh);

  // 4. Backlit Marquee Top Box
  const marqueeBoxGeo = new THREE.BoxGeometry(1.65, 0.6, 0.85);
  const marqueeBox = new THREE.Mesh(marqueeBoxGeo, cabinetBodyMat);
  marqueeBox.position.set(0, 3.0, 0.2);
  group.add(marqueeBox);

  // Marquee Face (MeshBasicMaterial guarantees luminous visibility)
  const marqueeTex = createMarqueeTexture(game, theme);
  const marqueeMat = new THREE.MeshBasicMaterial({ map: marqueeTex });
  const marqueeFaceGeo = new THREE.PlaneGeometry(1.58, 0.52);
  const marqueeFace = new THREE.Mesh(marqueeFaceGeo, marqueeMat);
  marqueeFace.position.set(0, 3.02, 0.64);
  marqueeFace.rotation.x = -0.08;
  group.add(marqueeFace);

  // Neon glowing trim tubes
  const frameGeo = new THREE.BoxGeometry(1.68, 0.05, 0.05);
  const topTrim = new THREE.Mesh(frameGeo, neonTrimMat);
  topTrim.position.set(0, 3.3, 0.66);
  const botTrim = new THREE.Mesh(frameGeo, neonTrimMat);
  botTrim.position.set(0, 2.74, 0.62);
  group.add(topTrim);
  group.add(botTrim);

  // 5. Side Panels with Neon Inlays
  const sideGeo = new THREE.BoxGeometry(0.06, 2.7, 1.25);
  const leftSide = new THREE.Mesh(sideGeo, sideDecalMat);
  leftSide.position.set(-0.82, 1.7, 0.05);
  const rightSide = new THREE.Mesh(sideGeo, sideDecalMat);
  rightSide.position.set(0.82, 1.7, 0.05);
  group.add(leftSide);
  group.add(rightSide);

  // 6. Floor Neon Spot Ring
  const floorGlowGeo = new THREE.RingGeometry(1.2, 1.45, 32);
  const floorGlowMat = new THREE.MeshBasicMaterial({
    color: theme.primary,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35
  });
  const floorGlow = new THREE.Mesh(floorGlowGeo, floorGlowMat);
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.set(0, 0.03, 0.8);
  group.add(floorGlow);

  // Calculate forward interaction stand spot
  const forwardX = Math.sin(rotationY) * 2.2;
  const forwardZ = Math.cos(rotationY) * 2.2;
  const standX = position.x + forwardX;
  const standZ = position.z + forwardZ;

  // Exact collision box (AABB in world space accounting for orientation)
  const isSideways = Math.abs(Math.sin(rotationY)) > 0.5;
  const halfX = isSideways ? 0.65 : 0.78;
  const halfZ = isSideways ? 0.78 : 0.65;

  const collisionBox = {
    minX: position.x - halfX,
    maxX: position.x + halfX,
    minZ: position.z - halfZ,
    maxZ: position.z + halfZ
  };

  return {
    game,
    group,
    theme,
    screenMesh,
    marqueeFace,
    floorGlow,
    standSpot: { x: standX, z: standZ },
    position: { x: position.x, z: position.z },
    rotationY,
    collisionBox,
    isHovered: false,
    _lastFrame: 0,
    update(time, player) {
      if (this.isHovered) {
        updateScreenTex(time);
        floorGlow.material.opacity = 0.7 + Math.sin(time * 6.0) * 0.25;
      } else {
        // Distance culling: Only update CRT canvas if player is within 12 meters
        if (player) {
          const dx = player.x - position.x;
          const dz = player.z - position.z;
          if (dx * dx + dz * dz > 144) return;
        }
        const frame = Math.floor(time * 1.5);
        if (this._lastFrame !== frame) {
          this._lastFrame = frame;
          updateScreenTex(time);
        }
        floorGlow.material.opacity = 0.3;
      }
    }
  };
}
