import * as THREE from 'three';
import { createArcadeCabinet } from './cabinet.js';
import { createJukeboxCabinet } from './jukebox-cabinet.js';

/**
 * Creates dynamic 2D canvas texture for retro synthwave carpet
 */
function createCarpetTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Dark retro navy base
  ctx.fillStyle = '#10142e';
  ctx.fillRect(0, 0, 512, 512);

  // Geometric neon grid
  ctx.strokeStyle = 'rgba(0, 245, 255, 0.28)';
  ctx.lineWidth = 2;
  for (let x = 0; x < 512; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();
  }
  for (let y = 0; y < 512; y += 64) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();
  }

  // Synthwave carpet starburst accents
  ctx.fillStyle = 'rgba(255, 0, 127, 0.45)';
  for (let x = 32; x < 512; x += 64) {
    for (let y = 32; y < 512; y += 64) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 16);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates 3D Glowing Neon Text Banner
 */
function createNeonBanner(text, width, height, textColor = '#00f5ff', glowColor = '#ff007f') {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'transparent';
  ctx.fillRect(0, 0, 1024, 256);

  ctx.font = 'bold 72px "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = glowColor;
  ctx.shadowBlur = 30;
  ctx.fillStyle = textColor;
  ctx.fillText(text, 512, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide
  });

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
  return plane;
}

export function buildArcadeWorld(scene, gamesManifest) {
  const roomBounds = {
    minX: -23.5,
    maxX: 23.5,
    minZ: -29.0,
    maxZ: 18.0 // Clamp player from walking past active arcade area
  };

  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // 1. Ambient, Hemisphere & Directional Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
  worldGroup.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0x00f5ff, 0xff007f, 2.2);
  worldGroup.add(hemiLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
  dirLight1.position.set(10, 25, 20);
  worldGroup.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x00f5ff, 1.8);
  dirLight2.position.set(-15, 20, -15);
  worldGroup.add(dirLight2);

  // Vivid non-decaying colored neon point lights
  const centerLight = new THREE.PointLight(0x00f5ff, 3.5, 60, 0);
  centerLight.position.set(0, 8, 0);
  worldGroup.add(centerLight);

  const pinkLight = new THREE.PointLight(0xff007f, 3.2, 60, 0);
  pinkLight.position.set(-15, 7, -10);
  worldGroup.add(pinkLight);

  const goldLight = new THREE.PointLight(0xffd32a, 3.2, 60, 0);
  goldLight.position.set(15, 7, -10);
  worldGroup.add(goldLight);

  // 2. Room Floor (Extended south to provide plenty of camera clearance)
  const carpetTex = createCarpetTexture();
  const floorGeo = new THREE.PlaneGeometry(50, 76);
  const floorMat = new THREE.MeshStandardMaterial({
    map: carpetTex,
    roughness: 0.5,
    metalness: 0.2
  });
  const floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.position.set(0, 0, 4);
  worldGroup.add(floorMesh);

  // Center Rotunda Floor Disc (Spacious 10m center plaza)
  const rotundaFloorGeo = new THREE.CylinderGeometry(10.5, 10.5, 0.08, 36);
  const rotundaFloorMat = new THREE.MeshStandardMaterial({
    color: 0x182042,
    roughness: 0.3,
    metalness: 0.5
  });
  const rotundaDisc = new THREE.Mesh(rotundaFloorGeo, rotundaFloorMat);
  rotundaDisc.position.set(0, 0.04, -2.5);
  worldGroup.add(rotundaDisc);

  const rotundaRingGeo = new THREE.RingGeometry(10.2, 10.5, 36);
  const rotundaRingMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, side: THREE.DoubleSide });
  const rotundaRing = new THREE.Mesh(rotundaRingGeo, rotundaRingMat);
  rotundaRing.rotation.x = -Math.PI / 2;
  rotundaRing.position.set(0, 0.09, -2.5);
  worldGroup.add(rotundaRing);

  // Decorative Center Hologram Emblem at (0, -2.5)
  const emblemGeo = new THREE.RingGeometry(1.2, 1.8, 24);
  const emblemMat = new THREE.MeshBasicMaterial({ color: 0xff007f, side: THREE.DoubleSide });
  const emblem = new THREE.Mesh(emblemGeo, emblemMat);
  emblem.rotation.x = -Math.PI / 2;
  emblem.position.set(0, 0.1, -2.5);
  worldGroup.add(emblem);

  // 3. Walls (FrontSide only, so camera can never be blinded from outside)
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x161a2e,
    roughness: 0.5,
    metalness: 0.3,
    side: THREE.FrontSide
  });

  // North Back Wall
  const northWall = new THREE.Mesh(new THREE.BoxGeometry(50, 10, 1), wallMat);
  northWall.position.set(0, 5, -30);
  worldGroup.add(northWall);

  // South Entrance Wall (Placed far at Z=40 to give infinite camera space)
  const southWall = new THREE.Mesh(new THREE.BoxGeometry(50, 10, 1), wallMat);
  southWall.position.set(0, 5, 40);
  worldGroup.add(southWall);

  // West Wall
  const westWall = new THREE.Mesh(new THREE.BoxGeometry(1, 10, 72), wallMat);
  westWall.position.set(-24.5, 5, 4);
  worldGroup.add(westWall);

  // East Wall
  const eastWall = new THREE.Mesh(new THREE.BoxGeometry(1, 10, 72), wallMat);
  eastWall.position.set(24.5, 5, 4);
  worldGroup.add(eastWall);

  // Horizontal Wall Neon Tubes
  const createNeonStrip = (x, y, z, length, isZAxis, color) => {
    const geo = isZAxis ? new THREE.BoxGeometry(0.12, 0.12, length) : new THREE.BoxGeometry(length, 0.12, 0.12);
    const mat = new THREE.MeshBasicMaterial({ color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    worldGroup.add(mesh);
  };

  createNeonStrip(0, 4.2, -29.4, 48, false, 0x00f5ff);
  createNeonStrip(0, 7.8, -29.4, 48, false, 0xff007f);
  createNeonStrip(-23.9, 4.2, 4, 68, true, 0x05ffa1);
  createNeonStrip(23.9, 4.2, 4, 68, true, 0xffd32a);

  // 4. Large Neon Signage
  const mainSign = createNeonBanner('⚡ NOPEX VIRTUAL ARCADE ⚡', 24, 6, '#00f5ff', '#ff007f');
  mainSign.position.set(0, 8.2, -29.2);
  worldGroup.add(mainSign);

  const rotundaSign = createNeonBanner('🌟 SPOTLIGHT MEGAHITS', 10, 2.5, '#ffd32a', '#ff007f');
  rotundaSign.position.set(0, 6.5, -3.5);
  worldGroup.add(rotundaSign);

  const actionSign = createNeonBanner('⚔️ ACTION & FIGHTING ALLEY', 14, 2.5, '#ff007f', '#00f5ff');
  actionSign.position.set(-18.5, 6.5, -3.5);
  actionSign.rotation.y = Math.PI / 2;
  worldGroup.add(actionSign);

  const retroSign = createNeonBanner('🕹️ RETRO VAULT & 16-BIT LEGENDS', 15, 2.5, '#7928ca', '#00f5ff');
  retroSign.position.set(0, 6.5, -25.5);
  worldGroup.add(retroSign);

  const speedwaySign = createNeonBanner('🏎️ SPEEDWAY & RACING', 12, 2.5, '#ff3838', '#ffd32a');
  speedwaySign.position.set(11.5, 6.5, -10.0);
  speedwaySign.rotation.y = -Math.PI / 2;
  worldGroup.add(speedwaySign);

  const sportsSign = createNeonBanner('🎱 SPORTS & CASUAL ARCADE', 12, 2.5, '#05ffa1', '#ffd32a');
  sportsSign.position.set(20.0, 6.5, -5.0);
  sportsSign.rotation.y = -Math.PI / 2;
  worldGroup.add(sportsSign);

  // 5. Place the 37 Arcade Cabinets
  const gameMap = {};
  gamesManifest.forEach(g => { gameMap[g.id] = g; });

  const cabinets = [];

  const addCabinet = (gameId, pos, rotY) => {
    const game = gameMap[gameId] || gamesManifest[cabinets.length % gamesManifest.length];
    const cab = createArcadeCabinet(game, pos, rotY);
    worldGroup.add(cab.group);
    cabinets.push(cab);
  };

  // ENTRANCE GRAND SHOWCASE: 4 Historic MegaHits (Z = 5.0, Facing South)
  addCabinet('classic-doom',        { x: -5.4, z: 5.0 }, 0);              // 🔥 Classic DOOM (1993)
  addCabinet('classic-pacman',      { x: -1.8, z: 5.0 }, 0);              // 🟡 Pac-Man (1980 Classic Arcade)
  addCabinet('neon-tetris-3d',      { x: 1.8, z: 5.0 }, 0);               // 🧱 Neon Cyber Tetris 3D
  const jukebox = createJukeboxCabinet({ x: 5.4, z: 5.0 }, 0);            // 📻 Retro Arcade Jukebox Pavilion
  worldGroup.add(jukebox.group);
  cabinets.push(jukebox);

  // ZONE 1: CENTER ROTUNDA (4 Spotlight MegaHits in 4 Cardinal Directions)
  addCabinet('geometricsurvivor',   { x: 0, z: -10.0 }, 0);               // Faces North
  addCabinet('cyber-pong-3d',       { x: 0, z: 2.5 }, Math.PI);           // Faces South
  addCabinet('neon-viper',          { x: -6.5, z: -3.5 }, Math.PI / 2);   // Faces East
  addCabinet('cute-mini-golf',      { x: 6.5, z: -3.5 }, -Math.PI / 2);   // Faces West

  // ZONE 2: ACTION & FIGHTING ALLEY (West Wall, X = -19.5, Facing East)
  addCabinet('street-fighter-2',    { x: -19.5, z: -24.5 }, Math.PI / 2);
  addCabinet('mk2',                 { x: -19.5, z: -21.0 }, Math.PI / 2);
  addCabinet('sor2',                { x: -19.5, z: -17.5 }, Math.PI / 2);
  addCabinet('mslug',               { x: -19.5, z: -14.0 }, Math.PI / 2); // ⚡ Metal Slug 1996 (SNK Neo-Geo)
  addCabinet('mslugx',              { x: -19.5, z: -10.5 }, Math.PI / 2); // ⚡ Metal Slug X (SNK Neo-Geo)
  addCabinet('gta-2',               { x: -19.5, z: -7.0 },  Math.PI / 2);
  addCabinet('neon-katana-slash',   { x: -19.5, z: -3.5 },  Math.PI / 2);
  addCabinet('stickman-fps-arcade', { x: -19.5, z: 0.0 },   Math.PI / 2);
  addCabinet('castlevania4',        { x: -19.5, z: 3.5 },   Math.PI / 2);
  addCabinet('sky-ace-1944',        { x: -19.5, z: 7.0 },   Math.PI / 2);
  addCabinet('asteroid-blitz',      { x: -19.5, z: 10.5 },  Math.PI / 2);
  addCabinet('cyber-shuriken',      { x: -19.5, z: 14.0 },  Math.PI / 2);

  // ZONE 3: RETRO VAULT & 16-BIT LEGENDS (North Wall, Z = -26.5, Facing South)
  addCabinet('sonic1',              { x: -11.4, z: -26.5 }, 0);
  addCabinet('sonic2',              { x: -7.6,  z: -26.5 }, 0);
  addCabinet('megaman2',            { x: -3.8,  z: -26.5 }, 0);
  addCabinet('super-mario',         { x: 0.0,   z: -26.5 }, 0);
  addCabinet('super-bomberman',     { x: 3.8,   z: -26.5 }, 0);
  addCabinet('neon-stack-3d',       { x: 7.6,   z: -26.5 }, 0);
  addCabinet('neon-orbit-drift',    { x: 11.4,  z: -26.5 }, 0);

  // ZONE 4: SPEEDWAY BOULEVARD / RACING ROW (Inner East Aisle, X = 11.5, Facing West)
  addCabinet('topgear',             { x: 11.5, z: -20.0 }, -Math.PI / 2);
  addCabinet('fzero',               { x: 11.5, z: -15.0 }, -Math.PI / 2);
  addCabinet('outrun',              { x: 11.5, z: -10.0 }, -Math.PI / 2);
  addCabinet('neon-drift-racer',    { x: 11.5, z: -5.0 },  -Math.PI / 2);
  addCabinet('cyber-runner-3d',     { x: 11.5, z: 0.0 },   -Math.PI / 2);

  // ZONE 5: SPORTS & CASUAL ARCADE (East Wall, X = 20.5, Facing West)
  addCabinet('kawaii-8ball-pool',   { x: 20.5, z: -20.0 }, -Math.PI / 2);
  addCabinet('neon-pachinko-pop',   { x: 20.5, z: -15.0 }, -Math.PI / 2);
  addCabinet('neon-archery-master', { x: 20.5, z: -10.0 }, -Math.PI / 2);
  addCabinet('brick-breaker-fx',    { x: 20.5, z: -5.0 },  -Math.PI / 2);
  addCabinet('neon-drop-2048',      { x: 20.5, z: 0.0 },   -Math.PI / 2);
  addCabinet('cyber-pinball-fx',    { x: 20.5, z: 5.0 },   -Math.PI / 2);
  addCabinet('flappy-cyber-droid',  { x: 20.5, z: 10.0 },  -Math.PI / 2);

  return {
    roomBounds,
    cabinets,
    worldGroup,
    floorMesh,
    update(time, player) {
      cabinets.forEach(cab => cab.update(time, player));
      rotundaRing.material.opacity = 0.8 + Math.sin(time * 4) * 0.2;
    }
  };
}
