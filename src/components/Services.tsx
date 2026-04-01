"use client";

import { motion } from "framer-motion";
import { Settings, PenTool, Wrench, Shield, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services", "mold_design"),
      desc: t("services", "mold_design_desc"),
      icon: <PenTool className="w-10 h-10" />,
      features: ["CAD / CAM / CAE", "Simulación de llenado", "Optimización de ciclos"]
    },
    {
      title: t("services", "maintenance"),
      desc: t("services", "maintenance_desc"),
      icon: <Wrench className="w-10 h-10" />,
      features: ["Ajuste de cavidades", "Limpieza ultrasónica", "Reparación de sistemas"]
    },
    {
      title: t("services", "precision_parts"),
      desc: t("services", "precision_parts_desc"),
      icon: <Settings className="w-10 h-10" />,
      features: ["Alta precisión", "Lotes técnicos", "Prototipado rápido"]
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
              {t("services", "tag")}
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic">
              {t("services", "title")} <br />
              <span className="text-[#ED1C24] not-italic">{t("services", "title_accent")}</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-light max-w-sm border-l border-[#ED1C24]/30 pl-8">
            Soluciones integrales para la industria automotriz, médica y de consumo masivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-12 bg-[#111111] border border-white/5 hover:border-[#ED1C24]/30 transition-all duration-700 overflow-hidden rounded-[40px]"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED1C24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="text-[#ED1C24] mb-8 group-hover:scale-110 transition-transform duration-500 inline-block p-4 bg-black rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-6">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                      <Shield className="w-4 h-4 text-[#ED1C24]/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 text-8xl font-black text-white/[0.02] group-hover:text-[#ED1C24]/[0.05] transition-colors duration-700 pointer-events-none select-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
