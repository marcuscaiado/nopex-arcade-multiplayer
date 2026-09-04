import * as THREE from 'three';
import { drawCRTAttract } from './gameplay-loops.js';

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
 * Creates animated CRT Screen Canvas Texture with authentic pixel-art gameplay attract loops!
 */
function createScreenTexture(game, theme) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 224;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;

  const update = (time) => {
    drawCRTAttract(ctx, game, time, 256, 224);
    texture.needsUpdate = true;
  };

  update(0);
  return { texture, update };
}

/**
 * Creates Floating 3D Occupancy Badge Sprite for Multiplayer
 */
function createOccupancyBadge() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(2.4, 0.6, 1.0);
  sprite.position.set(0, 3.65, 0.45);
  sprite.visible = false;

  const setPlayer = (tag) => {
    if (!tag) {
      sprite.visible = false;
      return;
    }
    ctx.clearRect(0, 0, 512, 128);

    // Glowing cyberpunk capsule pill
    ctx.fillStyle = 'rgba(6, 10, 25, 0.92)';
    ctx.strokeStyle = '#05ffa1';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.roundRect(14, 14, 484, 100, 24);
    ctx.fill();
    ctx.stroke();

    // Glowing icon and tag text
    ctx.font = 'bold 30px "Outfit", "Segoe UI", sans-serif';
    ctx.fillStyle = '#05ffa1';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#05ffa1';
    ctx.shadowBlur = 14;
    ctx.fillText(`🕹️ [${tag.toUpperCase()}] JOGANDO`, 256, 64);

    texture.needsUpdate = true;
    sprite.visible = true;
  };

  return { sprite, setPlayer };
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
  if (game.id === 'classic-doom') {
    theme = { primary: 0xff3838, secondary: 0xff9f1a, accent: 0xffd32a };
  }
  if (game.id === 'classic-pacman') {
    theme = { primary: 0xffd32a, secondary: 0x0066ff, accent: 0xffffff };
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

  // 7. Multiplayer Occupancy Badge
  const occupancy = createOccupancyBadge();
  group.add(occupancy.sprite);

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
    occupancyBadge: occupancy,
    occupiedBy: null,
    standSpot: { x: standX, z: standZ },
    position: { x: position.x, z: position.z },
    rotationY,
    collisionBox,
    isHovered: false,
    _lastFrame: 0,
    setOccupiedBy(tag) {
      this.occupiedBy = tag;
      this.occupancyBadge.setPlayer(tag);
    },
    clearOccupied() {
      this.occupiedBy = null;
      this.occupancyBadge.setPlayer(null);
    },
    update(time, playerPos) {
      // Bob occupancy badge subtly when active
      if (this.occupiedBy && this.occupancyBadge.sprite.visible) {
        this.occupancyBadge.sprite.position.y = 3.65 + Math.sin(time * 3.5) * 0.06;
      }

      // Distance-based Level of Detail (LOD) & Occlusion Culling
      // If player is farther than 8.5m and cabinet is neither hovered nor occupied, skip canvas redraw!
      if (playerPos && !this.isHovered && !this.occupiedBy) {
        const dx = this.position.x - playerPos.x;
        const dz = this.position.z - playerPos.z;
        const distSq = dx * dx + dz * dz;
        if (distSq > 72.25) { // > 8.5 meters
          floorGlow.material.opacity = 0.25;
          return;
        }
      }

      if (this.isHovered || this.occupiedBy) {
        updateScreenTex(time);
        floorGlow.material.opacity = 0.7 + Math.sin(time * 6.0) * 0.25;
      } else {
        const frame = Math.floor(time * 24); // Smooth 24 FPS authentic pixel attract loop when nearby
        if (this._lastFrame !== frame) {
          this._lastFrame = frame;
          updateScreenTex(time);
        }
        floorGlow.material.opacity = 0.35;
      }
    }
  };
}
