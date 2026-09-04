/**
 * Retro Pixelated CRT Gameplay Attract Loops
 * Renders authentic, high-speed 60 FPS pixel-art gameplay loops for all 38 games in the arcade!
 */

export function drawCRTAttract(ctx, game, time, W = 256, H = 224) {
  ctx.imageSmoothingEnabled = false;
  ctx.save();

  const id = (game.id || '').toLowerCase();

  // 1. Render Specific Gameplay Loop
  switch (id) {
    case 'cute-mini-golf':
      drawMiniGolf(ctx, time, W, H);
      break;
    case 'kawaii-8ball-pool':
      draw8BallPool(ctx, time, W, H);
      break;
    case 'neon-katana-slash':
      drawKatanaSlash(ctx, time, W, H);
      break;
    case 'geometricsurvivor':
      drawGeometricSurvivor(ctx, time, W, H);
      break;
    case 'stickman-fps-arcade':
      drawStickmanFPS(ctx, time, W, H);
      break;
    case 'neon-viper':
      drawNeonViper(ctx, time, W, H);
      break;
    case 'cyber-pinball-fx':
      drawPinball(ctx, time, W, H);
      break;
    case 'cyber-pong-3d':
      drawTableTennis(ctx, time, W, H);
      break;
    case 'neon-drift-racer':
      drawDriftRacer(ctx, time, W, H);
      break;
    case 'neon-orbit-drift':
      drawOrbitDrift(ctx, time, W, H);
      break;
    case 'brick-breaker-fx':
      drawBrickBreaker(ctx, time, W, H);
      break;
    case 'sky-ace-1944':
      drawSkyAce(ctx, time, W, H);
      break;
    case 'neon-pachinko-pop':
      drawPachinko(ctx, time, W, H);
      break;
    case 'cyber-shuriken':
      drawShuriken(ctx, time, W, H);
      break;
    case 'neon-drop-2048':
      drawDrop2048(ctx, time, W, H);
      break;
    case 'asteroid-blitz':
      drawAsteroidBlitz(ctx, time, W, H);
      break;
    case 'flappy-cyber-droid':
      drawFlappyDroid(ctx, time, W, H);
      break;
    case 'neon-archery-master':
      drawArchery(ctx, time, W, H);
      break;
    case 'cyber-runner-3d':
      drawCyberRunner(ctx, time, W, H);
      break;
    case 'neon-stack-3d':
      drawNeonStack(ctx, time, W, H);
      break;
    case 'neon-tetris-3d':
      drawTetris(ctx, time, W, H);
      break;
    case 'super-mario':
      drawMario(ctx, time, W, H);
      break;
    case 'super-bomberman':
      drawBomberman(ctx, time, W, H);
      break;
    case 'gta-2':
      drawGTA(ctx, time, W, H);
      break;
    case 'classic-doom':
      drawDoom(ctx, time, W, H);
      break;
    case 'classic-pacman':
      drawPacman(ctx, time, W, H);
      break;
    case 'sonic1':
      drawSonic1(ctx, time, W, H);
      break;
    case 'sonic2':
      drawSonic2(ctx, time, W, H);
      break;
    case 'fzero':
      drawFZero(ctx, time, W, H);
      break;
    case 'mk2':
      drawMortalKombat(ctx, time, W, H);
      break;
    case 'megaman2':
      drawMegaMan(ctx, time, W, H);
      break;
    case 'outrun':
      drawOutRun(ctx, time, W, H);
      break;
    case 'sor2':
      drawStreetsOfRage(ctx, time, W, H);
      break;
    case 'topgear':
      drawTopGear(ctx, time, W, H);
      break;
    case 'castlevania4':
      drawCastlevania(ctx, time, W, H);
      break;
    case 'mslug':
      drawMetalSlug(ctx, time, W, H);
      break;
    case 'mslugx':
      drawMetalSlugX(ctx, time, W, H);
      break;
    case 'street-fighter-2':
      drawStreetFighter(ctx, time, W, H);
      break;
    default:
      drawDefaultArcade(ctx, game, time, W, H);
      break;
  }

  // 2. Arcade CRT Diegetic HUD Overlay (Top & Bottom)
  drawArcadeOverlay(ctx, game, time, W, H);

  // 3. CRT Scanlines & Phosphor Grid
  ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
  for (let y = 0; y < H; y += 2) {
    ctx.fillRect(0, y, W, 1);
  }

  // 4. CRT Bezel Vignette
  ctx.strokeStyle = '#05ffa1';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, W - 4, H - 4);

  ctx.restore();
}

/** Diegetic Top & Bottom Arcade Overlay **/
function drawArcadeOverlay(ctx, game, time, W, H) {
  ctx.save();
  ctx.font = 'bold 8px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';

  // 1UP & High Score
  ctx.fillText('1UP  04820', 8, 12);
  ctx.textAlign = 'right';
  ctx.fillText('HIGH 25000', W - 8, 12);

  // Bottom Center: Blinking INSERT COIN / DEMO
  if (Math.floor(time * 2.5) % 2 === 0) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffd32a';
    ctx.fillText('★ INSERT COIN ★', W / 2, H - 8);
  } else {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#00f5ff';
    ctx.fillText('▶ DEMO PLAY ◀', W / 2, H - 8);
  }
  ctx.restore();
}

/* =======================================================================
 * 38 GAMEPLAY LOOP RENDERERS (PIXEL ART ATTRACT LOOPS)
 * ======================================================================= */

// 1. CUTE MINI GOLF 3D
function drawMiniGolf(ctx, t, W, H) {
  // Fairway grass with isometric stripes
  ctx.fillStyle = '#27ae60';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#2ecc71';
  for (let y = 0; y < H; y += 16) {
    ctx.fillRect(0, y, W, 8);
  }
  // Sand bunker & water hazard
  ctx.fillStyle = '#f1c40f';
  ctx.beginPath(); ctx.ellipse(40, 70, 30, 16, 0.2, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#3498db';
  ctx.beginPath(); ctx.ellipse(210, 150, 35, 18, -0.2, 0, Math.PI * 2); ctx.fill();

  // Cup with flag
  const cupX = 130, cupY = 65;
  ctx.fillStyle = '#111';
  ctx.beginPath(); ctx.ellipse(cupX, cupY, 8, 4, 0, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cupX, cupY); ctx.lineTo(cupX, cupY - 32); ctx.stroke();
  // Flapping red flag
  ctx.fillStyle = '#e74c3c';
  const flap = Math.sin(t * 8) * 3;
  ctx.beginPath();
  ctx.moveTo(cupX, cupY - 32);
  ctx.lineTo(cupX - 16 + flap, cupY - 26);
  ctx.lineTo(cupX, cupY - 20);
  ctx.fill();

  // Ball rolling cycle towards cup
  const loopT = (t * 0.8) % 3.0; // 3 sec loop
  let ballX, ballY, inCup = false;
  if (loopT < 2.0) {
    const prog = loopT / 2.0;
    ballX = 130 + Math.sin(prog * Math.PI) * 45;
    ballY = 190 - prog * 125;
  } else {
    ballX = cupX; ballY = cupY; inCup = true;
  }

  // Putter swing at start
  if (loopT < 0.6) {
    ctx.strokeStyle = '#bdc3c7'; ctx.lineWidth = 3;
    const pAngle = -0.4 + (loopT / 0.6) * 0.8;
    ctx.beginPath();
    ctx.moveTo(130 - Math.cos(pAngle) * 25, 190 - Math.sin(pAngle) * 25);
    ctx.lineTo(130, 190);
    ctx.stroke();
  }

  // Golf ball with trail
  if (!inCup) {
    ctx.fillStyle = '#ecf0f1';
    ctx.beginPath(); ctx.arc(ballX, ballY, 4, 0, Math.PI * 2); ctx.fill();
  } else {
    // "HOLE IN ONE!" celebration text
    ctx.fillStyle = '#f39c12'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center';
    ctx.fillText('NICE SHOT!', W / 2, 110);
    ctx.fillStyle = '#fff'; ctx.font = '9px monospace';
    ctx.fillText('+100 PTS', W / 2, 126);
  }
}

// 2. KAWAII 8-BALL POOL
function draw8BallPool(ctx, t, W, H) {
  // Pool table frame & green felt
  ctx.fillStyle = '#5c3a21'; ctx.fillRect(15, 25, W - 30, H - 50);
  ctx.fillStyle = '#16a085'; ctx.fillRect(25, 35, W - 50, H - 70);

  // 6 Pockets
  ctx.fillStyle = '#0a0a0a';
  const pockets = [[25, 35], [W / 2, 33], [W - 25, 35], [25, H - 35], [W / 2, H - 33], [W - 25, H - 35]];
  pockets.forEach(([px, py]) => {
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
  });

  const cycle = (t * 0.7) % 3.0;
  // Balls scatter
  const b1X = 160 + (cycle > 0.8 ? (cycle - 0.8) * 35 : 0);
  const b1Y = 90 - (cycle > 0.8 ? (cycle - 0.8) * 20 : 0);
  const b8X = 175 + (cycle > 0.8 ? (cycle - 0.8) * 15 : 0);
  const b8Y = 110 + (cycle > 0.8 ? (cycle - 0.8) * 10 : 0);
  const cueX = cycle < 0.8 ? 80 + cycle * 40 : 130 + (cycle - 0.8) * 15;
  const cueY = 110;

  // Draw Cute 8-Ball
  ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(b8X, b8Y, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(b8X, b8Y, 2.5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#000'; ctx.font = 'bold 5px monospace'; ctx.textAlign = 'center'; ctx.fillText('8', b8X, b8Y + 2);

  // Draw Yellow 1-Ball
  ctx.fillStyle = '#f1c40f'; ctx.beginPath(); ctx.arc(b1X, b1Y, 6, 0, Math.PI * 2); ctx.fill();
  // Cute Kawaii Eyes on ball
  ctx.fillStyle = '#000';
  ctx.fillRect(b1X - 2, b1Y - 1, 1, 2); ctx.fillRect(b1X + 1, b1Y - 1, 1, 2);

  // White Cue Ball
  ctx.fillStyle = '#ecf0f1'; ctx.beginPath(); ctx.arc(cueX, cueY, 6, 0, Math.PI * 2); ctx.fill();

  // Cue Stick pulling back & striking
  if (cycle < 0.8) {
    const pull = (0.8 - cycle) * 20;
    ctx.strokeStyle = '#d35400'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cueX - 8 - pull, cueY); ctx.lineTo(cueX - 45 - pull, cueY); ctx.stroke();
  }
}

// 3. NEON KATANA SLASH (FRUIT NINJA)
function drawKatanaSlash(ctx, t, W, H) {
  ctx.fillStyle = '#1a0e1c'; ctx.fillRect(0, 0, W, H);

  // Flying Watermelon & Banana
  const fT = (t * 1.5) % 2.5;
  const fruitY = 200 - Math.sin(fT / 2.5 * Math.PI) * 130;
  const fruitX = 60 + fT * 55;

  if (fT < 1.2) {
    // Intact Watermelon
    ctx.fillStyle = '#27ae60'; ctx.beginPath(); ctx.arc(fruitX, fruitY, 16, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#1e824c'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(fruitX, fruitY, 13, 0, Math.PI * 2); ctx.stroke();
  } else {
    // Sliced Watermelon Halves flying apart
    const sep = (fT - 1.2) * 25;
    // Left half
    ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(fruitX - sep, fruitY + sep, 14, 0.5 * Math.PI, 1.5 * Math.PI); ctx.fill();
    // Right half
    ctx.beginPath(); ctx.arc(fruitX + sep, fruitY + sep, 14, 1.5 * Math.PI, 0.5 * Math.PI); ctx.fill();
    // Juice Splatters
    ctx.fillStyle = '#ff007f';
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(fruitX + Math.sin(i * 1.2) * sep * 1.4, fruitY + Math.cos(i * 1.2) * sep * 1.4, 3, 3);
    }
  }

  // Neon Blade Slash Trail
  if (fT > 1.0 && fT < 1.6) {
    ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 4; ctx.shadowColor = '#00f5ff'; ctx.shadowBlur = 12;
    ctx.beginPath(); ctx.moveTo(fruitX - 50, fruitY - 40); ctx.lineTo(fruitX + 60, fruitY + 50); ctx.stroke();
    ctx.shadowBlur = 0;
    // Combo Text
    ctx.fillStyle = '#ffd32a'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center';
    ctx.fillText('COMBO x3!', W / 2, 70);
  }
}

// 4. GEOMETRIC SURVIVOR 3D
function drawGeometricSurvivor(ctx, t, W, H) {
  ctx.fillStyle = '#111827'; ctx.fillRect(0, 0, W, H);

  // Stone tile floor grid
  ctx.strokeStyle = '#1f2937'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  // Hero Knight (Sir Bonk) in center
  const hX = W / 2, hY = H / 2;
  ctx.fillStyle = '#3b82f6'; ctx.beginPath(); ctx.arc(hX, hY, 9, 0, Math.PI * 2); ctx.fill();
  // Helmet Visor
  ctx.fillStyle = '#93c5fd'; ctx.fillRect(hX - 3, hY - 4, 8, 3);

  // 3 Orbiting Swords
  for (let i = 0; i < 3; i++) {
    const angle = t * 5 + (i * Math.PI * 2) / 3;
    const sx = hX + Math.cos(angle) * 36;
    const sy = hY + Math.sin(angle) * 36;
    ctx.strokeStyle = '#05ffa1'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + Math.cos(angle) * 12, sy + Math.sin(angle) * 12); ctx.stroke();
  }

  // Swarm of Red Triangles (Monsters)
  for (let m = 0; m < 8; m++) {
    const dist = 60 + Math.sin(t * 3 + m) * 15;
    const ma = (m * Math.PI * 2) / 8 + t * 0.6;
    const mx = hX + Math.cos(ma) * dist;
    const my = hY + Math.sin(ma) * dist;
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(mx, my - 6); ctx.lineTo(mx + 6, my + 6); ctx.lineTo(mx - 6, my + 6); ctx.fill();
  }

  // Blue EXP gems vacuuming to hero
  ctx.fillStyle = '#00f5ff';
  const gemProg = (t * 2) % 1;
  ctx.fillRect(hX + (1 - gemProg) * 25, hY - (1 - gemProg) * 20, 3, 3);
}

// 5. STICKMAN FPS ARCADE
function drawStickmanFPS(ctx, t, W, H) {
  // Desert Sky & Bunker Sandbags
  ctx.fillStyle = '#d35400'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#7f8c8d'; ctx.fillRect(0, 140, W, 84); // Concrete bunker
  ctx.fillStyle = '#b7950b'; ctx.fillRect(30, 130, 80, 20); ctx.fillRect(150, 130, 80, 20); // Sandbags

  // Enemy Stickman popping up
  const pop = Math.sin(t * 3);
  const enemyY = pop > 0 ? 110 : 145;
  ctx.strokeStyle = '#111'; ctx.lineWidth = 2;
  // Head
  ctx.fillStyle = '#c0392b'; ctx.beginPath(); ctx.arc(190, enemyY, 6, 0, Math.PI * 2); ctx.fill();
  // Helmet
  ctx.fillStyle = '#2c3e50'; ctx.fillRect(184, enemyY - 8, 12, 4);

  // Moving Crosshair
  const chX = 190 + Math.sin(t * 6) * 12;
  const chY = enemyY + Math.cos(t * 6) * 8;
  ctx.strokeStyle = '#05ffa1'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(chX, chY, 12, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(chX - 16, chY); ctx.lineTo(chX + 16, chY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(chX, chY - 16); ctx.lineTo(chX, chY + 16); ctx.stroke();

  // Muzzle Flash
  if (Math.floor(t * 8) % 3 === 0) {
    ctx.fillStyle = '#ffd32a';
    ctx.beginPath(); ctx.arc(W / 2, H - 20, 18, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(W / 2, H - 20, 10, 0, Math.PI * 2); ctx.fill();
  }
}

// 6. NEON VIPER 3D (SNAKE.IO)
function drawNeonViper(ctx, t, W, H) {
  ctx.fillStyle = '#060a1e'; ctx.fillRect(0, 0, W, H);
  // Grid
  ctx.strokeStyle = 'rgba(0, 245, 255, 0.15)'; ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 16) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 16) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  // Food Orbs
  ctx.fillStyle = '#ff007f'; ctx.beginPath(); ctx.arc(60, 60, 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffd32a'; ctx.beginPath(); ctx.arc(200, 150, 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#00f5ff'; ctx.beginPath(); ctx.arc(170, 70, 4, 0, Math.PI * 2); ctx.fill();

  // Green Viper Body (14 Segments)
  for (let i = 14; i >= 0; i--) {
    const segT = t * 4 - i * 0.15;
    const sx = W / 2 + Math.sin(segT) * 60;
    const sy = H / 2 + Math.cos(segT * 0.7) * 45;
    ctx.fillStyle = i === 0 ? '#ffffff' : '#05ffa1';
    ctx.beginPath(); ctx.arc(sx, sy, i === 0 ? 7 : 5, 0, Math.PI * 2); ctx.fill();
    // Eyes on head
    if (i === 0) {
      ctx.fillStyle = '#111';
      ctx.fillRect(sx - 2, sy - 2, 2, 2); ctx.fillRect(sx + 1, sy - 2, 2, 2);
    }
  }
}

// 7. CYBER PINBALL FX
function drawPinball(ctx, t, W, H) {
  ctx.fillStyle = '#08081a'; ctx.fillRect(0, 0, W, H);
  // Outer Table Rail
  ctx.strokeStyle = '#7928ca'; ctx.lineWidth = 4;
  ctx.strokeRect(30, 20, W - 60, H - 40);

  // 3 Circular Bumpers
  const bump = [ [100, 70], [160, 70], [130, 110] ];
  bump.forEach(([bx, by], idx) => {
    ctx.fillStyle = (Math.floor(t * 6 + idx) % 2 === 0) ? '#ff007f' : '#00f5ff';
    ctx.beginPath(); ctx.arc(bx, by, 12, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 7px monospace'; ctx.textAlign = 'center'; ctx.fillText('100', bx, by + 2);
  });

  // Dual Flippers at bottom
  const flip = Math.sin(t * 8) > 0.5 ? 0.3 : 0;
  ctx.fillStyle = '#ffd32a';
  // Left flipper
  ctx.save(); ctx.translate(90, 175); ctx.rotate(-flip); ctx.fillRect(0, -3, 28, 6); ctx.restore();
  // Right flipper
  ctx.save(); ctx.translate(170, 175); ctx.rotate(flip); ctx.fillRect(-28, -3, 28, 6); ctx.restore();

  // Bouncing Chrome Ball
  const ballX = 130 + Math.sin(t * 7) * 35;
  const ballY = 90 + Math.cos(t * 9) * 45;
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(ballX, ballY, 5, 0, Math.PI * 2); ctx.fill();
}

// 8. KAWAII TABLE TENNIS 3D
function drawTableTennis(ctx, t, W, H) {
  // Perspective Table (Blue)
  ctx.fillStyle = '#1e3a8a';
  ctx.beginPath();
  ctx.moveTo(40, 180); ctx.lineTo(216, 180); ctx.lineTo(180, 70); ctx.lineTo(76, 70); ctx.fill();
  // White lines & Net
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.strokeRect(76, 70, 104, 110);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(58, 125); ctx.lineTo(198, 125); ctx.stroke();

  // Ball trajectory
  const p = (t * 2) % 2; // 0 to 2
  let bx, by;
  if (p < 1) {
    bx = 60 + p * 136; by = 160 - Math.sin(p * Math.PI) * 45;
  } else {
    const rp = p - 1;
    bx = 196 - rp * 136; by = 90 + Math.sin(rp * Math.PI) * 45;
  }
  ctx.fillStyle = '#f97316'; ctx.beginPath(); ctx.arc(bx, by, 4, 0, Math.PI * 2); ctx.fill();

  // Left Paddle (Cyan) & Right Paddle (Pink)
  ctx.fillStyle = '#06b6d4'; ctx.fillRect(48, 145 + Math.sin(t * 5) * 15, 8, 24);
  ctx.fillStyle = '#ec4899'; ctx.fillRect(200, 75 + Math.cos(t * 5) * 15, 8, 24);
}

// 9. NEON DRIFT RACER
function drawDriftRacer(ctx, t, W, H) {
  // Sunset sky & Mountains
  ctx.fillStyle = '#31103f'; ctx.fillRect(0, 0, W, 100);
  // Retro Sun
  ctx.fillStyle = '#f43f5e'; ctx.beginPath(); ctx.arc(W / 2, 85, 30, Math.PI, 0); ctx.fill();
  // Horizon Road
  ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 100, W, H - 100);

  // Moving road lines
  const speed = t * 240;
  for (let i = 0; i < 6; i++) {
    const y = 100 + ((i * 24 + speed) % 124);
    const w = 20 + ((y - 100) / 124) * 160;
    ctx.fillStyle = (Math.floor(y / 18) % 2 === 0) ? '#ff007f' : '#00f5ff';
    ctx.fillRect(W / 2 - w / 2, y, w, 4);
  }

  // Red Player Car drifting
  const carX = W / 2 + Math.sin(t * 4) * 40;
  ctx.fillStyle = '#ef4444'; ctx.fillRect(carX - 16, 175, 32, 16);
  ctx.fillStyle = '#fbbf24'; ctx.fillRect(carX - 12, 185, 6, 4); ctx.fillRect(carX + 6, 185, 6, 4); // Tail lights
  // Drift Sparks
  ctx.fillStyle = '#ffd32a';
  ctx.fillRect(carX - 20, 187, 3, 3); ctx.fillRect(carX + 17, 187, 3, 3);
}

// 10. NEON ORBIT DRIFT
function drawOrbitDrift(ctx, t, W, H) {
  ctx.fillStyle = '#030712'; ctx.fillRect(0, 0, W, H);
  // Center Planet with rings
  const cx = W / 2, cy = H / 2;
  ctx.fillStyle = '#8b5cf6'; ctx.beginPath(); ctx.arc(cx, cy, 22, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#c084fc'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(cx, cy, 38, 10, -0.3, 0, Math.PI * 2); ctx.stroke();

  // Ship orbiting
  const oA = t * 3;
  const sx = cx + Math.cos(oA) * 50;
  const sy = cy + Math.sin(oA) * 28;
  // Tether beam
  ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(sx, sy); ctx.stroke();
  // Ship
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();
}

// 11. BRICK BREAKER FX
function drawBrickBreaker(ctx, t, W, H) {
  ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, W, H);
  // Brick Grid
  const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4'];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c + Math.floor(t)) % 7 !== 0) { // Some broken bricks
        ctx.fillStyle = colors[r];
        ctx.fillRect(20 + c * 27, 30 + r * 12, 24, 8);
      }
    }
  }

  // Paddle
  const padX = W / 2 + Math.sin(t * 3) * 50;
  ctx.fillStyle = '#38bdf8'; ctx.fillRect(padX - 22, 185, 44, 7);

  // Ball
  const bx = W / 2 + Math.sin(t * 6) * 60;
  const by = 130 + Math.cos(t * 7) * 45;
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(bx, by, 4, 0, Math.PI * 2); ctx.fill();
}

// 12. SKY ACE 1944
function drawSkyAce(ctx, t, W, H) {
  // Scrolling Ocean & Islands
  ctx.fillStyle = '#1d4ed8'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#15803d'; // Green island
  const islandY = (t * 40) % (H + 60) - 30;
  ctx.beginPath(); ctx.ellipse(180, islandY, 40, 25, 0.4, 0, Math.PI * 2); ctx.fill();

  // Player Plane (P-51 Mustang)
  const px = W / 2 + Math.sin(t * 3) * 35;
  const py = 165;
  ctx.fillStyle = '#94a3b8'; ctx.fillRect(px - 3, py - 12, 6, 24); // Fuselage
  ctx.fillRect(px - 20, py - 2, 40, 5); // Wings
  // Machine gun bullets
  ctx.fillStyle = '#fef08a';
  for (let b = 0; b < 3; b++) {
    const by = py - 15 - ((t * 200 + b * 40) % 120);
    ctx.fillRect(px - 8, by, 2, 6); ctx.fillRect(px + 6, by, 2, 6);
  }

  // Enemy Bomber Exploding
  const ex = W / 2; const ey = 60;
  ctx.fillStyle = '#b91c1c'; ctx.fillRect(ex - 15, ey - 4, 30, 8);
  if (Math.floor(t * 4) % 2 === 0) {
    ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(ex, ey, 14, 0, Math.PI * 2); ctx.fill();
  }
}

// 13. NEON PACHINKO POP
function drawPachinko(ctx, t, W, H) {
  ctx.fillStyle = '#180d2b'; ctx.fillRect(0, 0, W, H);
  // Peg array
  ctx.fillStyle = '#ffd32a';
  for (let r = 0; r < 7; r++) {
    const offset = (r % 2 === 0) ? 0 : 12;
    for (let c = 0; c < 9; c++) {
      ctx.fillRect(36 + c * 22 + offset, 45 + r * 18, 3, 3);
    }
  }

  // Balls bouncing down
  for (let b = 0; b < 3; b++) {
    const bt = (t * 1.5 + b * 0.8) % 2.0;
    const by = 30 + bt * 75;
    const bx = W / 2 + Math.sin(bt * 8 + b) * 35;
    ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(bx, by, 4, 0, Math.PI * 2); ctx.fill();
  }

  // Payout cups at bottom
  ctx.fillStyle = '#05ffa1'; ctx.fillRect(40, 180, 40, 16);
  ctx.fillStyle = '#ff007f'; ctx.fillRect(108, 180, 40, 16);
  ctx.fillStyle = '#00f5ff'; ctx.fillRect(176, 180, 40, 16);
  ctx.fillStyle = '#fff'; ctx.font = '7px monospace'; ctx.textAlign = 'center'; ctx.fillText('FEVER', 128, 192);
}

// 14. CYBER SHURIKEN
function drawShuriken(ctx, t, W, H) {
  ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, W, H);
  // Bamboo target stand
  ctx.fillStyle = '#78350f'; ctx.fillRect(W / 2 - 4, 60, 8, 110);
  // Target rings
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(W / 2, 85, 30, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#dc2626'; ctx.beginPath(); ctx.arc(W / 2, 85, 20, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(W / 2, 85, 10, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#dc2626'; ctx.beginPath(); ctx.arc(W / 2, 85, 4, 0, Math.PI * 2); ctx.fill();

  // Spinning Shuriken throwing
  const shT = (t * 2) % 1.5;
  const sx = 30 + shT * (W / 2 - 30);
  const sy = 160 - shT * 75;
  ctx.save(); ctx.translate(sx, sy); ctx.rotate(t * 25);
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(-8, -2, 16, 4); ctx.fillRect(-2, -8, 4, 16);
  ctx.restore();
}

// 15. NEON DROP 2048
function drawDrop2048(ctx, t, W, H) {
  ctx.fillStyle = '#1e1b4b'; ctx.fillRect(0, 0, W, H);
  const grid = [
    ['2', '4', '8', '16'],
    ['32', '64', '128', '256'],
    ['512', '1024', '2', '4'],
    ['8', '16', '32', '64']
  ];
  const colors = {
    '2': '#eee4da', '4': '#ede0c8', '8': '#f2b179', '16': '#f59563',
    '32': '#f67c5f', '64': '#f65e3b', '128': '#edcf72', '256': '#edcc61',
    '512': '#edc850', '1024': '#edc53f'
  };

  const startX = 48, startY = 40;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const val = grid[r][c];
      ctx.fillStyle = colors[val] || '#cdc1b4';
      ctx.fillRect(startX + c * 38, startY + r * 38, 34, 34);
      ctx.fillStyle = '#111'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center';
      ctx.fillText(val, startX + c * 38 + 17, startY + r * 38 + 21);
    }
  }
}

// 16. ASTEROID BLITZ
function drawAsteroidBlitz(ctx, t, W, H) {
  ctx.fillStyle = '#000000'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2; // Vector green

  // Spaceship rotating
  const sAngle = t * 2;
  const sx = W / 2, sy = H / 2;
  ctx.save(); ctx.translate(sx, sy); ctx.rotate(sAngle);
  ctx.beginPath(); ctx.moveTo(0, -12); ctx.lineTo(8, 10); ctx.lineTo(0, 5); ctx.lineTo(-8, 10); ctx.closePath(); ctx.stroke();
  // Thrust flame
  if (Math.floor(t * 8) % 2 === 0) {
    ctx.beginPath(); ctx.moveTo(-4, 7); ctx.lineTo(0, 14); ctx.lineTo(4, 7); ctx.stroke();
  }
  ctx.restore();

  // Vector Rocks
  const rocks = [ [60, 60, 20], [200, 70, 16], [180, 160, 14], [70, 170, 12] ];
  rocks.forEach(([rx, ry, rad]) => {
    ctx.beginPath();
    for (let a = 0; a < 6; a++) {
      const ang = a * (Math.PI / 3);
      const r = rad + (a % 2 === 0 ? 3 : -3);
      const px = rx + Math.cos(ang) * r; const py = ry + Math.sin(ang) * r;
      if (a === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath(); ctx.stroke();
  });
}

// 17. FLAPPY CYBER DROID
function drawFlappyDroid(ctx, t, W, H) {
  ctx.fillStyle = '#4c1d95'; ctx.fillRect(0, 0, W, H);
  // Pipes scrolling
  const scroll = (t * 80) % 140;
  const pipes = [W - scroll, W - scroll + 140];
  pipes.forEach(px => {
    ctx.fillStyle = '#10b981';
    ctx.fillRect(px, 0, 26, 75); ctx.fillRect(px, 135, 26, 89); // Top and bottom pipe
  });

  // Cyber Droid flapping
  const dy = 105 + Math.sin(t * 6) * 20;
  ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(70, dy, 9, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.fillRect(72, dy - 4, 4, 4); // Eye
}

// 18. NEON ARCHERY MASTER
function drawArchery(ctx, t, W, H) {
  ctx.fillStyle = '#14532d'; ctx.fillRect(0, 0, W, H);
  // Target
  const tx = 200, ty = 90;
  const tColors = ['#f87171', '#fbbf24', '#38bdf8', '#fb7185'];
  for (let i = 4; i > 0; i--) {
    ctx.fillStyle = tColors[i - 1]; ctx.beginPath(); ctx.arc(tx, ty, i * 8, 0, Math.PI * 2); ctx.fill();
  }

  // Arrow flying
  const aT = (t * 2) % 1.5;
  const ax = 40 + aT * 160;
  const ay = 150 - Math.sin(aT / 1.5 * Math.PI) * 60;
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(ax - 18, ay); ctx.lineTo(ax, ay); ctx.stroke();
  ctx.fillStyle = '#e11d48'; ctx.fillRect(ax - 22, ay - 2, 4, 4); // Fletching
}

// 19. CYBER RUNNER 3D
function drawCyberRunner(ctx, t, W, H) {
  ctx.fillStyle = '#18181b'; ctx.fillRect(0, 0, W, H);
  // 3-lane perspective tracks
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(W / 2, 70); ctx.lineTo(30, H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W / 2, 70); ctx.lineTo(W / 2, H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W / 2, 70); ctx.lineTo(W - 30, H); ctx.stroke();

  // Red hurdle on track
  const hurdleY = 70 + ((t * 120) % 130);
  ctx.fillStyle = '#ef4444'; ctx.fillRect(W / 2 - 20, hurdleY, 40, 8);

  // Runner jumping
  const ry = 160 - Math.abs(Math.sin(t * 6)) * 25;
  ctx.fillStyle = '#06b6d4'; ctx.fillRect(W / 2 - 6, ry, 12, 22);
}

// 20. NEON STACK 3D
function drawNeonStack(ctx, t, W, H) {
  ctx.fillStyle = '#0c0a09'; ctx.fillRect(0, 0, W, H);
  // Stack of slabs
  const stackColors = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#6366f1'];
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = stackColors[i];
    ctx.fillRect(W / 2 - 40, 180 - i * 16, 80, 14);
  }
  // Sliding top slab
  const slideX = W / 2 - 40 + Math.sin(t * 4) * 35;
  ctx.fillStyle = '#06b6d4'; ctx.fillRect(slideX, 100, 80, 14);
}

// 21. NEON TETRIS 3D
function drawTetris(ctx, t, W, H) {
  ctx.fillStyle = '#030712'; ctx.fillRect(0, 0, W, H);
  // Well border
  ctx.strokeStyle = '#475569'; ctx.lineWidth = 2;
  ctx.strokeRect(70, 20, 116, 190);

  // Stacked blocks at bottom
  const colors = ['#00f5ff', '#ff007f', '#ffd32a', '#05ffa1', '#7928ca'];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 10; c++) {
      if ((r * 10 + c + Math.floor(t * 0.5)) % 5 !== 0) {
        ctx.fillStyle = colors[(r + c) % colors.length];
        ctx.fillRect(72 + c * 11, 166 + r * 11, 10, 10);
      }
    }
  }

  // Falling T-piece
  const fallY = 30 + ((t * 50) % 120);
  ctx.fillStyle = '#a855f7';
  ctx.fillRect(116, fallY, 10, 10); ctx.fillRect(105, fallY + 11, 32, 10);
}

// 22. SUPER MARIO (16-BIT PLATFORMER)
function drawMario(ctx, t, W, H) {
  // Blue Sky & Green Grass
  ctx.fillStyle = '#5c94fc'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#00a800'; ctx.fillRect(0, 180, W, 44);

  // Green Pipe
  ctx.fillStyle = '#00a800'; ctx.fillRect(160, 140, 28, 40);
  ctx.fillRect(156, 134, 36, 10);

  // ? Block
  ctx.fillStyle = '#fc9838'; ctx.fillRect(90, 110, 16, 16);
  ctx.fillStyle = '#000'; ctx.font = 'bold 10px monospace'; ctx.fillText('?', 94, 122);

  // Mario running & jumping
  const jump = Math.abs(Math.sin(t * 5)) * 35;
  const mx = 60 + ((t * 40) % 80);
  const my = 164 - jump;
  ctx.fillStyle = '#e40058'; ctx.fillRect(mx - 4, my - 8, 8, 10); // Red Shirt
  ctx.fillStyle = '#0000bc'; ctx.fillRect(mx - 4, my + 2, 8, 8); // Blue overalls
}

// 23. SUPER BOMBERMAN
function drawBomberman(ctx, t, W, H) {
  ctx.fillStyle = '#22c55e'; ctx.fillRect(0, 0, W, H);
  // Grid pillars
  ctx.fillStyle = '#64748b';
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      ctx.fillRect(40 + c * 40, 40 + r * 40, 18, 18);
    }
  }

  // Bomb with pulsating fuse
  const bx = 100, by = 100;
  ctx.fillStyle = '#09090b'; ctx.beginPath(); ctx.arc(bx, by, 8, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ef4444'; ctx.fillRect(bx - 1, by - 12, 3, 4); // Fuse

  // 4-Way Cross Explosion
  if (Math.floor(t * 3) % 2 === 0) {
    ctx.fillStyle = '#f97316';
    ctx.fillRect(bx - 30, by - 4, 60, 8); ctx.fillRect(bx - 4, by - 30, 8, 60);
  }
}

// 24. GTA 2 (TOP-DOWN URBAN ACTION)
function drawGTA(ctx, t, W, H) {
  ctx.fillStyle = '#334155'; ctx.fillRect(0, 0, W, H); // Asphalt
  // Yellow road lines
  ctx.strokeStyle = '#facc15'; ctx.lineWidth = 2; ctx.setLineDash([8, 8]);
  ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
  ctx.setLineDash([]);

  // Red Player Car drifting
  const cx = W / 2 - 25, cy = 120 + Math.sin(t * 3) * 20;
  ctx.fillStyle = '#dc2626'; ctx.fillRect(cx - 8, cy - 14, 16, 28);

  // Police Car chasing with flashing siren
  const px = W / 2 - 25, py = cy + 45;
  ctx.fillStyle = '#1e293b'; ctx.fillRect(px - 8, py - 14, 16, 28);
  ctx.fillStyle = (Math.floor(t * 12) % 2 === 0) ? '#3b82f6' : '#ef4444';
  ctx.fillRect(px - 4, py - 2, 8, 4); // Siren
}

// 25. CLASSIC DOOM (RETRO FPS)
function drawDoom(ctx, t, W, H) {
  // 3D Corridor Walls & Toxic Slime Floor
  ctx.fillStyle = '#3f3f46'; ctx.fillRect(0, 0, W, 120); // Wall
  ctx.fillStyle = '#15803d'; ctx.fillRect(0, 120, W, 104); // Slime

  // Red Demon Imp in distance
  const impX = W / 2 + Math.sin(t * 2) * 25;
  ctx.fillStyle = '#991b1b'; ctx.fillRect(impX - 10, 75, 20, 30);
  ctx.fillStyle = '#f59e0b'; ctx.fillRect(impX - 5, 80, 3, 3); ctx.fillRect(impX + 2, 80, 3, 3); // Eyes

  // Double Barrel Shotgun at bottom center
  ctx.fillStyle = '#18181b'; ctx.fillRect(W / 2 - 8, 165, 16, 50);
  // Muzzle Blast BOOM!
  if (Math.floor(t * 4) % 3 === 0) {
    ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(W / 2, 160, 24, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(W / 2, 160, 14, 0, Math.PI * 2); ctx.fill();
  }
}

// 26. CLASSIC PACMAN
function drawPacman(ctx, t, W, H) {
  ctx.fillStyle = '#000000'; ctx.fillRect(0, 0, W, H);
  // Blue Maze Lines
  ctx.strokeStyle = '#1d4ed8'; ctx.lineWidth = 3;
  ctx.strokeRect(30, 30, W - 60, H - 60);
  ctx.strokeRect(60, 60, 50, 30); ctx.strokeRect(146, 60, 50, 30);

  // Yellow Dots
  ctx.fillStyle = '#fef08a';
  for (let x = 45; x < W - 45; x += 18) {
    ctx.fillRect(x, 110, 3, 3);
  }

  // Chomping Pacman
  const pacX = 40 + ((t * 70) % (W - 80));
  const chomp = Math.abs(Math.sin(t * 12)) * 0.35;
  ctx.fillStyle = '#facc15';
  ctx.beginPath(); ctx.arc(pacX, 111, 10, chomp * Math.PI, (2 - chomp) * Math.PI); ctx.lineTo(pacX, 111); ctx.fill();

  // Blue Vulnerable Ghost fleeing
  ctx.fillStyle = '#3b82f6';
  ctx.beginPath(); ctx.arc(pacX + 35, 111, 8, Math.PI, 0); ctx.lineTo(pacX + 43, 118); ctx.lineTo(pacX + 27, 118); ctx.fill();
}

// 27. SONIC 1 (GREEN HILL)
function drawSonic1(ctx, t, W, H) {
  // Checkered brown ground & ocean
  ctx.fillStyle = '#38bdf8'; ctx.fillRect(0, 0, W, 140);
  ctx.fillStyle = '#b45309'; ctx.fillRect(0, 140, W, 84);
  // Checkers
  ctx.fillStyle = '#78350f';
  for (let x = 0; x < W; x += 16) {
    for (let y = 140; y < H; y += 16) {
      if ((x + y) % 32 === 0) ctx.fillRect(x, y, 16, 16);
    }
  }

  // Sonic Ball rolling across loop
  const sonicX = (t * 180) % W;
  ctx.fillStyle = '#2563eb'; ctx.beginPath(); ctx.arc(sonicX, 132, 10, 0, Math.PI * 2); ctx.fill();
  // Gold rings floating
  ctx.fillStyle = '#facc15';
  for (let r = 0; r < 4; r++) { ctx.fillRect(60 + r * 25, 120, 6, 8); }
}

// 28. SONIC 2
function drawSonic2(ctx, t, W, H) {
  drawSonic1(ctx, t, W, H);
  // Tails running right behind Sonic
  const tailsX = ((t * 180) % W) - 24;
  ctx.fillStyle = '#f97316'; ctx.beginPath(); ctx.arc(tailsX, 134, 8, 0, Math.PI * 2); ctx.fill();
  // Twin orange tails spinning
  ctx.fillRect(tailsX - 10, 130, 6, 6);
}

// 29. F-ZERO (MODE-7 ANTI-GRAV)
function drawFZero(ctx, t, W, H) {
  ctx.fillStyle = '#050515'; ctx.fillRect(0, 0, W, 100); // Space
  ctx.fillStyle = '#1e1b4b'; ctx.fillRect(0, 100, W, H - 100); // Track floor

  // Curved track neon curbs
  ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(W / 2, 100); ctx.lineTo(10, H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W / 2, 100); ctx.lineTo(W - 10, H); ctx.stroke();

  // Orange Boost Strip
  const boostY = 100 + ((t * 180) % 120);
  ctx.fillStyle = '#f97316'; ctx.fillRect(W / 2 - 20, boostY, 40, 8);

  // Blue Falcon hovercraft
  const bx = W / 2 + Math.sin(t * 3) * 30;
  ctx.fillStyle = '#1d4ed8'; ctx.fillRect(bx - 14, 160, 28, 16);
  ctx.fillStyle = '#e11d48'; ctx.fillRect(bx - 10, 172, 6, 4); ctx.fillRect(bx + 4, 172, 6, 4); // Thrusters
}

// 30. MORTAL KOMBAT II
function drawMortalKombat(ctx, t, W, H) {
  ctx.fillStyle = '#1c1917'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#44403c'; ctx.fillRect(0, 160, W, 64); // Stone ground

  // Yellow Ninja (Scorpion) on left
  ctx.fillStyle = '#eab308'; ctx.fillRect(60, 120, 14, 38);
  // Blue Ninja (Sub-Zero) on right
  ctx.fillStyle = '#2563eb'; ctx.fillRect(180, 120, 14, 38);

  // Scorpion Spear Harpoon!
  const spearT = (t * 2) % 1.5;
  if (spearT < 1.0) {
    ctx.strokeStyle = '#eab308'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(74, 135); ctx.lineTo(74 + spearT * 106, 135); ctx.stroke();
  }
}

// 31. MEGA MAN 2
function drawMegaMan(ctx, t, W, H) {
  ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#0284c7'; ctx.fillRect(0, 170, W, 54); // Steel beam

  // Mega Man (Blue Bomber)
  const mx = 60, my = 150;
  ctx.fillStyle = '#38bdf8'; ctx.fillRect(mx, my, 12, 20); // Cyan helmet
  ctx.fillStyle = '#0284c7'; ctx.fillRect(mx - 4, my + 8, 8, 8); // Arm cannon

  // Lemon plasma bullets shooting
  ctx.fillStyle = '#facc15';
  for (let i = 0; i < 3; i++) {
    const bx = mx + 16 + ((t * 200 + i * 50) % 150);
    ctx.beginPath(); ctx.arc(bx, my + 10, 4, 0, Math.PI * 2); ctx.fill();
  }
}

// 32. OUTRUN
function drawOutRun(ctx, t, W, H) {
  // Sunny blue sky & palm trees
  ctx.fillStyle = '#38bdf8'; ctx.fillRect(0, 0, W, 100);
  ctx.fillStyle = '#fef08a'; ctx.beginPath(); ctx.arc(W / 2, 70, 24, 0, Math.PI * 2); ctx.fill(); // Sun
  ctx.fillStyle = '#334155'; ctx.fillRect(0, 100, W, H - 100); // Road

  // Red Convertible
  const rx = W / 2 + Math.sin(t * 3) * 35;
  ctx.fillStyle = '#dc2626'; ctx.fillRect(rx - 16, 165, 32, 16);
  ctx.fillStyle = '#fbbf24'; ctx.fillRect(rx - 6, 158, 6, 7); // Blonde passenger hair
}

// 33. STREETS OF RAGE 2
function drawStreetsOfRage(ctx, t, W, H) {
  ctx.fillStyle = '#09090b'; ctx.fillRect(0, 0, W, H);
  // Neon Club Sign
  ctx.fillStyle = '#f43f5e'; ctx.font = 'bold 10px monospace'; ctx.fillText('CLUB 90s', 30, 50);
  ctx.fillStyle = '#27272a'; ctx.fillRect(0, 150, W, 74); // Street

  // Brawler punching
  const bx = 80, by = 125;
  ctx.fillStyle = '#ffffff'; ctx.fillRect(bx, by, 14, 32); // White shirt
  ctx.fillStyle = '#1d4ed8'; ctx.fillRect(bx, by + 16, 14, 18); // Jeans
  // Flaming dragon punch!
  if (Math.floor(t * 5) % 2 === 0) {
    ctx.fillStyle = '#f97316'; ctx.beginPath(); ctx.arc(bx + 20, by + 4, 12, 0, Math.PI * 2); ctx.fill();
  }
}

// 34. TOP GEAR
function drawTopGear(ctx, t, W, H) {
  ctx.fillStyle = '#f97316'; ctx.fillRect(0, 0, W, 90); // Sunset
  ctx.fillStyle = '#1e293b'; ctx.fillRect(0, 90, W, H - 90);

  // Twin race cars neck and neck
  const c1x = W / 2 - 25 + Math.sin(t * 4) * 8;
  const c2x = W / 2 + 15 - Math.sin(t * 4) * 8;
  ctx.fillStyle = '#ffffff'; ctx.fillRect(c1x, 155, 20, 14); // White car
  ctx.fillStyle = '#ef4444'; ctx.fillRect(c2x, 160, 20, 14); // Red car
  // Nitro Exhaust Flames
  ctx.fillStyle = '#38bdf8'; ctx.fillRect(c1x + 6, 169, 8, 8);
}

// 35. SUPER CASTLEVANIA IV
function drawCastlevania(ctx, t, W, H) {
  ctx.fillStyle = '#0f051d'; ctx.fillRect(0, 0, W, H);
  // Blood-red full moon
  ctx.fillStyle = '#991b1b'; ctx.beginPath(); ctx.arc(190, 60, 24, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#27272a'; ctx.fillRect(0, 160, W, 64); // Castle floor

  // Belmont Hunter with whip
  const hx = 60, hy = 130;
  ctx.fillStyle = '#78350f'; ctx.fillRect(hx, hy, 12, 30);
  // Leather whip strike!
  ctx.strokeStyle = '#facc15'; ctx.lineWidth = 2;
  const wT = (t * 3) % 1;
  ctx.beginPath(); ctx.moveTo(hx + 12, hy + 8);
  ctx.bezierCurveTo(hx + 35, hy - 10, hx + 50, hy + 20, hx + 70 + wT * 20, hy + 6);
  ctx.stroke();
}

// 36. METAL SLUG
function drawMetalSlug(ctx, t, W, H) {
  ctx.fillStyle = '#fde047'; ctx.fillRect(0, 0, W, 130); // Desert Sky
  ctx.fillStyle = '#d97706'; ctx.fillRect(0, 130, W, 94); // Sand ground

  // Marco with Heavy Machine Gun
  const mx = 60, my = 145;
  ctx.fillStyle = '#ffffff'; ctx.fillRect(mx - 4, my - 14, 8, 4); // White Headband
  ctx.fillStyle = '#ef4444'; ctx.fillRect(mx - 4, my - 10, 8, 14); // Red Vest
  ctx.fillStyle = '#15803d'; ctx.fillRect(mx - 4, my + 4, 8, 14); // Green pants

  // Bullets streaming & muzzle smoke
  ctx.fillStyle = '#facc15';
  for (let b = 0; b < 4; b++) {
    const bx = mx + 16 + ((t * 220 + b * 40) % 140);
    ctx.fillRect(bx, my - 6, 6, 2);
  }

  // Exploding Enemy Tank
  const tx = 190, ty = 145;
  ctx.fillStyle = '#475569'; ctx.fillRect(tx - 15, ty, 30, 16);
  if (Math.floor(t * 6) % 2 === 0) {
    ctx.fillStyle = '#f97316'; ctx.beginPath(); ctx.arc(tx, ty - 4, 18, 0, Math.PI * 2); ctx.fill();
  }
}

// 37. METAL SLUG X
function drawMetalSlugX(ctx, t, W, H) {
  drawMetalSlug(ctx, t, W, H);
  // Alien flying saucer hovering in sky
  const ufoX = 140 + Math.sin(t * 3) * 30;
  ctx.fillStyle = '#a855f7'; ctx.beginPath(); ctx.ellipse(ufoX, 50, 18, 7, 0, 0, Math.PI * 2); ctx.fill();
  // Laser beam firing down
  if (Math.floor(t * 4) % 2 === 0) {
    ctx.fillStyle = '#00f5ff'; ctx.fillRect(ufoX - 2, 57, 4, 80);
  }
}

// 38. STREET FIGHTER II
function drawStreetFighter(ctx, t, W, H) {
  ctx.fillStyle = '#7c2d12'; ctx.fillRect(0, 0, W, 140); // Dojo Wall
  ctx.fillStyle = '#ca8a04'; ctx.fillRect(0, 140, W, 84); // Tatami Mat

  // Ryu in White Gi on left
  const rx = 65, ry = 135;
  ctx.fillStyle = '#ffffff'; ctx.fillRect(rx - 6, ry - 16, 12, 30);
  ctx.fillStyle = '#ef4444'; ctx.fillRect(rx - 6, ry - 18, 12, 3); // Red headband

  // Blanka / Opponent on right
  const ox = 185, oy = 135;
  ctx.fillStyle = '#15803d'; ctx.fillRect(ox - 8, oy - 16, 16, 30);
  ctx.fillStyle = '#f97316'; ctx.fillRect(ox - 8, oy - 20, 16, 6); // Orange hair

  // Hadouken Fireball flying!
  const hProg = (t * 2) % 1.2;
  const hx = rx + 14 + hProg * 95;
  ctx.fillStyle = '#38bdf8'; ctx.beginPath(); ctx.arc(hx, ry - 6, 8, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(hx, ry - 6, 4, 0, Math.PI * 2); ctx.fill();
}

// Default Fallback
function drawDefaultArcade(ctx, game, t, W, H) {
  ctx.fillStyle = '#0a0d24'; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 1;
  for (let y = 0; y < H; y += 16) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  ctx.fillStyle = '#fff'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center';
  ctx.fillText((game.name || 'ARCADE').toUpperCase(), W / 2, H / 2);
}
