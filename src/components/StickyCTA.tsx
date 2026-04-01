"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show after 500px of scroll
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 right-8 z-[60] flex items-center gap-4"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-[#ED1C24] hover:text-white transition-all duration-500 hover:scale-105"
          >
            <span>{t("general", "cta_start")}</span>
            <div className="bg-black/5 group-hover:bg-white/20 p-2 rounded-full transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          <motion.a
            href="https://wa.me/528183903434"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl relative group"
          >
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
            <MessageSquare className="w-8 h-8 relative z-10" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap">
                WhatsApp Directo
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
