import * as THREE from 'three';
import { playFootstep } from './audio.js';

export class ArcadePlayer {
  constructor(scene) {
    this.scene = scene;
    // Spawn in front of central rotunda facing the arcade cabinets
    this.x = 0;
    this.y = 0;
    this.z = 7.5;
    this.rotation = Math.PI; // Face North (-Z) towards cabinets
    this.targetRotation = Math.PI;
    this.speed = 7.5; // Walk speed
    this.radius = 0.45; // Human-scale collision radius

    this.isMoving = false;
    this.walkCycle = 0;
    this.footstepTimer = 0;

    // Movement inputs
    this.keys = { forward: false, backward: false, left: false, right: false };
    this.joystickVector = { x: 0, y: 0 };
    this.navTarget = null; // { x, z, onArrival }

    this.createAvatarMesh();
    this.bindKeyboard();
  }

  setNavigationTarget(x, z, onArrival = null) {
    this.navTarget = { x, z, onArrival };
  }

  clearNavigationTarget() {
    this.navTarget = null;
  }

  createAvatarMesh() {
    this.group = new THREE.Group();
    this.group.position.set(this.x, this.y, this.z);

    // 1. Torso (Neon Cyber Hoodie)
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.32, 0.8, 16);
    const torsoMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      roughness: 0.3,
      metalness: 0.2
    });
    this.torso = new THREE.Mesh(torsoGeo, torsoMat);
    this.torso.position.y = 0.85;
    this.group.add(this.torso);

    // Neon Zipper Stripe
    const zipGeo = new THREE.BoxGeometry(0.04, 0.78, 0.05);
    const zipMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const zipper = new THREE.Mesh(zipGeo, zipMat);
    zipper.position.set(0, 0.85, 0.35);
    this.group.add(zipper);

    // 2. Head & Helmet (Astronaut Spherical Helmet)
    const helmetGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const helmetMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1
    });
    this.head = new THREE.Mesh(helmetGeo, helmetMat);
    this.head.position.y = 1.55;
    this.group.add(this.head);

    // Visor with Kawaii Blinking Eyes (Canvas texture)
    this.visorCanvas = document.createElement('canvas');
    this.visorCanvas.width = 256;
    this.visorCanvas.height = 128;
    this.visorCtx = this.visorCanvas.getContext('2d');
    this.renderVisorEyes(false);

    this.visorTex = new THREE.CanvasTexture(this.visorCanvas);
    this.visorTex.needsUpdate = true;
    const visorMat = new THREE.MeshBasicMaterial({
      map: this.visorTex,
      transparent: true
    });
    const visorGeo = new THREE.CylinderGeometry(0.43, 0.43, 0.3, 16, 1, false, Math.PI * 0.15, Math.PI * 0.7);
    this.visorMesh = new THREE.Mesh(visorGeo, visorMat);
    this.visorMesh.position.set(0, 1.55, 0.02);
    this.visorMesh.rotation.y = -Math.PI / 2;
    this.group.add(this.visorMesh);

    // 3. Floating Magnetic Jetpack / Backpack
    const packGeo = new THREE.BoxGeometry(0.42, 0.5, 0.22);
    const packMat = new THREE.MeshStandardMaterial({ color: 0x1a2138, roughness: 0.4, metalness: 0.6 });
    const pack = new THREE.Mesh(packGeo, packMat);
    pack.position.set(0, 0.9, -0.36);
    this.group.add(pack);

    // Neon Thruster Glows
    const thrustGeo = new THREE.CylinderGeometry(0.06, 0.04, 0.12, 12);
    const thrustMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
    const th1 = new THREE.Mesh(thrustGeo, thrustMat);
    th1.position.set(-0.12, 0.6, -0.36);
    const th2 = new THREE.Mesh(thrustGeo, thrustMat);
    th2.position.set(0.12, 0.6, -0.36);
    this.group.add(th1);
    this.group.add(th2);

    // 4. Little Kawaii Feet (Left & Right)
    const footGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const footMat = new THREE.MeshStandardMaterial({ color: 0xff007f, roughness: 0.3 });

    this.leftFoot = new THREE.Mesh(footGeo, footMat);
    this.leftFoot.position.set(-0.2, 0.14, 0);
    this.group.add(this.leftFoot);

    this.rightFoot = new THREE.Mesh(footGeo, footMat);
    this.rightFoot.position.set(0.2, 0.14, 0);
    this.group.add(this.rightFoot);

    // 5. Shadow Disc
    const shadowGeo = new THREE.CircleGeometry(0.55, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.45
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.02;
    this.group.add(shadow);

    this.scene.add(this.group);
  }

  renderVisorEyes(isBlinking) {
    const ctx = this.visorCtx;
    ctx.clearRect(0, 0, 256, 128);

    // Dark glossy visor base
    ctx.fillStyle = '#060814';
    ctx.fillRect(0, 0, 256, 128);

    ctx.fillStyle = '#00f5ff';
    ctx.shadowColor = '#00f5ff';
    ctx.shadowBlur = 12;

    if (isBlinking) {
      // Closed happy line eyes
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#00f5ff';
      ctx.beginPath();
      ctx.arc(85, 64, 22, 0.2, Math.PI - 0.2, false);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(171, 64, 22, 0.2, Math.PI - 0.2, false);
      ctx.stroke();
    } else {
      // Big cute kawaii circular eyes with highlights
      ctx.beginPath();
      ctx.ellipse(85, 60, 20, 26, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(171, 60, 20, 26, 0, 0, Math.PI * 2);
      ctx.fill();

      // Eye glimmer stars
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(90, 52, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(176, 52, 7, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      // Ignore inputs if typing in an input field
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = true; break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = true; break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = true; break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = true; break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = false; break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = false; break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = false; break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = false; break;
      }
    });
  }

  setJoystickVector(x, y) {
    this.joystickVector.x = x;
    this.joystickVector.y = y;
  }

  update(delta, roomBounds, cabinets) {
    let moveX = 0;
    let moveZ = 0;

    if (this.keys.forward) moveZ -= 1;
    if (this.keys.backward) moveZ += 1;
    if (this.keys.left) moveX -= 1;
    if (this.keys.right) moveX += 1;

    // Add joystick input
    if (Math.abs(this.joystickVector.x) > 0.1 || Math.abs(this.joystickVector.y) > 0.1) {
      moveX += this.joystickVector.x;
      moveZ += this.joystickVector.y;
    }

    const manualLength = Math.hypot(moveX, moveZ);
    if (manualLength > 0.01) {
      // Manual control cancels any auto-navigation
      this.navTarget = null;
    } else if (this.navTarget) {
      const dx = this.navTarget.x - this.x;
      const dz = this.navTarget.z - this.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.35) {
        // Arrived at target
        const onArrival = this.navTarget.onArrival;
        this.navTarget = null;
        if (onArrival) onArrival();
      } else {
        moveX = dx / dist;
        moveZ = dz / dist;
      }
    }

    const length = Math.hypot(moveX, moveZ);
    if (length > 0.01) {
      moveX /= length;
      moveZ /= length;
      this.isMoving = true;

      // Calculate target rotation angle facing movement direction
      this.targetRotation = Math.atan2(moveX, moveZ);

      // Desired next position
      const step = this.speed * delta;
      let nextX = this.x + moveX * step;
      let nextZ = this.z + moveZ * step;

      // 1. Boundary Clamping
      nextX = Math.max(roomBounds.minX + this.radius, Math.min(roomBounds.maxX - this.radius, nextX));
      nextZ = Math.max(roomBounds.minZ + this.radius, Math.min(roomBounds.maxZ - this.radius, nextZ));

      // 2. Continuous Circle-to-AABB Cabinet Collision with Smooth Gliding
      for (const cab of cabinets) {
        const box = cab.collisionBox;
        const closestX = Math.max(box.minX, Math.min(nextX, box.maxX));
        const closestZ = Math.max(box.minZ, Math.min(nextZ, box.maxZ));

        let diffX = nextX - closestX;
        let diffZ = nextZ - closestZ;
        const distSq = diffX * diffX + diffZ * diffZ;

        if (distSq < this.radius * this.radius) {
          const dist = Math.sqrt(distSq);
          if (dist > 0.0001) {
            const overlap = this.radius - dist;
            nextX += (diffX / dist) * overlap;
            nextZ += (diffZ / dist) * overlap;
          } else {
            nextZ += this.radius;
          }
        }
      }

      this.x = nextX;
      this.z = nextZ;

      // Footstep sound
      this.walkCycle += delta * 14.0;
      this.footstepTimer += delta;
      if (this.footstepTimer > 0.28) {
        playFootstep();
        this.footstepTimer = 0;
      }
    } else {
      this.isMoving = false;
      this.walkCycle = 0;
    }

    // Smooth rotation interpolation
    let rotDiff = this.targetRotation - this.rotation;
    while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
    while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
    this.rotation += rotDiff * 0.25;

    // Rock-solid grounded root position: ZERO vertical shake or wobble on camera
    this.group.position.set(this.x, this.y, this.z);
    this.group.rotation.y = this.rotation;

    if (this.isMoving) {
      this.leftFoot.position.z = Math.sin(this.walkCycle) * 0.22;
      this.rightFoot.position.z = -Math.sin(this.walkCycle) * 0.22;
      this.torso.rotation.z = 0; // Zero roll tilt: keeps character and camera perfectly level
    } else {
      this.leftFoot.position.z = 0;
      this.rightFoot.position.z = 0;
      this.torso.rotation.z = 0;
    }

    // Periodic kawaii eye blinking
    const time = performance.now() * 0.001;
    const isBlink = Math.sin(time * 1.5) > 0.94;
    if (this.lastBlinkState !== isBlink) {
      this.lastBlinkState = isBlink;
      this.renderVisorEyes(isBlink);
      this.visorTex.needsUpdate = true;
    }
  }
}
