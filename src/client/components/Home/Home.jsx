import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Container } from 'react-bootstrap';

function configThree(threeRef) {
  const scene = new THREE.Scene();

  const width = window.innerWidth;
  const height = window.innerHeight - 70;

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

  return {
    renderer, geometry, material, cube, scene, camera,
  };
}


const Home = () => {
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
    <div aria-label="home-page">
      <div ref={threeRef} />
    </div>
  );
};

export default Home;
