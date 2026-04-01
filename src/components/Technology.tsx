"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import TiltCard from "./TiltCard";
import { Check, Cpu, Activity, Clock, Maximize, Zap, RotateCw, Ruler } from "lucide-react";

interface Machine {
  title: string;
  value: string;
  icon: React.ReactNode;
  images: string[];
  specs: { label: string; value: string; icon: React.ReactNode }[];
}

function MachineSlideshow({ images, title }: { images: string[], title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="h-64 md:h-80 w-full relative overflow-hidden bg-black/50 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30 z-10 opacity-90" />
      
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} view ${index + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-1000"
        />
      </AnimatePresence>

      {/* Navigation Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-20 flex gap-1.5">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-4 bg-[#ED1C24]' : 'w-1 bg-white/20'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Technology() {
  const machines: Machine[] = [
    { 
      title: "HAAS VF-4SS", 
      value: "Centro de Maquinado", 
      icon: <Activity className="w-6 h-6" />, 
      images: [
        "/images/originales/vf4ss/image_800x600_1.png",
        "/images/originales/vf4ss/image_800x600_2.jpg",
        "/images/originales/vf4ss/image_800x600_3.jpg",
        "/images/originales/vf4ss/image_800x600_4.jpg",
        "/images/originales/vf4ss/image_800x600_7.jpg",
        "/images/originales/vf4ss/image_800x600_8.jpg"
      ],
      specs: [
        { label: "Viajes (X,Y,Z)", value: "1270 x 508 x 635 mm", icon: <Maximize className="w-5 h-5" /> },
        { label: "Husillo", value: "12,000 RPM", icon: <RotateCw className="w-5 h-5" /> },
        { label: "Motor", value: "30.0 hp Direct", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
    { 
      title: "HAAS VF-2SS", 
      value: "Centro de Maquinado", 
      icon: <Cpu className="w-6 h-6" />, 
      images: [
        "/images/originales/vf2ss/image_800x534_1.jpg",
        "/images/originales/vf2ss/image_800x534_4.jpg",
        "/images/originales/vf2ss/image_800x534_5.jpg",
        "/images/originales/vf2ss/image_800x534_7.jpg",
        "/images/originales/vf2ss/image_800x534_8.jpg",
        "/images/originales/vf2ss/image_800x534_11.jpg"
      ],
      specs: [
        { label: "Viajes (X,Y,Z)", value: "762 x 406 x 508 mm", icon: <Maximize className="w-5 h-5" /> },
        { label: "Husillo", value: "12,000 RPM", icon: <RotateCw className="w-5 h-5" /> },
        { label: "Avance", value: "35.6 m/min", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
    { 
      title: "HAAS ST-28", 
      value: "Centro de Torneado", 
      icon: <Check className="w-6 h-6" />, 
      images: ["/images/originales/ST-28.png"],
      specs: [
        { label: "Mandril", value: "12.0 Pulgadas", icon: <Ruler className="w-5 h-5" /> },
        { label: "Barra Max", value: "4.0 Pulgadas", icon: <Maximize className="w-5 h-5" /> },
        { label: "Potencia", value: "40 hp / 3,200 RPM", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
    { 
      title: "HAAS ST-15", 
      value: "Centro de Torneado", 
      icon: <Clock className="w-6 h-6" />, 
      images: [
        "/images/originales/ST15_2/image_800x534_1.jpg",
        "/images/originales/ST15_2/image_800x534_2.jpg",
        "/images/originales/ST15_2/image_800x534_3.jpg",
        "/images/originales/ST15_2/image_800x534_7.jpg"
      ],
      specs: [
        { label: "Mandril", value: "8.3 Pulgadas", icon: <Ruler className="w-5 h-5" /> },
        { label: "Barra Max", value: "2.5 Pulgadas", icon: <Maximize className="w-5 h-5" /> },
        { label: "Potencia", value: "20 hp / 4,000 RPM", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
  ];

  return (
    <section id="tecnologia" className="py-20 md:py-32 bg-[#080808] text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#0F0F0F] to-transparent opacity-90 object-cover z-0 pointer-events-none" />
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#ED1C24]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24 max-w-4xl mx-auto"
        >
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block drop-shadow-[0_0_10px_rgba(237,28,36,0.3)]">Infraestructura de punta</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 italic">
            MAQUINARIA <span className="text-white/20 font-light not-italic">HAAS CNC</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            Contamos con un parque de maquinaria compuesto por centros de maquinado vertical y tornos Haas de última generación. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {machines.map((machine, index) => (
            <TiltCard key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0A0A0A] border border-white/5 hover:border-[#ED1C24]/50 transition-all duration-700 group flex flex-col rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(237,28,36,0.15)] relative"
              >
                <MachineSlideshow images={machine.images} title={machine.title} />

                <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-2xl text-white shadow-lg group-hover:bg-[#ED1C24] group-hover:scale-110 group-hover:border-[#ED1C24] group-hover:shadow-[#ED1C24]/30 transition-all duration-500">
                  {machine.icon}
                </div>

                <div className="absolute top-48 md:top-60 left-6 md:left-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                  <div className="text-[#ED1C24] text-xs font-bold uppercase tracking-widest mb-1 drop-shadow-md">{machine.value}</div>
                  <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white drop-shadow-lg">{machine.title}</h3>
                </div>
                
                <div className="p-6 md:p-8 bg-[#0F0F0F] flex-1 flex flex-col justify-center relative z-20 border-t border-white/5">
                  <div className="space-y-6">
                    {machine.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0 group/spec">
                        <div className="flex items-center gap-4">
                          <div className="text-gray-500 bg-black p-3 rounded-xl group-hover/spec:text-[#ED1C24] group-hover/spec:bg-[#ED1C24]/10 transition-colors duration-300">
                            {spec.icon}
                          </div>
                          <div className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">{spec.label}</div>
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base tracking-tight text-right group-hover/spec:text-white transition-colors">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
