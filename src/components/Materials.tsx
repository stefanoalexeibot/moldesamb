"use client";

import { motion } from "framer-motion";
import { Database, Shield, Layers, Zap } from "lucide-react";

const materialCategories = [
  {
    title: "Metales Industriales",
    description: "Aceros de grado herramental y aleaciones de alta resistencia.",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "Acero P20 / H13", spec: "Moldes de inyección", detail: "Dureza 28-32 HRC" },
      { name: "Acero Inoxidable", spec: "304 / 316 / 420", detail: "Grado alimenticio/médico" },
      { name: "Aluminio 6061-T6", spec: "Prototipado rápido", detail: "Excelente maquinabilidad" },
      { name: "Bronce / Cobre", spec: "Insertos térmicos", detail: "Alta conductividad" }
    ]
  },
  {
    title: "Polímeros de Ingeniería",
    description: "Plásticos técnicos con propiedades mecánicas superiores.",
    icon: <Layers className="w-6 h-6" />,
    items: [
      { name: "Nylon 6 / 66", spec: "Piezas mecánicas", detail: "Alta resistencia al desgaste" },
      { name: "Delrin (Acetal)", spec: "Engranajes / Bujes", detail: "Estabilidad dimensional" },
      { name: "PVC Alta Densidad", spec: "Componentes químicos", detail: "Resistencia a la corrosión" },
      { name: "UHMWPE", spec: "Guías de deslizamiento", detail: "Bajo coeficiente de fricción" }
    ]
  }
];

export default function Materials() {
  return (
    <section id="materiales" className="py-20 md:py-32 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">Capacidad Multimaterial</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">
            DOMINIO DE <span className="text-white/20 not-italic font-light">MATERIALES</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Desde aceros de alta dureza hasta polímeros de ingeniería avanzados, 
            maquinamos una amplia gama de sustratos para satisfacer las especificaciones más exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {materialCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-[#ED1C24]/30 transition-all duration-700 group relative overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1C24]/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#ED1C24]/10 transition-colors" />
              
              <div className="flex items-center gap-6 mb-12">
                <div className="bg-[#1A1A1A] p-4 rounded-2xl text-[#ED1C24] shadow-xl group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight italic">{category.title}</h3>
                  <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, iIdx) => (
                  <div key={iIdx} className="bg-[#0F0F0F] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="text-white font-bold mb-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                        {item.name}
                    </div>
                    <div className="text-[#ED1C24] text-[10px] font-black uppercase tracking-widest mb-1">{item.spec}</div>
                    <div className="text-gray-500 text-[10px] font-medium">{item.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature bar for special materials */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
            <div className="flex items-center gap-4 text-gray-400 text-sm font-bold uppercase tracking-widest">
                <Shield className="text-[#ED1C24] w-5 h-5" />
                Materiales Especiales: Garlock, Juntas, Durostone, PVC, Teflon (PTFE).
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm italic">
                <Zap className="text-[#ED1C24] w-5 h-5 fill-[#ED1C24]" />
                Stock permanente para aplicaciones críticas
            </div>
        </motion.div>
      </div>
    </section>
  );
}
