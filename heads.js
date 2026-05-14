import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// Track raw mouse position — each head computes its own aim angle per frame
let mouseX = window.innerWidth  / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/libs/draco/gltf/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

const DEG = THREE.MathUtils.degToRad;

document.querySelectorAll('.head-canvas').forEach((canvas) => {
  const glbPath = canvas.dataset.glb;

  // Per-head initial orientation (read from data-rot-* attributes, degrees)
  const baseRotX = DEG(parseFloat(canvas.dataset.rotX || 0));  // pitch  (+ = tilt forward, - = tilt back)
  const baseRotY = DEG(parseFloat(canvas.dataset.rotY || 0));  // yaw    (+ = turn right,   - = turn left)
  const baseRotZ = DEG(parseFloat(canvas.dataset.rotZ || 0));  // roll   (+ = tilt left,    - = tilt right)
  const scale    = parseFloat(canvas.dataset.scale   || 1);    // size   (1 = default, 1.5 = 50% bigger, 0.7 = smaller)

  let renderer, scene, camera, headGroup;
  let currentRotX = 0, currentRotY = 0;
  let targetRotX  = 0, targetRotY  = 0;
  const clock = new THREE.Clock();

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
    camera.position.set(0, 0, 1.8);

    const key  = new THREE.DirectionalLight(0xffffff, 1.8); key.position.set(-2, 3, 3);  scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5); fill.position.set(3, 0, 1);  scene.add(fill);
    const rim  = new THREE.DirectionalLight(0xffffff, 0.8); rim.position.set(0, -1, -3); scene.add(rim);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    headGroup = new THREE.Group();
    scene.add(headGroup);

    loader.load(glbPath, (gltf) => {
      const model = gltf.scene;
      model.traverse((obj) => {
        if (obj.isMesh) {
          obj.material = obj.material.clone();
          obj.material.vertexColors = true;
          obj.material.needsUpdate = true;
        }
      });

      const box    = new THREE.Box3().setFromObject(model);
      const centre = box.getCenter(new THREE.Vector3());
      const size   = box.getSize(new THREE.Vector3());
      const sc     = (0.8 * scale) / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(sc);
      model.position.sub(centre.multiplyScalar(sc));
      headGroup.add(model);
    });

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    (function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Compute the angle from this canvas center to the mouse each frame
      const rect  = canvas.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      // focal: conceptual depth — larger = less sensitive, tweak to taste
      const focal = window.innerHeight * 0.9;
      targetRotY  =  Math.atan2(mouseX - cx, focal);
      targetRotX  =  Math.atan2(mouseY - cy, focal);

      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;
      headGroup.rotation.x = baseRotX + currentRotX + Math.sin(t * 0.3) * 0.004;
      headGroup.rotation.y = baseRotY + currentRotY + Math.sin(t * 0.4) * 0.008;
      headGroup.rotation.z = baseRotZ;
      renderer.render(scene, camera);
    })();

  } catch (err) {
    console.error('Head canvas error:', canvas.id, err);
  }
});
