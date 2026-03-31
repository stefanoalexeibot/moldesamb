"use client";

import { motion } from "framer-motion";
import { Check, Cpu, Activity, Clock, Maximize, Zap, Settings, Ruler, RotateCw } from "lucide-react";

export default function Technology() {
  const machines = [
    { 
      title: "HAAS VF-4SS", 
      value: "Centro de Maquinado Super-Speed", 
      icon: <Activity className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
      specs: [
        { label: "Viajes (X, Y, Z)", value: "1270 x 508 x 635 mm", icon: <Maximize className="w-5 h-5" /> },
        { label: "Husillo", value: "12,000 RPM", icon: <RotateCw className="w-5 h-5" /> },
        { label: "Potencia del Motor", value: "30.0 hp Direct-Drive", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
    { 
      title: "HAAS VF-2SS", 
      value: "Centro de Maquinado Super-Speed", 
      icon: <Cpu className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1565439387879-1bea9960ffce?q=80&w=800&auto=format&fit=crop",
      specs: [
        { label: "Viajes (X, Y, Z)", value: "762 x 406 x 508 mm", icon: <Maximize className="w-5 h-5" /> },
        { label: "Husillo", value: "12,000 RPM", icon: <RotateCw className="w-5 h-5" /> },
        { label: "Velocidad de Avance", value: "35.6 m/min", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
    { 
      title: "HAAS ST-28", 
      value: "Centro de Torneado CNC", 
      icon: <Check className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
      specs: [
        { label: "Tamaño de Mandril", value: "12.0 Pulgadas", icon: <Ruler className="w-5 h-5" /> },
        { label: "Capacidad de Barra", value: "4.0 Pulgadas", icon: <Maximize className="w-5 h-5" /> },
        { label: "Motor y Velocidad", value: "40 hp  /  3,200 RPM", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
    { 
      title: "HAAS ST-15", 
      value: "Centro de Torneado CNC", 
      icon: <Clock className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      specs: [
        { label: "Tamaño de Mandril", value: "8.3 Pulgadas", icon: <Ruler className="w-5 h-5" /> },
        { label: "Capacidad de Barra", value: "2.5 Pulgadas", icon: <Maximize className="w-5 h-5" /> },
        { label: "Motor y Velocidad", value: "20 hp  /  4,000 RPM", icon: <Zap className="w-5 h-5" /> }
      ] 
    },
  ];

  return (
    <section id="tecnologia" className="py-20 md:py-32 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] bg-[#111] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#1A1A1A] to-transparent opacity-90 object-cover z-0 pointer-events-none" />
      <div className="absolute -z-10 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ED1C24]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24 max-w-4xl mx-auto"
        >
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block">Infraestructura de punta</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 italic">
            MAQUINARIA <span className="text-white/20 font-light not-italic">HAAS CNC</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-normal">
            Contamos con un parque de maquinaria compuesto por centros de maquinado vertical y tornos Haas de última generación. 
            Nuestra tecnología nos permite fabricar piezas complejas en acero, aluminio, latón y plásticos de ingeniería con una <span className="text-white font-semibold">precisión inigualable</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {machines.map((machine, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] border border-white/10 hover:border-[#ED1C24]/50 transition-all duration-500 group flex flex-col rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#ED1C24]/10"
            >
              {/* Image Section */}
              <div className="h-56 md:h-72 w-full relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-10 opacity-90" />
                <img src={machine.image} alt={machine.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-6 right-6 z-20 bg-[#ED1C24] p-3 rounded-full text-white shadow-lg shadow-[#ED1C24]/20 group-hover:scale-110 transition-transform">
                  {machine.icon}
                </div>
                <div className="absolute bottom-6 left-6 md:left-8 z-20">
                  <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{machine.value}</div>
                  <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter shadow-black/50 drop-shadow-md">{machine.title}</h3>
                </div>
              </div>
              
              {/* Specs Section - Very Large & Clear */}
              <div className="p-6 md:p-8 bg-[#151515] flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                  {machine.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-5 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="text-[#ED1C24] bg-white/5 p-3 md:p-4 rounded-xl group-hover:bg-[#ED1C24]/10 transition-colors">
                        {spec.icon}
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">{spec.label}</div>
                        <div className="text-white font-semibold text-base md:text-xl tracking-tight">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
