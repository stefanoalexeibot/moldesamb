"use client";

import { motion } from "framer-motion";
import { Settings, Wrench, Shield } from "lucide-react";

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="servicios" className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Dynamic background lights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED1C24]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center md:text-left mb-16 md:mb-24">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4">Core Business</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">
            CAPACIDADES <br className="hidden md:block"/> Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">SOLUCIONES</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 */}
          <motion.div variants={item} className="group relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full space-y-8 p-8 md:p-10 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-500 overflow-hidden cursor-default shadow-xl shadow-black">
              {/* Inner animated gradient */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#ED1C24]/10 blur-[50px] rounded-full group-hover:bg-[#ED1C24]/30 group-hover:scale-150 transition-all duration-700" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white flex items-center justify-center rounded-xl border border-white/10 group-hover:border-[#ED1C24]/50 group-hover:text-[#ED1C24] transition-all duration-500 shadow-inner group-hover:shadow-[inset_0_0_15px_rgba(237,28,36,0.2)]">
                <Settings className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">Fabricación <br /><span className="text-[#ED1C24] drop-shadow-[0_0_10px_rgba(237,28,36,0.3)]">CNC HAAS</span></h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">Mecanizado de alta complejidad con tolerancia micrométrica para la industria del plástico y metalmecánica.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="group relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full space-y-8 p-8 md:p-10 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-500 overflow-hidden cursor-default shadow-xl shadow-black md:translate-y-8">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#ED1C24]/10 blur-[50px] rounded-full group-hover:bg-[#ED1C24]/30 group-hover:scale-150 transition-all duration-700" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white flex items-center justify-center rounded-xl border border-white/10 group-hover:border-[#ED1C24]/50 group-hover:text-[#ED1C24] transition-all duration-500 shadow-inner group-hover:shadow-[inset_0_0_15px_rgba(237,28,36,0.2)]">
                <Wrench className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">Mantenimiento <br /><span className="text-[#ED1C24] drop-shadow-[0_0_10px_rgba(237,28,36,0.3)]">PREVENTIVO</span></h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">Mantenimiento planificado a herramentales críticos, asegurando cero tiempos muertos en tu línea de inyección.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="group relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full space-y-8 p-8 md:p-10 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-500 overflow-hidden cursor-default shadow-xl shadow-black">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#ED1C24]/10 blur-[50px] rounded-full group-hover:bg-[#ED1C24]/30 group-hover:scale-150 transition-all duration-700" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black text-white flex items-center justify-center rounded-xl border border-white/10 group-hover:border-[#ED1C24]/50 group-hover:text-[#ED1C24] transition-all duration-500 shadow-inner group-hover:shadow-[inset_0_0_15px_rgba(237,28,36,0.2)]">
                <Shield className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">Ingeniería <br /><span className="text-[#ED1C24] drop-shadow-[0_0_10px_rgba(237,28,36,0.3)]">DE CALIDAD</span></h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">Laboratorio de medición especializado y estrictos protocolos ISO-level aplicados a lo largo de toda la cadena de proceso.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
