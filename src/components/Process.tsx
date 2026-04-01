"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, Cpu, Layout, FileText, Settings, Rocket } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("process", "step1_title"),
      desc: t("process", "step1_desc"),
      icon: <Search className="w-8 h-8" />,
      color: "#ED1C24"
    },
    {
      title: t("process", "step2_title"),
      desc: t("process", "step2_desc"),
      icon: <Layout className="w-8 h-8" />,
      color: "#333333"
    },
    {
      title: t("process", "step3_title"),
      desc: t("process", "step3_desc"),
      icon: <Cpu className="w-8 h-8" />,
      color: "#ED1C24"
    },
    {
      title: t("process", "step4_title"),
      desc: t("process", "step4_desc"),
      icon: <CheckCircle className="w-8 h-8" />,
      color: "#333333"
    }
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
            {t("process", "tag")}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic">
            {t("process", "title")} <br />
            <span className="text-white/20 not-italic font-light">{t("process", "title_accent")}</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-[120px] h-[120px] rounded-full bg-[#111111] border border-white/5 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#ED1C24]/50 transition-all duration-500 overflow-hidden shadow-2xl">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-[#ED1C24] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <div className="text-white group-hover:text-[#ED1C24] transition-colors duration-500">
                    {step.icon}
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-[10px] font-black text-[#ED1C24] shadow-lg">
                    0{idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-black text-white italic tracking-tighter mb-4 group-hover:text-[#ED1C24] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-6 px-10 py-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl group hover:border-[#ED1C24]/30 transition-all">
                <Rocket className="w-10 h-10 text-[#ED1C24] animate-pulse" />
                <div className="text-left">
                    <div className="text-white font-black italic tracking-tighter text-2xl group-hover:text-white transition-colors">Entrega puntual garantizada</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest group-hover:text-gray-300 transition-colors">Cumplimiento de cronogramas críticos</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
