import React, { Suspense, useRef, useState } from 'react';

import { Html, useProgress } from '@react-three/drei';
import { Canvas, ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }}>
      <Suspense fallback={<Loader />}>
        <Box />
      </Suspense>
    </Canvas>
  );
};

const Box = (props: ThreeElements['mesh']) => {
  const gltf = useLoader(GLTFLoader, '/models/che.glb');
  const meshRef = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    >
      <primitive
        object={gltf.scene}
        position={[0, 0, 1]}
        scale={[0.1, 0.1, 0.1]}
        children-0-castShadow
      />
    </mesh>
  );
};

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
}
