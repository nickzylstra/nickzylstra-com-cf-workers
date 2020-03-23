import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight - 68,
});

function onWindowResize(camera, renderer) {
  const { width, height } = getWindowSize();
  // eslint-disable-next-line no-param-reassign
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

function configThree(threeRef) {
  const scene = new THREE.Scene();

  const { width, height } = getWindowSize();
  const camConf = {
    fieldOfView: 75,
    aspectRatio: width / height,
    clippingPlaneNear: 0.1,
    clippingPlaneFar: 1000,
  };
  // eslint-disable-next-line max-len
  const camera = new THREE.PerspectiveCamera(camConf.fieldOfView, camConf.aspectRatio, camConf.clippingPlaneNear, camConf.clippingPlaneFar);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  threeRef.current.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x007bff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  window.addEventListener('resize', () => onWindowResize(camera, renderer), false);

  return {
    renderer, geometry, material, cube, scene, camera,
  };
}


const Scene = () => {
  const threeRef = useRef(null);

  useEffect(() => {
    const {
      renderer, geometry, material, cube, scene, camera,
    } = configThree(threeRef);

    (function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }());

    return () => {
      scene.dispose();
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);
  return (
    <div ref={threeRef} />
  );
};

export default Scene;
