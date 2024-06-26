"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

export default function layout() {
  return (
    <div className="h-[100svh]">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.z += delta * 0.25;
    }
  });

  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  console.log(`Viewport width: ${viewportWidth}px`);

  const cubeGeometry: [number, number, number] =
    viewportWidth >= 1569 ? [2.5, 2.5, 2.5] : [1, 2, 2];

  console.log(cubeGeometry);

  return (
    <mesh ref={mesh}>
      <boxGeometry args={cubeGeometry} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}
