"use client";

import { motion } from "framer-motion";
import { MoveRight, Cpu, Layout, Settings, Wrench } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services", "mold_design"),
      desc: t("services", "mold_design_desc"),
      icon: <Layout className="w-10 h-10" />,
      image: "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.17 AM.jpeg",
      features: ["CAD / CAM / CAE", "Simulación de llenado", "Optimización de ciclos"]
    },
    {
      title: t("services", "maintenance"),
      desc: t("services", "maintenance_desc"),
      icon: <Settings className="w-10 h-10" />,
      image: "/images/MOLDES 2/WhatsApp Image 2026-04-01 at 10.28.50 AM.jpeg",
      features: ["Ajuste de cavidades", "Limpieza ultrasónica", "Reparación de sistemas"]
    },
    {
      title: t("services", "mold_repair"),
      desc: t("services", "mold_repair_desc"),
      icon: <Wrench className="w-10 h-10" />,
      image: "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.21 AM.jpeg",
      features: ["Soldadura láser", "Reconstrucción", "Pulido espejo"]
    },
    {
      title: t("services", "precision_parts"),
      desc: t("services", "precision_parts_desc"),
      icon: <Cpu className="w-10 h-10" />,
      image: "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.29 AM.jpeg",
      features: ["Alta precisión", "Lotes técnicos", "Prototipado rápido"]
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
            {t("services", "tag")}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic">
            {t("services", "title")} <br />
            <span className="text-white/20 not-italic font-light">{t("services", "title_accent")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden rounded-[40px] bg-[#0A0A0A] border border-white/5 active:scale-95 transition-transform"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              </div>

              <div className="relative z-10 p-12 h-full flex flex-col">
                <div className="text-[#ED1C24] mb-8 bg-black/40 w-fit p-4 rounded-2xl backdrop-blur-xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-4 uppercase">{service.title}</h3>
                <p className="text-gray-400 font-light mb-8 max-w-xs">{service.desc}</p>
                
                <div className="space-y-4 mt-auto">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-white/60 text-xs font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                  <span>{t("hero", "cta_secondary")}</span>
                  <MoveRight className="w-5 h-5 text-[#ED1C24]" />
                </div>
              </div>

              {/* Number decoration */}
              <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.03] select-none italic">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
