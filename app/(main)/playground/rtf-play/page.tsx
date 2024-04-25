"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

export default function layout() {
  return (
    <div className="h-[100vh]">
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

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}
