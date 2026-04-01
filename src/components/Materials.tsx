"use client";

import { motion } from "framer-motion";
import { Package, Shield, Layers, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Materials() {
  const { t } = useLanguage();

  const materialGroups = [
    {
      category: "Metales Industriales",
      items: [
        { name: "Acero P20 / H13", spec: "Moldes de inyección y alta temperatura" },
        { name: "Acero Inoxidable 420", spec: "Resistencia a corrosión y grado médico" },
        { name: "Aluminio 6061-T6", spec: "Prototipado rápido y herramentales ligeros" }
      ],
      icon: <Layers className="w-6 h-6" />
    },
    {
      category: "Polímeros de Ingeniería",
      items: [
        { name: "Nylon / Delrin (Acetal)", spec: "Engranes y bujes de precisión" },
        { name: "PVC / Policarbonato", spec: "Componentes transparentes y estructurales" },
        { name: "Durostone / G10", spec: "Aislamiento térmico y eléctrico" }
      ],
      icon: <Package className="w-6 h-6" />
    },
    {
      category: t("materials", "special"),
      items: [
        { name: "Juntas y Empaques", spec: "Nitrilos, Vitón y Silicones grado alimenticio" },
        { name: "Bronce Fosforado", spec: "Insertos antidesgaste y conductores" }
      ],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
              {t("materials", "tag")}
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic">
              {t("materials", "title")}
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-light max-w-sm border-l border-[#ED1C24]/30 pl-8">
            {t("materials", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {materialGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-[#0A0A0A] border border-white/5 rounded-[40px] hover:border-[#ED1C24]/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-black rounded-2xl text-[#ED1C24] group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {group.icon}
                </div>
                <h3 className="text-xl font-black text-white italic tracking-tighter">{group.category}</h3>
              </div>

              <div className="space-y-8">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="relative pl-6">
                    <div className="absolute left-0 top-2 w-[4px] h-[4px] rounded-full bg-[#ED1C24]" />
                    <div className="text-white font-bold text-sm mb-1 uppercase tracking-wider">{item.name}</div>
                    <div className="text-gray-500 text-xs font-medium leading-relaxed">{item.spec}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 py-8 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#ED1C24]/30 flex items-center justify-center">
                    <Shield className="text-[#ED1C24] w-6 h-6" />
                </div>
                <div className="text-white/80 font-bold uppercase tracking-widest text-xs">Certificados de calidad de origen</div>
            </div>
            <div className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
                {t("materials", "stock")}
            </div>
        </div>
      </div>
    </section>
  );
}
