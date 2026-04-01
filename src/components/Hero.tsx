"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Settings, Shield, Zap } from "lucide-react";
import { MouseEvent } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const backgroundGradient = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(237, 28, 36, 0.15),
      transparent 80%
    )
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      id="inicio" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#050505] group"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 transition-opacity duration-1000 group-hover:opacity-30"
          src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-lathe-machine-working-on-a-metal-piece-40889-large.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      {/* Dynamic Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: backgroundGradient }}
      />
      
      {/* Mesh Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-[#ED1C24]/10 border border-[#ED1C24]/30 text-[#ED1C24] text-[10px] md:text-xs font-black px-4 py-2 uppercase tracking-[0.3em] mb-8 shadow-[0_0_20px_rgba(237,28,36,0.2)] backdrop-blur-md">
                {t("hero", "tag")}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter mb-10"
            >
              {language === "es" ? (
                <>PRECISIÓN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1C24] via-red-500 to-red-400 drop-shadow-[0_0_25px_rgba(237,28,36,0.4)]">
                  INDUSTRIAL
                </span></>
              ) : (
                <>INDUSTRIAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1C24] via-red-500 to-red-400 drop-shadow-[0_0_25px_rgba(237,28,36,0.4)]">
                  PRECISION
                </span></>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl font-light"
            >
              {t("hero", "subtitle")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <button className="bg-[#ED1C24] text-white px-10 py-5 text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-3 relative overflow-hidden group/btn shadow-[0_0_30px_rgba(237,28,36,0.3)] hover:shadow-[0_0_50px_rgba(237,28,36,0.6)] hover:bg-red-600">
                <span className="relative z-10">{t("hero", "cta_primary")}</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform relative z-10" />
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/40 hover:bg-white/10 text-white px-10 py-5 text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300">
                {t("hero", "cta_secondary")}
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/5 relative"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group cursor-default">
              <Settings className="text-[#ED1C24] w-8 h-8 group-hover:rotate-90 transition-transform duration-700" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter mix-blend-plus-lighter">{t("hero", "stat_axis")}</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest transition-colors">{t("hero", "stat_machined")}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group cursor-default">
              <Shield className="text-[#ED1C24] w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">{t("hero", "stat_quality")}</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest transition-colors">{t("hero", "stat_superior")}</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4 group cursor-default">
              <Zap className="text-[#ED1C24] w-8 h-8 group-hover:-translate-y-1 transition-transform duration-500" />
              <div>
                <div className="text-white font-black text-2xl tracking-tighter">{t("hero", "stat_reach")}</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest transition-colors">{t("hero", "stat_national")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative large text bg */}
      <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 text-[200px] md:text-[350px] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter mix-blend-overlay">
        HAAS
      </div>
    </section>
  );
}
