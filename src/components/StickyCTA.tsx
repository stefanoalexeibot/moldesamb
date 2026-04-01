"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4"
        >
          {/* Main Pulse Button */}
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center gap-3 bg-[#ED1C24] text-white px-6 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-[0_0_30px_rgba(237,28,36,0.5)] hover:shadow-[0_0_50px_rgba(237,28,36,0.8)] transition-all duration-500 overflow-hidden"
          >
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full animate-ping bg-[#ED1C24]/40 -z-10" />
            
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline">Iniciar Proyecto</span>
            <span className="md:hidden">Cotizar</span>

            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Secondary social link (WhatsApp style?) */}
          <a 
            href="https://wa.me/5218112345678" // Placeholder WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366]/10 backdrop-blur-md border border-[#25D366]/30 p-3 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-xl"
          >
            <Phone className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
