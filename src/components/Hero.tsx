"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Settings, Shield, Zap } from "lucide-react";
import { MouseEvent } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const backgroundGradient = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(237, 28, 36, 0.15),
      transparent 80%
    )
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      id="inicio" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A] group"
    >
      {/* Dynamic Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: backgroundGradient }}
      />
      
      {/* Background Overlay / Mesh Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,94,184,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] text-[10px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6 shadow-[0_0_15px_rgba(237,28,36,0.3)] backdrop-blur-sm">
                Ingeniería de Clase Mundial
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8"
            >
              PRECISIÓN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1C24] via-red-500 to-red-400 drop-shadow-[0_0_15px_rgba(237,28,36,0.5)]">
                INDUSTRIAL
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl font-light"
            >
              Fabricación de moldes de inyección de plástico con tolerancia micrométrica. 
              Potenciados por centros de maquinado <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Haas de 4 ejes</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <button className="bg-[#ED1C24] text-white px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 relative overflow-hidden w-full md:w-auto justify-center group/btn shadow-[0_0_20px_rgba(237,28,36,0.4)] hover:shadow-[0_0_40px_rgba(237,28,36,0.7)] hover:bg-red-600">
                {/* Glossy inner reflection */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <span className="relative z-10">Cotizar Proyecto</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform relative z-10" />
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/40 hover:bg-white/10 text-white px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 w-full md:w-auto justify-center">
                Nuestra Tecnología
              </button>
            </motion.div>
          </motion.div>

          {/* Stats / Fast Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 relative"
          >
            {/* Subtle glow line across top of grid */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 group cursor-default">
              <Settings className="text-[#ED1C24] w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-90 transition-transform duration-700" />
              <div>
                <div className="text-white font-black text-xl sm:text-2xl tracking-tighter mix-blend-plus-lighter">4 EJES</div>
                <div className="text-gray-500 text-[9px] sm:text-xs font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">Maquinado CNC</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 group cursor-default">
              <Shield className="text-[#ED1C24] w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <div className="text-white font-black text-xl sm:text-2xl tracking-tighter">ISO 9001</div>
                <div className="text-gray-500 text-[9px] sm:text-xs font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">Calidad Superior</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4 group cursor-default">
              <Zap className="text-[#ED1C24] w-8 h-8 group-hover:-translate-y-1 transition-transform duration-500 shadow-xl" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">TODO MÉXICO</div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">Alcance Nacional</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative large text bg */}
      <div className="absolute -bottom-20 -right-20 text-[300px] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter mix-blend-overlay">
        HAAS
      </div>
    </section>
  );
}
