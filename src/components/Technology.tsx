"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Cpu, Maximize, Orbit, Gauge, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const machines = [
  {
    id: "vf4ss",
    model: "VF-4SS",
    translationKey: "machine2",
    images: [
      "/images/originales/vf4ss/image_800x600_1.png",
      "/images/originales/vf4ss/image_800x600_2.jpg",
      "/images/originales/vf4ss/image_800x600_3.jpg",
      "/images/originales/vf4ss/image_800x600_4.jpg",
    ],
    specs: {
      travels: "1,270 x 508 x 635 mm",
      spindle: "12,000 RPM (Direct Drive)",
      atc: "30+1 Side-Mount",
      power: "30 HP (22.4 kW)"
    }
  },
  {
    id: "vf2ss",
    model: "VF-2SS",
    translationKey: "machine1",
    images: [
      "/images/originales/vf2ss/image_800x534_1.jpg",
      "/images/originales/vf2ss/image_800x534_2.jpg",
      "/images/originales/vf2ss/image_800x534_3.jpg",
      "/images/originales/vf2ss/image_800x534_4.jpg",
    ],
    specs: {
      travels: "762 x 406 x 508 mm",
      spindle: "12,000 RPM (Direct Drive)",
      atc: "30+1 Side-Mount",
      power: "30 HP (22.4 kW)"
    }
  },
  {
    id: "st28",
    model: "ST-28",
    translationKey: "machine3",
    images: ["/images/originales/ST-28.png"],
    specs: {
      travels: "213 x 572 mm",
      chuck: "10\" / 12\"",
      spindle: "3,200 RPM",
      power: "40 HP (29.8 kW)"
    }
  },
  {
    id: "st15",
    model: "ST-15",
    translationKey: "machine4",
    images: [
      "/images/originales/ST15_2/image_800x534_2.jpg",
      "/images/originales/ST15_2/image_800x534_1.jpg",
      "/images/originales/ST15_2/image_800x534_3.jpg",
      "/images/originales/ST15_2/image_800x534_4.jpg",
    ],
    specs: {
      travels: "200 x 406 mm",
      chuck: "8.3\"",
      spindle: "4,000 RPM",
      power: "20 HP (14.9 kW)"
    }
  }
];

export default function Technology() {
  const { t } = useLanguage();
  const [activeMachineId, setActiveMachineId] = useState(machines[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeMachine = machines.find((m) => m.id === activeMachineId)!;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % activeMachine.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + activeMachine.images.length) % activeMachine.images.length);
  };

  // Pre-load the common translation keys for easy access
  const specLabels = {
    travels: t("tech", "spec_travels"),
    spindle: t("tech", "spec_spindle"),
    atc: t("tech", "spec_atc"),
    chuck: t("tech", "spec_chuck"),
    power: t("tech", "spec_power"),
    precision: t("tech", "spec_precision"),
  };

  return (
    <section id="tecnologia" className="py-24 md:py-32 bg-[#080808] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
            {t("tech", "tag")}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic mb-8">
            {t("tech", "title")} <br />
            <span className="text-white/20 not-italic font-light">{t("tech", "title_accent")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            {t("tech", "subtitle")}
          </p>
        </div>

        {/* Machine Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {machines.map((device) => {
            const isActive = activeMachineId === device.id;
            return (
              <button
                key={device.id}
                onClick={() => {
                  setActiveMachineId(device.id);
                  setActiveImageIndex(0);
                }}
                className={`px-6 py-4 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all duration-300 flexitems-center gap-2 ${
                  isActive 
                  ? "bg-[#ED1C24] border-[#ED1C24] text-white shadow-[0_0_20px_rgba(237,28,36,0.3)] scale-105" 
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                <span>HAAS {device.model}</span>
              </button>
            );
          })}
        </div>

        {/* Active Machine Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Machine Image Gallery (Left Column) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] w-full bg-[#111] rounded-3xl overflow-hidden border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeMachine.id}-${activeImageIndex}`}
                  src={activeMachine.images[activeImageIndex]}
                  alt={`${activeMachine.model} view`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "anticipate" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gallery Controls (Only show if multiple images) */}
              {activeMachine.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ED1C24] hover:border-[#ED1C24] hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#ED1C24] hover:border-[#ED1C24] hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Thumbnails indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/10">
                    {activeMachine.images.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeImageIndex ? 'bg-[#ED1C24] w-6' : 'bg-white/30 hover:bg-white/60'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Specs Panel (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <motion.div
              key={`info-${activeMachine.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ED1C24]/10 border border-[#ED1C24]/30 flex items-center justify-center text-[#ED1C24]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#ED1C24] text-xs font-black tracking-[0.3em] uppercase">
                    {t("tech", `${activeMachine.translationKey}_title` as any) || "Haas CNC"}
                  </h4>
                  <p className="text-white text-3xl font-black italic tracking-tighter">
                    {activeMachine.model}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Travels */}
                <div className="p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex items-center gap-6">
                  <div className="p-3 bg-white/5 rounded-lg text-gray-400">
                    <Maximize className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{specLabels.travels}</div>
                    <div className="text-white font-medium">{activeMachine.specs.travels}</div>
                  </div>
                </div>

                {/* Spindle */}
                <div className="p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex items-center gap-6">
                  <div className="p-3 bg-[#ED1C24]/10 rounded-lg text-[#ED1C24]">
                    <Orbit className="w-6 h-6 animate-[spin_3s_linear_infinite]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{specLabels.spindle}</div>
                    <div className="text-white font-medium">{activeMachine.specs.spindle}</div>
                  </div>
                </div>

                {/* Power / General */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                    <Zap className="w-6 h-6 text-yellow-500 mb-3" />
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{specLabels.power}</div>
                    <div className="text-white font-medium text-sm">{activeMachine.specs.power}</div>
                  </div>
                  <div className="p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                    <Gauge className="w-6 h-6 text-blue-400 mb-3" />
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {activeMachine.specs.atc ? specLabels.atc : specLabels.chuck}
                    </div>
                    <div className="text-white font-medium text-sm">
                      {activeMachine.specs.atc || activeMachine.specs.chuck}
                    </div>
                  </div>
                </div>
                
                {/* Global Precision Guarantee block */}
                <div className="mt-4 p-6 bg-gradient-to-r from-[#ED1C24]/20 to-[#ED1C24]/5 border border-[#ED1C24]/30 rounded-2xl flex items-center gap-4">
                     <div className="w-2 h-full bg-[#ED1C24] rounded-full" />
                     <div>
                         <div className="text-white font-black italic tracking-tighter text-xl uppercase">{specLabels.precision}: ±0.005mm</div>
                         <div className="text-[#ED1C24] text-xs font-bold uppercase tracking-widest mt-1">Garantía Micrométrica Estándar</div>
                     </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
