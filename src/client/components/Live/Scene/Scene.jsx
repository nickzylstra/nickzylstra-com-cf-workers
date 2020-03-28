import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const getWindowSize = () => {
  // can increase density for high DPI mobile devices if desired
  // const ratio = window.devicePixelRatio;
  const tempHeight = window.innerHeight;
  const tempWidth = window.innerWidth;
  // const height = tempHeight * ratio || tempHeight;
  const height = tempHeight;
  // const width = tempWidth * ratio || tempWidth;
  const width = tempWidth;
  return ({ width, height });
};

function onWindowResize(camera, renderer) {
  const { width, height } = getWindowSize();
  // eslint-disable-next-line no-param-reassign
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

function configScene(canvas) {
  const { width, height } = getWindowSize();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const light = new THREE.DirectionalLight(0xffffff, 0.8);
  // light.castShadow = true;
  scene.add(light);

  const camConf = {
    fieldOfView: 75,
    aspectRatio: width / height,
    clippingPlaneNear: 0.1,
    clippingPlaneFar: 1000,
  };
  const camera = new THREE.PerspectiveCamera(
    camConf.fieldOfView, camConf.aspectRatio, camConf.clippingPlaneNear, camConf.clippingPlaneFar,
  );
  camera.position.set(0, 30, 100);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(width, height);
  // renderer.shadowMap.enabled = true;

  const cubeGeometry = new THREE.BoxBufferGeometry(20, 20, 20);
  const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x007bff });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.y = -20;
  cube.position.z = -150;
  // cube.castShadow = true;
  scene.add(cube);

  // const wireMaterial = new THREE.MeshPhongMaterial

  const waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);
  const water = new Water(
    waterGeometry,
    {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load('/assets/three/textures/waternormals.jpg', (texture) => {
        // eslint-disable-next-line
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      alpha: 1.0,
      sunDirection: light.position.clone().normalize(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    },
  );
  water.rotation.x = -Math.PI / 2;
  scene.add(water);

  const shapeParts = [cubeGeometry, cubeMaterial, waterGeometry, water.material];

  window.addEventListener('resize', () => onWindowResize(camera, renderer), false);

  return {
    renderer, shapeParts, cube, water, scene, camera,
  };
}


const Scene = () => {
  const threeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const {
      renderer, shapeParts, cube, water, scene, camera,
    } = configScene(threeRef.current);

    (function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.007;
      if (cube.position.y < 25) {
        cube.position.y += 0.1;
      }
      if (cube.position.z < 40) {
        // cube.position.z += 1000 * Math.abs(Math.sin(t));
        cube.position.z += 0.2;
      }

      water.material.uniforms.time.value += 1 / 60;
      renderer.render(scene, camera);
    }());

    return () => {
      scene.dispose();
      renderer.dispose();
      shapeParts.forEach((part) => { part.dispose(); });
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <canvas ref={threeRef} />
  );
};

export default Scene;
