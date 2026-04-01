"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function Showcase() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("showcase", "project1_title"),
      category: "Acero P20 · Espejo A1",
      image: "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.18 AM.jpeg",
      spec: t("showcase", "project1_spec")
    },
    {
      title: t("showcase", "project2_title"),
      category: "H13 Templado ±0.002mm",
      image: "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.19 AM.jpeg",
      spec: t("showcase", "project2_spec")
    },
    {
      title: t("showcase", "project3_title"),
      category: "Inoxidable 420",
      image: "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.28 AM (2).jpeg",
      spec: t("showcase", "project3_spec")
    },
    {
      title: t("showcase", "project4_title"),
      category: "Aluminio 6061-T6",
      image: "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.27 AM (2).jpeg",
      spec: t("showcase", "project4_spec")
    }
  ];

  return (
    <section id="showcase" className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
              {t("showcase", "tag")}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">
              {t("showcase", "title")} <br />
              <span className="text-white/20 not-italic font-light">{t("showcase", "title_accent")}</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-light max-w-sm">
            {t("showcase", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <TiltCard key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden rounded-[40px] bg-[#1A1A1A] border border-white/5 shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="text-[#ED1C24] text-[10px] font-black uppercase tracking-[0.3em] mb-3">{project.category}</div>
                  <h3 className="text-3xl font-black text-white italic tracking-tighter mb-4 leading-none">{project.title}</h3>
                  
                  <div className="h-[2px] w-12 group-hover:w-full bg-[#ED1C24] transition-all duration-700 mb-6" />
                  
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {project.spec}
                  </p>
                </div>
                
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-[#ED1C24]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link href="/portafolio" className="text-white/40 hover:text-white text-xs font-black uppercase tracking-[0.4em] transition-colors flex items-center gap-4 mx-auto group w-max">
                <div className="h-[1px] w-12 bg-white/10 group-hover:bg-[#ED1C24] transition-colors" />
                {t("showcase", "view_all")}
                <div className="h-[1px] w-12 bg-white/10 group-hover:bg-[#ED1C24] transition-colors" />
            </Link>
        </div>
      </div>
    </section>
  );
}
