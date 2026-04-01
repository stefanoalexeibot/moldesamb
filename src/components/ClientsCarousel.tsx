"use client";

import { motion } from "framer-motion";

export default function ClientsCarousel() {
  const clients = [
    { name: "Pepsi", logo: "/images/originales/CLIENTES/Pepsi-Logo-2014-present.jpg" },
    { name: "Alen", logo: "/images/originales/CLIENTES/alen prov.png" },
    { name: "Bokados", logo: "/images/originales/CLIENTES/BOKADOS.png" },
    { name: "Viakable", logo: "/images/originales/CLIENTES/VIAKABLE.png" },
  ];

  return (
    <section id="clientes" className="py-12 md:py-20 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center md:text-left flex flex-col md:flex-row md:items-center gap-6">
        <h2 className="text-[#ED1C24] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Confianza corporativa</h2>
        <div className="h-[1px] bg-white/10 flex-1 hidden md:block"></div>
        <p className="text-gray-500 font-bold text-xs tracking-tight uppercase">Líderes que respaldan nuestra calidad</p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#080808] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#080808] to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, -1200] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="px-16 md:px-24 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-14 w-auto brightness-200 contrast-125 invert" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
