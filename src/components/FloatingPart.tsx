"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MoldModel() {
  const group = useRef<THREE.Group>(null);
  
  // Material metálico oscuro para el bloque base
  const moldMaterial = new THREE.MeshStandardMaterial({
    color: "#242424",
    metalness: 0.9,
    roughness: 0.2,
  });

  // Material pulido espejo para las cavidades como en la foto
  const polishedMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 1,
    roughness: 0.05,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: "#d0d0d0",
    metalness: 1,
    roughness: 0.1,
  });
  
  // Función para renderizar el core de la botella corrugada
  const renderRibbedCavity = (xPos: number) => (
    <group position={[xPos, 0, 0]}>
      {/* Punta superior cónica */}
      <mesh material={polishedMaterial} position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.15, 0.55, 0.8, 32]} />
      </mesh>
      
      {/* Cuerpo corrugado de la botella */}
      {Array.from({ length: 8 }).map((_, i) => (
        <group key={i} position={[0, 0.7 - i * 0.18, 0]}>
          <mesh material={polishedMaterial}>
            <cylinderGeometry args={[0.55, 0.55, 0.18, 32]} />
          </mesh>
          <mesh material={polishedMaterial}>
             <torusGeometry args={[0.55, 0.04, 16, 32]} />
          </mesh>
        </group>
      ))}
      
      {/* Base inferior cónica */}
      <mesh material={polishedMaterial} position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.55, 0.35, 0.3, 32]} />
      </mesh>
      
      {/* Cuello / Eje en la base */}
      <mesh material={chromeMaterial} position={[0, -1.0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.4, 32]} />
      </mesh>
      <mesh material={moldMaterial} position={[0, -1.0, 0.25]} rotation={[Math.PI/2, 0, 0]}>
         <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
      </mesh>
    </group>
  );

  return (
    <group ref={group}>
      {/* Placa base del molde */}
      <mesh material={moldMaterial} position={[0, 0, -1]}>
        <boxGeometry args={[4.2, 4.4, 1.5]} />
      </mesh>
      
      {/* Renderizar doble cavidad estilo botella */}
      {renderRibbedCavity(-1.0)}
      {renderRibbedCavity(1.0)}

      {/* Pernos guía (Guide Pins) */}
      <mesh material={chromeMaterial} position={[-1.7, 1.8, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 1.8, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[1.7, 1.8, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 1.8, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[-1.7, -1.8, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 1.8, 32]} />
      </mesh>
      <mesh material={chromeMaterial} position={[1.7, -1.8, -0.2]}>
        <cylinderGeometry args={[0.12, 0.12, 1.8, 32]} />
      </mesh>

      {/* Texto Engrabado 3D */}
      <Text
        position={[0, -1.7, -0.24]}
        fontSize={0.22}
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
