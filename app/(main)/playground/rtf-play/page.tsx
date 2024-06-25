"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

type CubeTypes = [number, number, number];

export default function Layout() {
  const matrices: { [key: string]: CubeTypes } = {
    default: [1, 2, 2],
    larger: [2.5, 2.5, 2.5],
  };

  const [cubeGeometry, setCubeGeometry] = useState<CubeTypes>(matrices.default);

  useEffect(() => {
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    const initialGeometry: CubeTypes =
      viewportWidth >= 1024 ? matrices.larger : matrices.default;
    setCubeGeometry(initialGeometry);

    const handleResize = () => {
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;
      const newGeometry: CubeTypes =
        viewportWidth >= 1024 ? matrices.larger : matrices.default;
      setCubeGeometry(newGeometry);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-[100svh]">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube cubeGeometry={cubeGeometry} />
      </Canvas>
    </div>
  );
}

interface CubeProps {
  cubeGeometry: CubeTypes;
}

function Cube({ cubeGeometry }: CubeProps) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={cubeGeometry} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}
