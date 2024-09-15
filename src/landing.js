// Experience.js
import React from 'react';
import { Environment, Float, OrbitControls } from '@react-three/drei';
import { Book } from './book.js';
const Experience = () => {
  return (
    <>
      <Float
        rotationX={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book />
      </Float>
      <OrbitControls />
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadowMapWidth={2048}
        shadowMapHeight={2048}
        shadowBias={-0.0001}
      />
      <mesh positionY={-1.5} rotationX={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};


export default Experience;