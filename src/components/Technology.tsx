"use client";

import { motion } from "framer-motion";
import { Check, Cpu, Activity, Clock } from "lucide-react";

export default function Technology() {
  const specs = [
    { title: "Velocidad de Husillo", value: "15,000 RPM", icon: <Cpu className="w-5 h-5" /> },
    { title: "Precisión de Posición", value: "±0.005 mm", icon: <Activity className="w-5 h-5" /> },
    { title: "Capacidad de Carga", value: "1,500 kg", icon: <Check className="w-5 h-5" /> },
    { title: "Operación 24/7", value: "Alta Disponibilidad", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <section id="tecnologia" className="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.3em] text-xs mb-6 block">Infraestructura de punta</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 italic">
              MAQUINARIA <span className="text-white/20 font-light not-italic">HAAS CNC</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Contamos con un parque de maquinaria compuesto por 4 centros de maquinado vertical Haas de última generación. 
              Nuestra tecnología de 4 ejes nos permite fabricar geometrías complejas con una precisión inigualable.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 hover:border-[#ED1C24] transition-colors group">
                  <div className="text-[#ED1C24] mb-4 group-hover:scale-110 transition-transform">{spec.icon}</div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{spec.title}</div>
                  <div className="text-xl font-bold">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual representation of a CNC machine / blueprint */}
            <div className="aspect-square bg-gradient-to-br from-[#ED1C24]/20 to-transparent border border-white/5 relative flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-20" />
              <div className="w-64 h-64 border-4 border-[#ED1C24]/30 rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite]">
                <div className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                  <Cpu className="w-20 h-20 text-[#ED1C24]/50" />
                </div>
              </div>
              
              {/* Floating technical labels */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 text-[10px] font-mono tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                X: 1016.00 mm <br />
                Y: 508.00 mm <br />
                Z: 635.00 mm
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ED1C24]/5 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
