"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const CreditCard = () => {
  const { scene } = useGLTF("/models/MagnetCard.glb");

  return (
    <primitive
      object={scene}
      scale={90}
      rotation={[0, -2.9, 0.7]} // rota un poco en Y
    />
  );
};

export default function CreditCardCanvas() {
  return (
    <div className="w-full h-full absolute p-2 ">
      <Canvas camera={{ position: [0, 0, 2.7], fov: 25 }}>
        <ambientLight intensity={2.4} />
        <directionalLight position={[1, 0.4, 2]} intensity={2} />

        <CreditCard />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
