"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function ClientsCarousel() {
  const { language } = useLanguage();
  const clients = [
    { name: "Pepsi", logo: "/images/originales/CLIENTES/Pepsi-Logo-2014-present.jpg" },
    { name: "Alen", logo: "/images/originales/CLIENTES/alen prov.png" },
    { name: "Bokados", logo: "/images/originales/CLIENTES/BOKADOS.png" },
    { name: "Viakable", logo: "/images/originales/CLIENTES/VIAKABLE.png" },
  ];

  return (
    <section id="clientes" className="py-12 md:py-20 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center md:text-left flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex flex-col gap-2">
            <h2 className="text-[#ED1C24] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            {language === "es" ? "Confianza corporativa" : "Corporate Trust"}
            </h2>
            <p className="text-white font-black text-xl md:text-2xl tracking-tighter italic uppercase">
            {language === "es" ? "Líderes que nos respaldan" : "Leaders who back us"}
            </p>
        </div>
        <div className="h-[1px] bg-white/10 flex-1 hidden md:block"></div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center py-4"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="px-8 md:px-16 flex items-center justify-center transition-all duration-700 cursor-pointer"
            >
              <div className="h-12 md:h-16 w-32 md:w-48 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center p-4 hover:border-[#ED1C24]/30 hover:bg-white/10 transition-all group/logo">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain filter brightness-125 group-hover:brightness-150 transition-all" 
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
