"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import TiltCard from "./TiltCard";
import { Check, Cpu, Activity, Clock, Maximize, Zap, RotateCw, Ruler } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface Machine {
  title: string;
  value: string;
  icon: React.ReactNode;
  images: string[];
  specs: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const MachineSlideshow = ({ images, title }: { images: string[], title: string }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} - ${current}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 transition-all duration-500 rounded-full ${idx === current ? "w-8 bg-[#ED1C24]" : "w-2 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Technology() {
  const { t } = useLanguage();

  const machines: Machine[] = [
    {
      title: t("tech", "machine1_title"),
      value: t("tech", "machine1_value"),
      icon: <Cpu className="w-8 h-8" />,
      images: [
          "/images/originales/vf2_1.jpg",
          "/images/originales/vf2_2.png"
      ],
      specs: [
        { label: t("tech", "spec_travels"), value: "762 x 406 x 508 mm", icon: <Maximize className="w-4 h-4" /> },
        { label: t("tech", "spec_spindle"), value: "12,000 RPM", icon: <RotateCw className="w-4 h-4" /> },
        { label: t("tech", "spec_atc"), value: "30+1 Side-Mount", icon: <Zap className="w-4 h-4" /> },
        { label: t("tech", "spec_precision"), value: "±0.0025 mm", icon: <Ruler className="w-4 h-4" /> }
      ]
    },
    {
      title: t("tech", "machine2_title"),
      value: t("tech", "machine2_value"),
      icon: <Activity className="w-8 h-8" />,
      images: [
          "/images/originales/vf3_1.jpg",
          "/images/originales/vf3_2.png"
      ],
      specs: [
        { label: t("tech", "spec_travels"), value: "1,016 x 508 x 635 mm", icon: <Maximize className="w-4 h-4" /> },
        { label: t("tech", "spec_spindle"), value: "12,000 RPM", icon: <RotateCw className="w-4 h-4" /> },
        { label: t("tech", "spec_atc"), value: "30+1 Side-Mount", icon: <Zap className="w-4 h-4" /> },
        { label: t("tech", "spec_precision"), value: "±0.0025 mm", icon: <Ruler className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="tecnologia" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
            {t("tech", "tag")}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic mb-8">
            {t("tech", "title")} <br />
            <span className="text-[#ED1C24] not-italic">{t("tech", "title_accent")}</span>
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            {t("tech", "subtitle")}
          </p>
        </div>

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

                <div className="absolute top-48 md:top-60 left-6 md:left-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none text-left">
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
