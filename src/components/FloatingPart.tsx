"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows, Text } from "@react-three/drei";
import { Geometry, Base, Subtraction } from "@react-three/csg";
import { useRef } from "react";
import * as THREE from "three";

function MoldModel() {
  const group = useRef<THREE.Group>(null);
  
  // Real aluminum/steel machined look
  const moldMaterial = new THREE.MeshStandardMaterial({
    color: "#e0e0e0",
    metalness: 0.9,
    roughness: 0.15,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 1,
    roughness: 0.05,
  });

  const renderRibbedCavitySubtractions = (xPos: number) => (
    <group position={[xPos, 0, 0]}>
      {/* Top cone */}
      <Subtraction position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.6, 0.8, 32]} />
      </Subtraction>
      
      {/* Main ribbed body space */}
      <Subtraction position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 1.1, 32]} />
      </Subtraction>

      {/* The Ribs (Torus outer shell will cut deeper into the mold block) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <Subtraction key={i} position={[0, 0.7 - i * 0.18, 0]} rotation={[Math.PI/2, 0, 0]}>
           <torusGeometry args={[0.6, 0.06, 16, 32]} />
        </Subtraction>
      ))}
      
      {/* Bottom cone */}
      <Subtraction position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.6, 0.35, 0.3, 32]} />
      </Subtraction>
      
      {/* Neck */}
      <Subtraction position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
      </Subtraction>
    </group>
  );

  return (
    <group ref={group}>
      <mesh material={moldMaterial}>
        <Geometry>
          {/* Placa base del molde centrada atrás de z=0 para que el corte a mitad de botella (z=0) exponga la cavidad */}
          <Base position={[0, 0, -1]}>
            <boxGeometry args={[4.4, 4.6, 2]} />
          </Base>
          
          {/* Substraemos las cavidades en z=0 para cortarlas a la mitad perfecta */}
          {renderRibbedCavitySubtractions(-1.1)}
          {renderRibbedCavitySubtractions(1.1)}
        </Geometry>
      </mesh>

      {/* Pernos guía (Guide Pins) con material cromado más brillante */}
      <mesh material={chromeMaterial} position={[-1.8, 1.9, 0.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[1.8, 1.9, 0.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[-1.8, -1.9, 0.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[1.8, -1.9, 0.2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
      </mesh>

      {/* Texto Engrabado 3D */}
      <Text
        position={[0, -1.8, 0.01]}
        fontSize={0.25}
        color="#ED1C24"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff"
        anchorX="center"
        anchorY="middle"
        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789! "
      >
        AMB MOLD PRECISION
      </Text>
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
