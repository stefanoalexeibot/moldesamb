"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-haas-dark">
      {/* Background Overlay / Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(237,28,36,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,94,184,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-haas-red text-white text-xs font-black px-4 py-2 uppercase tracking-[0.3em] mb-6">
              Ingeniería de Clase Mundial
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-8">
              PRECISIÓN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-haas-red to-red-400">
                INDUSTRIAL
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-haas-gray/60 leading-relaxed mb-12 max-w-2xl font-medium"
          >
            Fabricación de moldes de inyección de plástico con tolerancia micrométrica. 
            Potenciados por centros de maquinado <span className="text-white font-bold">Haas de 4 ejes</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <button className="bg-haas-red hover:bg-white hover:text-haas-dark text-white px-10 py-5 text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group relative overflow-hidden">
              <span className="relative z-10">Cotizar Proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            <button className="border border-white/20 hover:border-white text-white px-10 py-5 text-sm font-black uppercase tracking-widest transition-all duration-300">
              Nuestra Tecnología
            </button>
          </motion.div>

          {/* Stats / Fast Features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <Settings className="text-haas-red w-8 h-8" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">4 EJES</div>
                <div className="text-haas-gray/40 text-xs font-bold uppercase tracking-widest">Maquinado CNC</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="text-haas-red w-8 h-8" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">ISO 9001</div>
                <div className="text-haas-gray/40 text-xs font-bold uppercase tracking-widest">Calidad Superior</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Zap className="text-haas-red w-8 h-8" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">TODO MÉXICO</div>
                <div className="text-haas-gray/40 text-xs font-bold uppercase tracking-widest">Alcance Nacional</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative large text bg */}
      <div className="absolute -bottom-20 -right-20 text-[300px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        HAAS
      </div>
    </section>
  );
}
