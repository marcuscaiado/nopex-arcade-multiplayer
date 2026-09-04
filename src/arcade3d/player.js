import * as THREE from 'three';
import { playFootstep } from './audio.js';

export class ArcadePlayer {
  constructor(scene, identity = null) {
    this.scene = scene;
    this.identity = identity || { tag: 'MARC1', color: 0x00f5ff, colorHex: '#00f5ff' };
    this.tag = (this.identity.tag || 'MARC1').slice(0, 5).toUpperCase();
    this.colorNum = this.identity.color || 0x00f5ff;
    this.colorHex = this.identity.colorHex || '#00f5ff';

    // Spawn in front of central rotunda facing the arcade cabinets
    this.x = 0;
    this.y = 0;
    this.z = 7.5;
    this.rotation = Math.PI; // Face North (-Z) towards cabinets
    this.targetRotation = Math.PI;
    this.speed = 7.5; // Walk speed
    this.radius = 0.45; // Human-scale collision radius

    // Vertical Jump Physics
    this.velocityY = 0;
    this.gravity = -26.0;
    this.jumpStrength = 8.5;
    this.isGrounded = true;

    this.isMoving = false;
    this.walkCycle = 0;
    this.footstepTimer = 0;

    // Movement inputs
    this.keys = { forward: false, backward: false, left: false, right: false };
    this.joystickVector = { x: 0, y: 0 };
    this.navTarget = null; // { x, z, onArrival }

    this.createAvatarMesh();
    this.createNameTagSprite();
    this.bindKeyboard();
  }

  setIdentity(identity) {
    if (!identity) return;
    this.identity = identity;
    this.tag = (identity.tag || 'MARC1').slice(0, 5).toUpperCase();
    this.colorNum = identity.color || 0x00f5ff;
    this.colorHex = identity.colorHex || '#00f5ff';
    if (this.torso) this.torso.material.color.setHex(this.colorNum);
    if (this.leftFoot) this.leftFoot.material.color.setHex(this.colorNum);
    if (this.rightFoot) this.rightFoot.material.color.setHex(this.colorNum);
    if (this.nameSprite) {
      this.group.remove(this.nameSprite);
      this.createNameTagSprite();
    }
  }

  createNameTagSprite() {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 110;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(8, 9, 16, 0.88)';
    ctx.strokeStyle = this.colorHex;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(10, 10, canvas.width - 20, canvas.height - 20, 24);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 36px "Press Start 2P", monospace, sans-serif';
    ctx.fillStyle = '#ffd32a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#ffd32a';
    ctx.shadowBlur = 8;
    ctx.fillText(this.tag, canvas.width / 2, 42);

    ctx.shadowBlur = 0;
    ctx.font = 'bold 16px "Outfit", sans-serif';
    ctx.fillStyle = this.colorHex;
    ctx.fillText('VOCÊ', canvas.width / 2, 78);

    const texture = new THREE.CanvasTexture(canvas);
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
      color: this.colorNum,
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
    const footMat = new THREE.MeshStandardMaterial({ color: this.colorNum, roughness: 0.3 });

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
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.02;
    this.group.add(this.shadow);

    this.scene.add(this.group);
  }

  renderVisorEyes(isBlinking) {
    const ctx = this.visorCtx;
    ctx.clearRect(0, 0, 256, 128);

    // Dark glossy visor base
    ctx.fillStyle = '#060814';
    ctx.fillRect(0, 0, 256, 128);

    ctx.fillStyle = this.colorHex;
    ctx.shadowColor = this.colorHex;
    ctx.shadowBlur = 12;

    if (isBlinking) {
      // Closed happy line eyes
      ctx.lineWidth = 6;
      ctx.strokeStyle = this.colorHex;
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
      if (['ArrowUp', 'KeyW'].includes(e.code)) this.keys.forward = true;
      if (['ArrowDown', 'KeyS'].includes(e.code)) this.keys.backward = true;
      if (['ArrowLeft', 'KeyA'].includes(e.code)) this.keys.left = true;
      if (['ArrowRight', 'KeyD'].includes(e.code)) this.keys.right = true;
      if (e.code === 'Space') {
        if (this.isGrounded) {
          this.velocityY = this.jumpStrength;
          this.isGrounded = false;
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) this.keys.forward = false;
      if (['ArrowDown', 'KeyS'].includes(e.code)) this.keys.backward = false;
      if (['ArrowLeft', 'KeyA'].includes(e.code)) this.keys.left = false;
      if (['ArrowRight', 'KeyD'].includes(e.code)) this.keys.right = false;
    });
  }

  setJoystickVector(x, y) {
    this.joystickVector.x = x;
    this.joystickVector.y = y;
  }

  update(delta, roomBounds, cabinets, camera = null) {
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
        // Drive towards nav target smoothly
        moveX = dx / dist;
        moveZ = dz / dist;
      }
    }

    const len = Math.hypot(moveX, moveZ);
    if (len > 0.01) {
      moveX /= len;
      moveZ /= len;

      this.isMoving = true;
      this.targetRotation = Math.atan2(moveX, moveZ);

      // Attempt movement with wall & cabinet slide-collision
      const stepDist = this.speed * delta;
      const nextX = this.x + moveX * stepDist;
      const nextZ = this.z + moveZ * stepDist;

      // X movement check
      let allowX = true;
      if (roomBounds && (nextX - this.radius < roomBounds.minX || nextX + this.radius > roomBounds.maxX)) {
        allowX = false;
      }
      if (cabinets && allowX) {
        for (const cab of cabinets) {
          if (cab.collider && cab.collider.intersectsSphere(new THREE.Vector3(nextX, 0, this.z), this.radius)) {
            allowX = false;
            break;
          }
        }
      }
      if (allowX) this.x = nextX;

      // Z movement check
      let allowZ = true;
      if (roomBounds && (nextZ - this.radius < roomBounds.minZ || nextZ + this.radius > roomBounds.maxZ)) {
        allowZ = false;
      }
      if (cabinets && allowZ) {
        for (const cab of cabinets) {
          if (cab.collider && cab.collider.intersectsSphere(new THREE.Vector3(this.x, 0, nextZ), this.radius)) {
            allowZ = false;
            break;
          }
        }
      }
      if (allowZ) this.z = nextZ;

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

    // Vertical Jump Physics
    if (!this.isGrounded) {
      this.velocityY += this.gravity * delta;
      this.y += this.velocityY * delta;
      if (this.y <= 0) {
        this.y = 0;
        this.velocityY = 0;
        this.isGrounded = true;
      }
    }

    // Set Avatar Position & Rotation
    this.group.position.set(this.x, this.y, this.z);
    this.group.rotation.y = this.rotation;

    // Dynamic ground shadow scaling & position counter-offsetting when airborne
    if (this.shadow) {
      const shadowScale = Math.max(0.35, 1.0 - this.y * 0.25);
      this.shadow.scale.set(shadowScale, shadowScale, shadowScale);
      this.shadow.position.y = 0.02 - this.y;
    }

    if (!this.isGrounded) {
      // Airborne feet pose
      this.leftFoot.position.y = 0.08;
      this.rightFoot.position.y = 0.08;
      this.leftFoot.position.z = -0.08;
      this.rightFoot.position.z = 0.08;
      this.torso.rotation.z = 0;
    } else if (this.isMoving) {
      this.leftFoot.position.y = 0;
      this.rightFoot.position.y = 0;
      this.leftFoot.position.z = Math.sin(this.walkCycle) * 0.22;
      this.rightFoot.position.z = -Math.sin(this.walkCycle) * 0.22;
      this.torso.rotation.z = 0; // Zero roll tilt: keeps character and camera perfectly level
    } else {
      this.leftFoot.position.y = 0;
      this.rightFoot.position.y = 0;
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

    // Billboard name tag to camera
    if (this.nameSprite && camera) {
      this.nameSprite.quaternion.copy(camera.quaternion);
    }
  }
}
