"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function ClientsCarousel() {
  const { language } = useLanguage();
  const clients = [
    { name: "Nemak", logo: "/images/originales/CLIENTES/nemak-logo-png_seeklogo-359090.png" },
    { name: "LEGO", logo: "/images/originales/CLIENTES/LEGO-Logo.png" },
    { name: "Whirlpool", logo: "/images/originales/CLIENTES/whirlpool logo.png" },
    { name: "Metalsa", logo: "/images/originales/CLIENTES/metalsa-logo.webp" },
    { name: "Mattel", logo: "/images/originales/CLIENTES/Mattel-Logo.png" },
    { name: "Carrier", logo: "/images/originales/CLIENTES/Carrier-Logo.jpg" },
    { name: "Schneider Electric", logo: "/images/originales/CLIENTES/Schneider_Electric-Logo.wine.png" },
    { name: "ALPLA", logo: "/images/originales/CLIENTES/alpla-group8383.logowik.com.webp" },
    { name: "Arca Continental", logo: "/images/originales/CLIENTES/arca contintental logo.png" },
    { name: "Berry Global", logo: "/images/originales/CLIENTES/berry global logo.png" },
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
          className="flex whitespace-nowrap items-center py-6"
          animate={{ x: [0, -2000] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="px-6 md:px-10 flex items-center justify-center transition-all duration-700 cursor-pointer"
            >
              <div className="h-20 md:h-28 w-40 md:w-64 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl flex items-center justify-center p-4 md:p-8 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 group/logo">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110 drop-shadow-md" 
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
