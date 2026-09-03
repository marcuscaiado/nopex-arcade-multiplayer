import * as THREE from 'three';
import { ArcadePlayer } from './player.js';
import { buildArcadeWorld } from './world.js';
import { ArcadeInteraction } from './interaction.js';
import { ArcadePlayOverlay } from './play-overlay.js';

export class Arcade3DEngine {
  constructor(containerEl, gamesManifest) {
    this.container = containerEl;
    this.gamesManifest = gamesManifest;

    this.isRunning = false;
    this.isZoomingIn = false;
    this.zoomTarget = null;
    this.zoomProgress = 0;

    this.initScene();
    this.initWorld();
    this.initPlayer();
    this.initInteraction();
    this.initOverlay();
    this.initMobileControls();
    this.initTapToWalk();

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.onResize(), 150);
    });
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d122b);
    this.scene.fog = new THREE.Fog(0x0d122b, 40, 95);

    const width = this.container.clientWidth || window.innerWidth || 1280;
    const height = this.container.clientHeight || window.innerHeight || 720;

    this.camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
    this.camera.position.set(0, 4.2, 13.5);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.container.appendChild(this.renderer.domElement);
    this.clock = new THREE.Clock();

    // Tap-to-walk Raycaster and Destination Ring Pulse
    this.raycaster = new THREE.Raycaster();
    const ringGeo = new THREE.RingGeometry(0.5, 0.75, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    this.destinationRing = new THREE.Mesh(ringGeo, ringMat);
    this.destinationRing.rotation.x = -Math.PI / 2;
    this.destinationRing.position.set(0, 0.05, 0);
    this.scene.add(this.destinationRing);
    this.destinationPulse = 0;
  }

  initWorld() {
    this.world = buildArcadeWorld(this.scene, this.gamesManifest);
  }

  initPlayer() {
    this.player = new ArcadePlayer(this.scene);
  }

  initInteraction() {
    this.interaction = new ArcadeInteraction(this.world.cabinets, (game, cabinet) => {
      this.launchGame(game, cabinet);
    });
  }

  initOverlay() {
    this.overlay = new ArcadePlayOverlay(() => {
      this.isZoomingIn = false;
      this.zoomTarget = null;
      this.zoomProgress = 0;
    });
  }

  launchGame(game, cabinet) {
    this.isZoomingIn = true;
    this.zoomTarget = cabinet;
    this.zoomProgress = 0;

    // Smooth camera zoom towards cabinet screen before opening overlay
    setTimeout(() => {
      this.overlay.open(game);
    }, 550);
  }

  teleportToCabinet(gameId) {
    const cab = this.world.cabinets.find(c => c.game.id === gameId);
    if (!cab) return;
    this.player.clearNavigationTarget();
    this.player.x = cab.standSpot.x;
    this.player.z = cab.standSpot.z;
    this.player.rotation = cab.rotationY + Math.PI;
    this.player.targetRotation = this.player.rotation;
    this.interaction.update(this.player);
  }

  showDestinationPulse(x, z) {
    this.destinationRing.position.set(x, 0.04, z);
    this.destinationRing.scale.set(0.6, 0.6, 0.6);
    this.destinationRing.material.opacity = 0.9;
    this.destinationPulse = 1.0;
  }

  initTapToWalk() {
    let touchStartTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;

    const handlePointerDown = (e) => {
      touchStartTime = performance.now();
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    };

    const handlePointerUp = (e) => {
      const dt = performance.now() - touchStartTime;
      const dx = Math.abs(e.clientX - touchStartX);
      const dy = Math.abs(e.clientY - touchStartY);

      // Must be a clean quick tap, not a drag or long hold
      if (dt > 380 || dx > 20 || dy > 20) return;

      // Ignore if clicking UI elements, HUD, modal, or controls
      const target = e.target;
      if (target.closest('.nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer')) {
        return;
      }

      const rect = this.renderer.domElement.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera({ x: mouseX, y: mouseY }, this.camera);

      // 1. Check if an arcade cabinet was tapped
      let tappedCabinet = null;
      let closestDist = Infinity;

      for (const cab of this.world.cabinets) {
        const intersects = this.raycaster.intersectObjects(cab.group.children, true);
        if (intersects.length > 0 && intersects[0].distance < closestDist) {
          closestDist = intersects[0].distance;
          tappedCabinet = cab;
        }
      }

      if (tappedCabinet) {
        this.showDestinationPulse(tappedCabinet.standSpot.x, tappedCabinet.standSpot.z);
        this.player.setNavigationTarget(tappedCabinet.standSpot.x, tappedCabinet.standSpot.z, () => {
          this.interaction.update(this.player);
        });
        return;
      }

      // 2. Check if the floor was tapped
      if (this.world.floorMesh) {
        const floorIntersects = this.raycaster.intersectObject(this.world.floorMesh);
        if (floorIntersects.length > 0) {
          const pt = floorIntersects[0].point;
          // Clamp target to room bounds
          const b = this.world.roomBounds;
          const targetX = Math.max(b.minX + 0.5, Math.min(b.maxX - 0.5, pt.x));
          const targetZ = Math.max(b.minZ + 0.5, Math.min(b.maxZ - 0.5, pt.z));

          this.showDestinationPulse(targetX, targetZ);
          this.player.setNavigationTarget(targetX, targetZ, () => {
            this.interaction.update(this.player);
          });
        }
      }
    };

    const dom = this.renderer.domElement;
    dom.addEventListener('pointerdown', handlePointerDown);
    dom.addEventListener('pointerup', handlePointerUp);
  }

  initMobileControls() {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      document.body.classList.add('touch-device');
    }

    const joystickArea = document.getElementById('arcade-joystick');
    const stickThumb = document.getElementById('joystick-thumb');
    if (!joystickArea || !stickThumb) return;

    let touchId = null;
    let startX = 0;
    let startY = 0;
    const maxRadius = 45;

    // Arrow indicator elements
    const arrowUp = joystickArea.querySelector('.arrow-up');
    const arrowDown = joystickArea.querySelector('.arrow-down');
    const arrowLeft = joystickArea.querySelector('.arrow-left');
    const arrowRight = joystickArea.querySelector('.arrow-right');

    const updateArrows = (dx, dy) => {
      if (arrowUp) arrowUp.classList.toggle('active', dy < -12);
      if (arrowDown) arrowDown.classList.toggle('active', dy > 12);
      if (arrowLeft) arrowLeft.classList.toggle('active', dx < -12);
      if (arrowRight) arrowRight.classList.toggle('active', dx > 12);
    };

    const handleTouchStart = (e) => {
      // Don't capture if overlay is open
      if (this.overlay && this.overlay.isOpen) return;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const rect = joystickArea.getBoundingClientRect();
        
        // Touch on the joystick widget itself OR anywhere in the bottom-left quadrant
        const inJoystick = (t.clientX >= rect.left && t.clientX <= rect.right && t.clientY >= rect.top && t.clientY <= rect.bottom);
        const inLeftQuadrant = (t.clientX <= window.innerWidth * 0.55 && t.clientY >= window.innerHeight * 0.40);

        if (touchId === null && (inJoystick || inLeftQuadrant)) {
          // Check target to ensure we don't block HUD or header
          if (t.target && t.target.closest && t.target.closest('.nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay')) {
            continue;
          }

          e.preventDefault();
          touchId = t.identifier;

          if (inJoystick) {
            startX = rect.left + rect.width / 2;
            startY = rect.top + rect.height / 2;
          } else {
            // Dynamic repositioning: center joystick under player's thumb
            startX = t.clientX;
            startY = t.clientY;
            joystickArea.style.left = `${Math.max(12, Math.min(window.innerWidth - 130, startX - rect.width / 2))}px`;
            joystickArea.style.bottom = `${Math.max(12, Math.min(window.innerHeight - 130, window.innerHeight - startY - rect.height / 2))}px`;
          }

          joystickArea.classList.add('active');
          this.player.clearNavigationTarget();
          break;
        }
      }
    };

    const handleTouchMove = (e) => {
      if (touchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === touchId) {
          e.preventDefault();
          let dx = t.clientX - startX;
          let dy = t.clientY - startY;
          const dist = Math.hypot(dx, dy);

          if (dist > maxRadius) {
            dx = (dx / dist) * maxRadius;
            dy = (dy / dist) * maxRadius;
          }

          stickThumb.style.transform = `translate(${dx}px, ${dy}px)`;
          updateArrows(dx, dy);
          this.player.setJoystickVector(dx / maxRadius, dy / maxRadius);
          break;
        }
      }
    };

    const handleTouchEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchId) {
          touchId = null;
          stickThumb.style.transform = `translate(0px, 0px)`;
          joystickArea.classList.remove('active');
          updateArrows(0, 0);
          this.player.setJoystickVector(0, 0);
          break;
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    // On-Screen D-Pad Buttons
    const dpadButtons = [
      { id: 'dpad-up', vx: 0, vy: -1 },
      { id: 'dpad-down', vx: 0, vy: 1 },
      { id: 'dpad-left', vx: -1, vy: 0 },
      { id: 'dpad-right', vx: 1, vy: 0 }
    ];

    dpadButtons.forEach(({ id, vx, vy }) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const press = (e) => {
        e.preventDefault();
        this.player.clearNavigationTarget();
        this.player.setJoystickVector(vx, vy);
        btn.classList.add('pressed');
      };

      const release = (e) => {
        e.preventDefault();
        this.player.setJoystickVector(0, 0);
        btn.classList.remove('pressed');
      };

      btn.addEventListener('pointerdown', press);
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointerleave', release);
      btn.addEventListener('pointercancel', release);
    });
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();
    this.onResize();
    this.animate();
  }

  stop() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    // 1. Update World & Cabinets
    this.world.update(time);

    // Animate tap destination ring
    if (this.destinationPulse > 0) {
      this.destinationPulse -= delta * 1.6;
      const s = 0.6 + (1.0 - Math.max(0, this.destinationPulse)) * 0.9;
      this.destinationRing.scale.set(s, s, s);
      this.destinationRing.material.opacity = Math.max(0, this.destinationPulse) * 0.9;
      if (this.destinationPulse <= 0) {
        this.destinationRing.material.opacity = 0;
      }
    }

    // 2. Update Player if not currently in game overlay
    if (!this.overlay.isOpen) {
      this.player.update(delta, this.world.roomBounds, this.world.cabinets);
      this.interaction.update(this.player);
    }

    // 3. Camera Follow & Smooth Zoom
    if (this.isZoomingIn && this.zoomTarget) {
      const cab = this.zoomTarget;
      const rotY = cab.rotationY;

      // Exact Screen Center in world space
      const screenCenterX = cab.position.x + Math.sin(rotY) * 0.51;
      const screenCenterY = 2.15;
      const screenCenterZ = cab.position.z + Math.cos(rotY) * 0.51;
      const screenCenter = new THREE.Vector3(screenCenterX, screenCenterY, screenCenterZ);

      // Normal vector directly perpendicular to the angled CRT face
      const normalX = Math.sin(rotY) * 0.975;
      const normalY = 0.22;
      const normalZ = Math.cos(rotY) * 0.975;

      // Camera position placed directly along the screen normal at distance 1.35m
      const targetCamPos = new THREE.Vector3(
        screenCenterX + normalX * 1.35,
        screenCenterY + normalY * 1.35,
        screenCenterZ + normalZ * 1.35
      );

      this.camera.position.lerp(targetCamPos, 0.16);
      this.camera.lookAt(screenCenter);
    } else {
      // Third-person smooth follow (Fixed height steadycam: 100% fluid, zero tilt)
      const targetCamX = this.player.x;
      const targetCamY = 4.0;
      // Clamp camera so it NEVER penetrates the south wall
      const targetCamZ = Math.min(26.0, this.player.z + 6.2);

      this.camera.position.x += (targetCamX - this.camera.position.x) * 0.14;
      this.camera.position.y += (targetCamY - this.camera.position.y) * 0.14;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.14;

      // Smooth lookTarget with synchronized lerp to prevent any camera tilt or sway
      if (!this.camLookTarget) {
        this.camLookTarget = new THREE.Vector3(this.player.x, 1.4, this.player.z - 1.2);
      }
      this.camLookTarget.x += (this.player.x - this.camLookTarget.x) * 0.14;
      this.camLookTarget.y = 1.4;
      this.camLookTarget.z += ((this.player.z - 1.2) - this.camLookTarget.z) * 0.14;

      this.camera.lookAt(this.camLookTarget);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
