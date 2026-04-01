"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials", "quote1"),
      author: t("testimonials", "author1"),
      position: t("testimonials", "position1"),
      stars: 5
    },
    {
      quote: t("testimonials", "quote2"),
      author: t("testimonials", "author2"),
      position: t("testimonials", "position2"),
      stars: 5
    },
    {
      quote: t("testimonials", "quote3"),
      author: t("testimonials", "author3"),
      position: t("testimonials", "position3"),
      stars: 5
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
            {t("testimonials", "tag")}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter italic">
            {t("testimonials", "title")} <br />
            <span className="text-[#ED1C24] not-italic">{t("testimonials", "title_accent")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-[#111111] border border-white/5 rounded-[40px] relative group hover:border-[#ED1C24]/30 transition-all duration-700"
            >
              <Quote className="w-12 h-12 text-[#ED1C24]/20 absolute top-10 right-10 group-hover:text-[#ED1C24]/40 transition-colors" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(item.stars)].map((_, sIdx) => (
                  <Star key={sIdx} className="w-4 h-4 fill-[#ED1C24] text-[#ED1C24]" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10 italic">
                "{item.quote}"
              </p>

              <div className="mt-auto border-t border-white/5 pt-8">
                <div className="text-white font-black text-lg tracking-tighter">{item.author}</div>
                <div className="text-[#ED1C24] text-[10px] font-bold uppercase tracking-widest mt-1">{item.position}</div>
              </div>

              {/* Glowing hover effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#ED1C24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
