import * as THREE from 'three';

export class RemoteArcadePlayer {
  constructor(scene, peerId, tag = 'P2', colorHex = '#00f5ff') {
    this.scene = scene;
    this.peerId = peerId;
    this.tag = (tag || 'P2').slice(0, 5).toUpperCase();
    this.colorHex = colorHex;
    this.colorNum = parseInt(colorHex.replace('#', '0x'), 16) || 0x00f5ff;

    this.x = 0;
    this.y = 0;
    this.z = 7.5;
    this.rotation = Math.PI;

    this.targetPosition = new THREE.Vector3(0, 0, 7.5);
    this.targetRotation = Math.PI;
    this.isMoving = false;
    this.walkCycle = 0;
    this.statusText = 'ONLINE';
    this.lastActiveTime = Date.now();

    this.createAvatarMesh();
    this.createNameTagSprite();
    this.createSpeechBubbleSprite();
  }

  createAvatarMesh() {
    this.group = new THREE.Group();
    this.group.position.set(this.x, this.y, this.z);

    // 1. Torso (Cyber Hoodie in player color)
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.32, 0.8, 16);
    const torsoMat = new THREE.MeshStandardMaterial({
      color: this.colorNum,
      roughness: 0.3,
      metalness: 0.3,
      emissive: this.colorNum,
      emissiveIntensity: 0.15
    });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.y = 0.85;
    this.group.add(this.torso);

    // Neon Zipper
    const zipGeo = new THREE.BoxGeometry(0.04, 0.78, 0.05);
    const zipMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const zipper = new THREE.Mesh(zipGeo, zipMat);
    zipper.position.set(0, 0.85, 0.35);
    this.group.add(zipper);

    // 2. Head & Astronaut Helmet
    const helmetGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const helmetMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d2e,
      roughness: 0.2,
      metalness: 0.8
    });
    this.helmet = new THREE.Mesh(helmetGeo, helmetMat);
    this.helmet.position.y = 1.6;
    this.group.add(this.helmet);

    // Curved Visor with player color reflection
    const visorGeo = new THREE.SphereGeometry(0.36, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
    const visorMat = new THREE.MeshStandardMaterial({
      color: this.colorNum,
      roughness: 0.1,
      metalness: 0.9,
      emissive: this.colorNum,
      emissiveIntensity: 0.3
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.rotation.x = Math.PI * 0.5;
    visor.position.set(0, 1.6, 0.12);
    this.group.add(visor);

    // 3. Legs
    const legGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.65, 12);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x0a0c16,
      roughness: 0.5
    });

    this.leftLeg = new THREE.Mesh(legGeo, legMat);
    this.leftLeg.position.set(-0.18, 0.35, 0);
    this.group.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, legMat);
    this.rightLeg.position.set(0.18, 0.35, 0);
    this.group.add(this.rightLeg);

    // Cyber Boots
    const bootGeo = new THREE.BoxGeometry(0.18, 0.16, 0.28);
    const bootMat = new THREE.MeshStandardMaterial({
      color: this.colorNum,
      roughness: 0.3
    });
    const leftBoot = new THREE.Mesh(bootGeo, bootMat);
    leftBoot.position.set(0, -0.28, 0.05);
    this.leftLeg.add(leftBoot);

    const rightBoot = new THREE.Mesh(bootGeo, bootMat);
    rightBoot.position.set(0, -0.28, 0.05);
    this.rightLeg.add(rightBoot);

    // Shadow Disc
    const shadowGeo = new THREE.CircleGeometry(0.55, 16);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI * 0.5;
    shadow.position.y = 0.02;
    this.group.add(shadow);

    this.scene.add(this.group);
  }

  createNameTagSprite() {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 110;
    this.nameCanvas = canvas;
    this.nameCtx = canvas.getContext('2d');

    this.renderNameTagCanvas();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    this.nameTexture = texture;

    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false
    });

    this.nameSprite = new THREE.Sprite(spriteMat);
    this.nameSprite.position.set(0, 2.35, 0);
    this.nameSprite.scale.set(1.6, 0.55, 1.0);
    this.group.add(this.nameSprite);
  }

  renderNameTagCanvas() {
    const ctx = this.nameCtx;
    const w = this.nameCanvas.width;
    const h = this.nameCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Pill background
    ctx.fillStyle = 'rgba(8, 9, 16, 0.88)';
    ctx.strokeStyle = this.colorHex;
    ctx.lineWidth = 4;

    const rad = 24;
    ctx.beginPath();
    ctx.roundRect(10, 10, w - 20, h - 20, rad);
    ctx.fill();
    ctx.stroke();

    // 5-letter TAG
    ctx.font = 'bold 36px "Press Start 2P", monospace, sans-serif';
    ctx.fillStyle = '#ffd32a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#ffd32a';
    ctx.shadowBlur = 8;
    ctx.fillText(this.tag, w / 2, 42);

    // Sub-status (e.g. ONLINE, ANDANDO, JOGANDO GTA 2)
    ctx.shadowBlur = 0;
    ctx.font = 'bold 16px "Outfit", sans-serif';
    ctx.fillStyle = this.colorHex;
    ctx.fillText(this.statusText, w / 2, 78);

    if (this.nameTexture) this.nameTexture.needsUpdate = true;
  }

  createSpeechBubbleSprite() {
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 140;
    this.bubbleCanvas = canvas;
    this.bubbleCtx = canvas.getContext('2d');
    this.bubbleTexture = new THREE.CanvasTexture(canvas);
    this.bubbleTexture.minFilter = THREE.LinearFilter;

    const spriteMat = new THREE.SpriteMaterial({
      map: this.bubbleTexture,
      transparent: true,
      depthTest: false
    });
    this.speechSprite = new THREE.Sprite(spriteMat);
    this.speechSprite.position.set(0, 3.1, 0);
    this.speechSprite.scale.set(2.2, 0.8, 1.0);
    this.speechSprite.visible = false;
    this.speechTimer = 0;
    this.group.add(this.speechSprite);
  }

  showSpeechBubble(text) {
    if (!text || !this.speechSprite) return;
    const ctx = this.bubbleCtx;
    const w = this.bubbleCanvas.width;
    const h = this.bubbleCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Cyber speech bubble background with rounded corners
    ctx.fillStyle = 'rgba(8, 12, 28, 0.94)';
    ctx.strokeStyle = this.colorHex || '#00f5ff';
    ctx.lineWidth = 4;

    // Main body pill
    ctx.beginPath();
    ctx.roundRect(10, 10, w - 20, h - 36, 18);
    ctx.fill();
    ctx.stroke();

    // Downward arrow / speech tail
    ctx.beginPath();
    ctx.moveTo(w / 2 - 14, h - 26);
    ctx.lineTo(w / 2, h - 6);
    ctx.lineTo(w / 2 + 14, h - 26);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Fill over tail base to connect smoothly with bubble interior
    ctx.fillStyle = 'rgba(8, 12, 28, 0.94)';
    ctx.fillRect(w / 2 - 12, h - 28, 24, 6);

    // Speech text with line wrapping
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px "Outfit", "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const maxChars = 22;
    const clean = text.trim();
    if (clean.length <= maxChars) {
      ctx.fillText(clean, w / 2, (h - 36) / 2 + 10);
    } else {
      let splitIdx = clean.lastIndexOf(' ', maxChars);
      if (splitIdx === -1 || splitIdx < 8) splitIdx = maxChars;
      const line1 = clean.substring(0, splitIdx).trim();
      const line2 = clean.substring(splitIdx, splitIdx + maxChars).trim();
      ctx.fillText(line1, w / 2, 34);
      ctx.fillText(line2 + (clean.length > splitIdx + maxChars ? '...' : ''), w / 2, 64);
    }

    this.bubbleTexture.needsUpdate = true;
    this.speechSprite.visible = true;
    this.speechTimer = 5.0; // Show for 5 seconds
  }

  setTelemetry(x, z, rotY, isMoving, y = 0) {
    this.targetPosition.set(x, y, z);
    this.targetRotation = rotY;
    this.isMoving = !!isMoving;
    this.lastActiveTime = Date.now();
  }

  setActivity(statusText) {
    this.statusText = statusText.slice(0, 14).toUpperCase();
    this.renderNameTagCanvas();
  }

  update(dt, camera) {
    if (!this.group) return;

    // Delta-time independent butter-smooth LERP
    const lerpFactor = Math.min(1.0, 1.0 - Math.exp(-14 * dt));
    this.group.position.lerp(this.targetPosition, lerpFactor);

    // Smooth Rotation
    let diff = this.targetRotation - this.group.rotation.y;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.group.rotation.y += diff * lerpFactor;

    // Walk Animation
    if (this.isMoving) {
      this.walkCycle += dt * 10;
      const legSwing = Math.sin(this.walkCycle) * 0.45;
      this.leftLeg.rotation.x = legSwing;
      this.rightLeg.rotation.x = -legSwing;
      this.torso.position.y = 0.85 + Math.abs(Math.sin(this.walkCycle * 2)) * 0.04;
      this.helmet.position.y = 1.6 + Math.abs(Math.sin(this.walkCycle * 2)) * 0.04;
    } else {
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.torso.position.y = 0.85;
      this.helmet.position.y = 1.6;
    }

    // Billboard name tag to always face active camera
    if (this.nameSprite && camera) {
      this.nameSprite.quaternion.copy(camera.quaternion);
    }

    // Billboard and update speech bubble
    if (this.speechSprite && this.speechSprite.visible) {
      if (camera) {
        this.speechSprite.quaternion.copy(camera.quaternion);
      }
      this.speechTimer -= dt;
      if (this.speechTimer <= 0) {
        this.speechSprite.visible = false;
      }
    }
  }

  dispose() {
    if (this.group && this.scene) {
      this.scene.remove(this.group);
      this.group.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
  }
}
