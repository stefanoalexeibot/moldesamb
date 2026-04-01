"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MoldModel() {
  const group = useRef<THREE.Group>(null);
  
  // Custom dark metallic material for the main mold blocks
  const moldMaterial = new THREE.MeshStandardMaterial({
    color: "#2C2C2C",
    metalness: 0.8,
    roughness: 0.2,
  });

  // Chrome material for guide pins & precision cylinders
  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: "#e0e0e0",
    metalness: 1,
    roughness: 0.1,
  });

  // Hot red glowing material representing the plastic part/cavity
  const cavityMaterial = new THREE.MeshStandardMaterial({
    color: "#ED1C24",
    metalness: 0.5,
    roughness: 0.2,
    emissive: "#ED1C24",
    emissiveIntensity: 0.8,
  });

  return (
    <group ref={group}>
      {/* Mold Base Bottom Plate */}
      <mesh material={moldMaterial} position={[0, -0.6, 0]}>
        <boxGeometry args={[4, 0.4, 4]} />
      </mesh>
      
      {/* Mold Core Plate */}
      <mesh material={moldMaterial} position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.8, 4]} />
      </mesh>

      {/* Guide Pins / Columns */}
      <mesh material={chromeMaterial} position={[-1.6, 1, -1.6]}>
        <cylinderGeometry args={[0.15, 0.15, 2.5, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[1.6, 1, -1.6]}>
        <cylinderGeometry args={[0.15, 0.15, 2.5, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[-1.6, 1, 1.6]}>
        <cylinderGeometry args={[0.15, 0.15, 2.5, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[1.6, 1, 1.6]}>
        <cylinderGeometry args={[0.15, 0.15, 2.5, 32]} />
      </mesh>

      {/* Center Core Detail */}
      <mesh material={moldMaterial} position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.5, 0.2, 32]} />
      </mesh>
      
      {/* The Injected Part / Red Highlight */}
      <mesh material={cavityMaterial} position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
      </mesh>
      
      <mesh material={cavityMaterial} position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
      </mesh>

      {/* Waterlines / Coolant ports on the side */}
      <mesh material={chromeMaterial} position={[-2.05, 0, 1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
      </mesh>
      <mesh material={chromeMaterial} position={[-2.05, 0, -1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
      </mesh>
      <mesh material={chromeMaterial} position={[2.05, 0, 1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
      </mesh>
      <mesh material={chromeMaterial} position={[2.05, 0, -1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
      </mesh>
    </group>
  );
}

export default function FloatingPart() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing border-y border-white/5 bg-[#050505]">
      
      {/* Aesthetic overlay text */}
      <div className="absolute top-10 left-6 md:left-12 z-10 pointer-events-none">
          <div className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-[10px] drop-shadow-md mb-2">
            Interacción 3D
          </div>
          <h3 className="text-white font-black italic text-4xl tracking-tighter uppercase drop-shadow-xl">
            MOLDE DE <br/><span className="text-white/30">INYECCIÓN</span>
          </h3>
          <p className="text-gray-400 font-light max-w-xs mt-4 text-sm">
            Diseño especializado de herramentales industriales interactuables. Arrastra el modelo para girarlo en 360°.
          </p>
      </div>

      <div className="absolute top-12 right-6 md:right-12 z-10 hidden md:block">
        <div className="bg-[#ED1C24] px-4 py-2 rounded-full font-black text-[10px] text-white tracking-widest uppercase animate-pulse">
            Premium WebGL
        </div>
      </div>

      {/* R3F Canvas */}
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <spotLight position={[-10, 10, -10]} intensity={1} color="#ED1C24" penumbra={1} />
        
        <Environment preset="city" />
        
        <PresentationControls
          global
          snap={true}
          rotation={[0.2, 0.4, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI, Math.PI]}
        >
          <Float rotationIntensity={0.6} floatIntensity={1} speed={2}>
            <MoldModel />
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -1.8, 0]} opacity={0.8} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
