"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Cpu, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    title: "Análisis del Proyecto",
    desc: "Revisión exhaustiva de requerimientos técnicos, materiales y tolerancias específicas.",
    icon: <Search className="w-6 h-6" />,
    color: "#ED1C24"
  },
  {
    title: "Diseño y Programación",
    desc: "Modelado avanzado en software CAD/CAM para optimizar rutas de maquinado y eficiencia.",
    icon: <PenTool className="w-6 h-6" />,
    color: "#ED1C24"
  },
  {
    title: "Fabricación y Maquinado",
    desc: "Producción en centros de maquinado HAAS de 4 ejes con precisión micrométrica.",
    icon: <Cpu className="w-6 h-6" />,
    color: "#ED1C24"
  },
  {
    title: "Control de Calidad",
    desc: "Inspección rigurosa dimensional para asegurar cumplimiento total con el diseño original.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "#ED1C24"
  },
  {
    title: "Entrega y Seguimiento",
    desc: "Envío puntual con logística especializada y soporte técnico post-entrega.",
    icon: <Truck className="w-6 h-6" />,
    color: "#ED1C24"
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-32 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            Metodología de Clase Mundial
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
          >
            DEL PLANO A LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">REALIDAD</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/5 hidden md:block" />
          
          <div className="space-y-12 md:space-y-32">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 text-white/20 font-black text-2xl border border-white/5 bg-white/5`}>
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}">
                    {step.desc}
                  </p>
                </div>

                {/* Center Icon */}
                <div className="relative z-20">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-[#0A0A0A] border border-white/10 rounded-3xl rotate-45 flex items-center justify-center group hover:border-[#ED1C24] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="-rotate-45 text-[#ED1C24] group-hover:scale-125 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ED1C24]/10 blur-[40px] rounded-full pointer-events-none -z-10" />
                </div>

                {/* Empty side to balance layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative large numbers behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50vh] font-black text-white/[0.01] pointer-events-none select-none tracking-tighter">
        FLOW
      </div>
    </section>
  );
}
