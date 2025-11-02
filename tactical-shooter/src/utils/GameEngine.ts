import * as THREE from 'three';
import { Target } from '../types/game';

export class GameEngine {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer | null = null;
  gun: THREE.Group;
  targets: Target[] = [];
  environment: THREE.Group;
  
  cameraRotation = { x: 0, y: 0 };
  cameraPosition = { x: 0, y: 1.6, z: 0 };
  
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 10, 50);
    
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.camera.position.set(0, 1.6, 0);
    
    this.gun = this.createGun();
    this.environment = this.createEnvironment();
    
    this.setupLighting();
    this.createTargets();
  }
  
  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);
    
    const hemisphereLight = new THREE.HemisphereLight(0x87ceeb, 0x545454, 0.5);
    this.scene.add(hemisphereLight);
  }
  
  createGun(): THREE.Group {
    const gunGroup = new THREE.Group();
    
    const bodyGeometry = new THREE.BoxGeometry(0.08, 0.15, 0.4);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2a2a2a,
      metalness: 0.8,
      roughness: 0.3,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0, 0);
    gunGroup.add(body);
    
    const barrelGeometry = new THREE.CylinderGeometry(0.015, 0.015, 0.3, 16);
    const barrelMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a1a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.05, -0.35);
    gunGroup.add(barrel);
    
    const gripGeometry = new THREE.BoxGeometry(0.06, 0.12, 0.08);
    const gripMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x3a3a3a,
      roughness: 0.8,
    });
    const grip = new THREE.Mesh(gripGeometry, gripMaterial);
    grip.position.set(0, -0.12, 0.05);
    gunGroup.add(grip);
    
    const sightGeometry = new THREE.BoxGeometry(0.02, 0.03, 0.02);
    const sightMaterial = new THREE.MeshStandardMaterial({ color: 0xff4444 });
    const sight = new THREE.Mesh(sightGeometry, sightMaterial);
    sight.position.set(0, 0.09, -0.1);
    gunGroup.add(sight);
    
    gunGroup.position.set(0.3, -0.3, -0.5);
    gunGroup.rotation.y = -0.1;
    
    this.camera.add(gunGroup);
    this.scene.add(this.camera);
    
    return gunGroup;
  }
  
  createEnvironment(): THREE.Group {
    const envGroup = new THREE.Group();
    
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x3a5f3a,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    envGroup.add(ground);
    
    const wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8b7355,
      roughness: 0.9,
    });
    
    const backWallGeometry = new THREE.BoxGeometry(20, 5, 0.5);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, 2.5, -10);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    envGroup.add(backWall);
    
    const leftWallGeometry = new THREE.BoxGeometry(0.5, 5, 20);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(-10, 2.5, 0);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    envGroup.add(leftWall);
    
    const rightWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    rightWall.position.set(10, 2.5, 0);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    envGroup.add(rightWall);
    
    for (let i = 0; i < 15; i++) {
      const crateGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const crateMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x8b6914,
        roughness: 0.9,
      });
      const crate = new THREE.Mesh(crateGeometry, crateMaterial);
      crate.position.set(
        Math.random() * 16 - 8,
        0.4,
        Math.random() * 16 - 8
      );
      crate.rotation.y = Math.random() * Math.PI;
      crate.castShadow = true;
      crate.receiveShadow = true;
      envGroup.add(crate);
    }
    
    this.scene.add(envGroup);
    return envGroup;
  }
  
  createTargets() {
    const targetPositions = [
      { x: -5, y: 1.5, z: -8 },
      { x: 0, y: 1.5, z: -9 },
      { x: 5, y: 1.5, z: -8 },
      { x: -7, y: 1.5, z: -6 },
      { x: 7, y: 1.5, z: -6 },
      { x: -3, y: 2.5, z: -7 },
      { x: 3, y: 2.5, z: -7 },
    ];
    
    targetPositions.forEach((pos, index) => {
      const targetGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32);
      const targetMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff4444,
        emissive: 0xff0000,
        emissiveIntensity: 0.3,
        metalness: 0.5,
        roughness: 0.5,
      });
      const targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
      targetMesh.position.set(pos.x, pos.y, pos.z);
      targetMesh.rotation.z = Math.PI / 2;
      targetMesh.castShadow = true;
      
      const ringGeometry = new THREE.TorusGeometry(0.15, 0.02, 16, 32);
      const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(pos.x, pos.y, pos.z - 0.03);
      ring.rotation.y = Math.PI / 2;
      this.scene.add(ring);
      
      this.scene.add(targetMesh);
      
      const target: Target = {
        id: `target-${index}`,
        position: pos,
        isHit: false,
        mesh: targetMesh,
      };
      
      this.targets.push(target);
    });
  }
  
  updateCamera(moveX: number, moveY: number, lookDeltaX: number, lookDeltaY: number) {
    const moveSpeed = 0.1;
    const lookSpeed = 0.002;
    
    this.cameraRotation.y -= lookDeltaX * lookSpeed;
    this.cameraRotation.x -= lookDeltaY * lookSpeed;
    this.cameraRotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.cameraRotation.x));
    
    const forward = new THREE.Vector3(
      Math.sin(this.cameraRotation.y),
      0,
      Math.cos(this.cameraRotation.y)
    );
    const right = new THREE.Vector3(
      Math.cos(this.cameraRotation.y),
      0,
      -Math.sin(this.cameraRotation.y)
    );
    
    this.cameraPosition.x += (forward.x * -moveY + right.x * moveX) * moveSpeed;
    this.cameraPosition.z += (forward.z * -moveY + right.z * moveX) * moveSpeed;
    
    this.cameraPosition.x = Math.max(-9, Math.min(9, this.cameraPosition.x));
    this.cameraPosition.z = Math.max(-9, Math.min(9, this.cameraPosition.z));
    
    this.camera.position.set(
      this.cameraPosition.x,
      this.cameraPosition.y,
      this.cameraPosition.z
    );
    
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.cameraRotation.y;
    this.camera.rotation.x = this.cameraRotation.x;
  }
  
  shoot(): Target | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    
    for (const target of this.targets) {
      if (target.isHit) continue;
      
      const intersects = raycaster.intersectObject(target.mesh);
      if (intersects.length > 0) {
        target.isHit = true;
        
        if (target.mesh) {
          target.mesh.material.color.setHex(0x333333);
          target.mesh.material.emissive.setHex(0x000000);
        }
        
        return target;
      }
    }
    
    return null;
  }
  
  animateGunRecoil() {
    const originalPosition = this.gun.position.clone();
    const originalRotation = this.gun.rotation.clone();
    
    this.gun.position.z += 0.05;
    this.gun.rotation.x -= 0.1;
    
    setTimeout(() => {
      this.gun.position.copy(originalPosition);
      this.gun.rotation.copy(originalRotation);
    }, 100);
  }
  
  render() {
    if (this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }
  
  checkGameComplete(): boolean {
    return this.targets.every(target => target.isHit);
  }
}
