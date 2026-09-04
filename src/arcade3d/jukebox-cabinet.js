import * as THREE from 'three';
import { musicManager } from './music-manager.js';

/**
 * Creates dynamic CRT Screen for the Phase AI Jukebox
 * Displays real-time Web Audio FFT equalizer bars, track title, and neon visualizer.
 */
function createJukeboxScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const freqData = new Uint8Array(32);

  const render = (time, isHovered) => {
    ctx.clearRect(0, 0, 512, 512);

    // 1. Dark Neon Cyberpunk Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
    bgGrad.addColorStop(0, '#0a091d');
    bgGrad.addColorStop(0.5, '#151336');
    bgGrad.addColorStop(1, '#080718');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 512, 512);

    // 2. Subtle Matrix/Scan Grid
    ctx.strokeStyle = 'rgba(0, 245, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let y = 0; y < 512; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // 3. Jukebox Top Header Tag
    ctx.fillStyle = 'rgba(255, 0, 127, 0.35)';
    ctx.fillRect(80, 28, 352, 34);
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 2;
    ctx.strokeRect(80, 28, 352, 34);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px "Press Start 2P", monospace, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★ GAME SOUNDTRACKS ★', 256, 45);

    // 4. Now Playing Info
    const curTrack = musicManager.getCurrentTrack();
    const isPlaying = musicManager.isPlaying;

    ctx.fillStyle = '#00f5ff';
    ctx.font = 'bold 22px "Outfit", Arial, sans-serif';
    ctx.shadowColor = '#00f5ff';
    ctx.shadowBlur = 12;
    const trackTitle = curTrack ? curTrack.title : 'ARCADE CLASSICS FM';
    ctx.fillText(trackTitle, 256, 105);

    ctx.fillStyle = '#ffd32a';
    ctx.font = '16px monospace';
    ctx.shadowColor = '#ffd32a';
    ctx.shadowBlur = 8;
    const artistName = curTrack ? `${curTrack.artistName} • ${curTrack.game || 'ORIGINAL OST'}` : 'TRILHAS DOS FLIPERAMAS';
    ctx.fillText(artistName, 256, 138);

    // 5. Dynamic Graphic Equalizer (Real-time FFT or ambient synth wave)
    musicManager.getFrequencyData(freqData);

    const numBars = 20;
    const barWidth = 16;
    const gap = 6;
    const startX = (512 - (numBars * (barWidth + gap) - gap)) / 2;
    const baseY = 320;
    const maxHeight = 120;

    for (let i = 0; i < numBars; i++) {
      let val = freqData[i % freqData.length] / 255.0;

      // If audio is paused, render a gentle breathing wave
      if (!isPlaying || val < 0.05) {
        val = 0.15 + 0.12 * Math.sin(time * 3 + i * 0.4);
      }

      const h = Math.max(6, val * maxHeight);
      const x = startX + i * (barWidth + gap);
      const y = baseY - h;

      // Equalizer Bar Gradient (Cyan -> Pink -> Gold at peaks)
      const barGrad = ctx.createLinearGradient(0, baseY, 0, baseY - maxHeight);
      barGrad.addColorStop(0, '#00f5ff');
      barGrad.addColorStop(0.6, '#ff007f');
      barGrad.addColorStop(1, '#ffd32a');

      ctx.fillStyle = barGrad;
      ctx.shadowColor = '#ff007f';
      ctx.shadowBlur = 8;
      ctx.fillRect(x, y, barWidth, h);

      // Peak Cap
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y - 4, barWidth, 3);
    }

    // Baseline bar
    ctx.strokeStyle = '#00f5ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX - 10, baseY + 2);
    ctx.lineTo(startX + numBars * (barWidth + gap) + 4, baseY + 2);
    ctx.stroke();

    // 6. Action / Status Prompt
    ctx.shadowBlur = 0;
    if (isPlaying) {
      ctx.fillStyle = '#05ffa1';
      ctx.font = 'bold 16px monospace';
      ctx.fillText('● EM REPRODUÇÃO [SPACE = MENU]', 256, 380);
    } else {
      ctx.fillStyle = '#ff007f';
      ctx.font = 'bold 16px monospace';
      ctx.fillText('■ EM ESPERA [SPACE = ABRIR]', 256, 380);
    }

    // Pulsing Enter Prompt
    if (Math.floor(time * 2.5) % 2 === 0 || isHovered) {
      ctx.fillStyle = '#00f5ff';
      ctx.font = 'bold 20px monospace';
      ctx.shadowColor = '#00f5ff';
      ctx.shadowBlur = 14;
      ctx.fillText('▶ PRESSIONE [ESPAÇO] PARA OUVIR ◀', 256, 435);
    }

    // 7. Retro CRT Scanlines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    for (let y = 0; y < 512; y += 4) {
      ctx.fillRect(0, y, 512, 2);
    }

    // 8. Outer Glowing Bezel
    ctx.strokeStyle = isHovered ? '#00f5ff' : '#ff007f';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 504, 504);

    texture.needsUpdate = true;
  };

  return { texture, render };
}

/**
 * Creates glowing backlit Marquee for Phase AI Jukebox
 */
function createJukeboxMarqueeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 512, 160);
  grad.addColorStop(0, '#0c0721');
  grad.addColorStop(0.5, '#220b38');
  grad.addColorStop(1, '#0c0721');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 160);

  ctx.strokeStyle = '#ff007f';
  ctx.lineWidth = 5;
  ctx.strokeRect(6, 6, 500, 148);

  ctx.strokeStyle = '#00f5ff';
  ctx.lineWidth = 2;
  ctx.strokeRect(12, 12, 488, 136);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#00f5ff';
  ctx.shadowBlur = 20;
  ctx.fillText('📻 RETRO ARCADE JUKEBOX', 256, 65);

  ctx.font = 'bold 16px monospace';
  ctx.fillStyle = '#ffd32a';
  ctx.shadowColor = '#ff007f';
  ctx.shadowBlur = 10;
  ctx.fillText('• TRILHAS SONORAS CLÁSSICAS DOS JOGOS •', 256, 115);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Factory for creating the 3D Phase Jukebox Cabinet
 */
export function createJukeboxCabinet(position, rotationY = 0) {
  const group = new THREE.Group();
  group.position.set(position.x, 0, position.z);
  group.rotation.y = rotationY;

  // Colors & Materials
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x131128,
    roughness: 0.35,
    metalness: 0.6
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xeeeeee,
    roughness: 0.1,
    metalness: 0.95
  });

  const neonCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
  const neonPinkMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
  const neonGoldMat = new THREE.MeshBasicMaterial({ color: 0xffd32a });

  // 1. Lower Base & Chrome Speaker Grille
  const baseGeo = new THREE.BoxGeometry(1.8, 1.3, 1.2);
  const baseMesh = new THREE.Mesh(baseGeo, bodyMat);
  baseMesh.position.set(0, 0.65, 0);
  group.add(baseMesh);

  // Chrome Speaker Grille Slats
  for (let i = 0; i < 7; i++) {
    const slatGeo = new THREE.BoxGeometry(1.3, 0.04, 0.05);
    const slatMesh = new THREE.Mesh(slatGeo, chromeMat);
    slatMesh.position.set(0, 0.4 + i * 0.12, 0.61);
    group.add(slatMesh);
  }

  // Neon Side Wings (Fluted Jukebox Trim)
  const wingGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 16);
  const wingLeft = new THREE.Mesh(wingGeo, neonCyanMat);
  wingLeft.position.set(-0.95, 1.6, 0.3);
  group.add(wingLeft);

  const wingRight = new THREE.Mesh(wingGeo, neonPinkMat);
  wingRight.position.set(0.95, 1.6, 0.3);
  group.add(wingRight);

  // 2. Control Shelf & Spinning Hologram Vinyl
  const shelfGeo = new THREE.BoxGeometry(1.85, 0.2, 0.7);
  const shelfMat = new THREE.MeshStandardMaterial({ color: 0x1a1638, roughness: 0.2, metalness: 0.7 });
  const shelfMesh = new THREE.Mesh(shelfGeo, shelfMat);
  shelfMesh.position.set(0, 1.35, 0.45);
  shelfMesh.rotation.x = 0.2;
  group.add(shelfMesh);

  // Floating Hologram Vinyl Disc
  const vinylGroup = new THREE.Group();
  vinylGroup.position.set(0, 1.65, 0.45);
  group.add(vinylGroup);

  const discGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.02, 32);
  const discMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.8 });
  const vinylDisc = new THREE.Mesh(discGeo, discMat);
  vinylGroup.add(vinylDisc);

  // Vinyl Grooves & Neon Label
  const ringGeo = new THREE.RingGeometry(0.12, 0.3, 32);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, side: THREE.DoubleSide });
  const vinylRing = new THREE.Mesh(ringGeo, ringMat);
  vinylRing.rotation.x = -Math.PI / 2;
  vinylRing.position.y = 0.015;
  vinylGroup.add(vinylRing);

  const centerLabelGeo = new THREE.RingGeometry(0, 0.1, 32);
  const centerLabelMat = new THREE.MeshBasicMaterial({ color: 0xff007f, side: THREE.DoubleSide });
  const centerLabel = new THREE.Mesh(centerLabelGeo, centerLabelMat);
  centerLabel.rotation.x = -Math.PI / 2;
  centerLabel.position.y = 0.016;
  vinylGroup.add(centerLabel);

  // 3. Upper Housing & CRT Monitor
  const midGeo = new THREE.BoxGeometry(1.8, 1.3, 1.1);
  const midMesh = new THREE.Mesh(midGeo, bodyMat);
  midMesh.position.set(0, 2.1, -0.05);
  group.add(midMesh);

  // Angled CRT Screen Bezel
  const bezelGeo = new THREE.BoxGeometry(1.5, 1.05, 0.08);
  const bezelMat = new THREE.MeshStandardMaterial({ color: 0x090717, roughness: 0.7 });
  const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
  bezelMesh.position.set(0, 2.15, 0.46);
  bezelMesh.rotation.x = -0.25;
  group.add(bezelMesh);

  // Dynamic Equalizer Screen Canvas
  const { texture: screenTex, render: renderScreen } = createJukeboxScreenTexture();
  const screenPlaneGeo = new THREE.PlaneGeometry(1.4, 0.95);
  const screenPlaneMat = new THREE.MeshBasicMaterial({
    map: screenTex,
    toneMapped: false
  });
  const screenMesh = new THREE.Mesh(screenPlaneGeo, screenPlaneMat);
  screenMesh.position.set(0, 2.15, 0.51);
  screenMesh.rotation.x = -0.25;
  group.add(screenMesh);

  // 4. Jukebox Crown Arch (Curved Dome)
  const archGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.0, 32, 1, false, 0, Math.PI);
  const archMesh = new THREE.Mesh(archGeo, bodyMat);
  archMesh.rotation.z = Math.PI / 2;
  archMesh.rotation.y = -Math.PI / 2;
  archMesh.position.set(0, 2.8, -0.05);
  group.add(archMesh);

  // Arch Neon Crown Tube
  const crownTubeGeo = new THREE.TorusGeometry(0.88, 0.05, 16, 32, Math.PI);
  const crownTube = new THREE.Mesh(crownTubeGeo, neonCyanMat);
  crownTube.position.set(0, 2.8, 0.4);
  group.add(crownTube);

  // 5. Backlit Marquee Header
  const marqueeTex = createJukeboxMarqueeTexture();
  const marqueeGeo = new THREE.BoxGeometry(1.7, 0.45, 0.1);
  const marqueeFace = new THREE.Mesh(
    new THREE.PlaneGeometry(1.68, 0.42),
    new THREE.MeshBasicMaterial({ map: marqueeTex, toneMapped: false })
  );
  marqueeFace.position.set(0, 3.12, 0.46);
  group.add(marqueeFace);

  // 6. Radiant Floor Glow Disc
  const glowGeo = new THREE.PlaneGeometry(3.6, 3.6);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x00f5ff,
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide
  });
  const floorGlow = new THREE.Mesh(glowGeo, glowMat);
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.set(0, 0.03, 0.6);
  group.add(floorGlow);

  // Stand Spot in front of Jukebox
  const forwardOffset = 2.0;
  const standX = position.x + Math.sin(rotationY) * forwardOffset;
  const standZ = position.z + Math.cos(rotationY) * forwardOffset;

  // Collision Box
  const collisionBox = {
    minX: position.x - 0.95,
    maxX: position.x + 0.95,
    minZ: position.z - 0.7,
    maxZ: position.z + 0.7
  };

  const game = {
    id: 'phase-ai-jukebox',
    name: 'Retro Arcade Jukebox',
    icon: '📻',
    category: 'music',
    description: 'Ouça as trilhas sonoras clássicas de Street Fighter II, Mario, Sonic, OutRun, GTA 2, Streets of Rage, Doom e Mega Man!',
    isJukebox: true
  };

  return {
    game,
    group,
    screenMesh,
    marqueeFace,
    floorGlow,
    standSpot: { x: standX, z: standZ },
    position: { x: position.x, z: position.z },
    rotationY,
    collisionBox,
    isHovered: false,
    isJukebox: true,
    update(time) {
      renderScreen(time, this.isHovered);

      // Spin hologram vinyl
      if (musicManager.isPlaying) {
        vinylGroup.rotation.y += 0.04;
      } else {
        vinylGroup.rotation.y += 0.005;
      }

      // Neon pulse
      if (this.isHovered) {
        floorGlow.material.opacity = 0.75 + Math.sin(time * 6.0) * 0.2;
        crownTube.material.color.setHex(Math.floor(time * 3) % 2 === 0 ? 0x00f5ff : 0xff007f);
      } else {
        floorGlow.material.opacity = 0.4 + Math.sin(time * 2.0) * 0.15;
      }
    }
  };
}
