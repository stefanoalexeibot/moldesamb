"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.18 AM.jpeg",
  "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.27 AM (3).jpeg",
  "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.19 AM.jpeg",
  "/images/MOLDES 2/WhatsApp Image 2026-04-01 at 10.28.51 AM (1).jpeg",
  "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.28 AM.jpeg",
  "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.17 AM (1).jpeg",
  "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.26 AM.jpeg",
  "/images/MOLDES 2/WhatsApp Image 2026-04-01 at 10.28.52 AM (2).jpeg",
  "/images/MOLDES 3/WhatsApp Image 2026-04-01 at 10.46.29 AM (2).jpeg",
  "/images/MOLDES/WhatsApp Image 2026-04-01 at 10.32.20 AM (1).jpeg",
];

export default function PhotoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Row 1 scrolls left, row 2 scrolls right — parallax effect tied to page scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Double images for seamless repetition
  const doubled = [...images, ...images];

  return (
    <section ref={ref} className="py-16 bg-[#050505] overflow-hidden">
      {/* Label */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-[#ED1C24]" />
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em]">
            Trabajos Reales · Precisión Documentada
          </span>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <motion.div style={{ x: x1 }} className="flex gap-4 mb-4 will-change-transform">
        {doubled.map((src, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 w-[260px] h-[180px] rounded-2xl overflow-hidden border border-white/5 bg-[#111]"
          >
            <img
              src={src}
              alt={`Molde ${i + 1}`}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>

      {/* Row 2 — scrolls right (reversed order) */}
      <motion.div style={{ x: x2 }} className="flex gap-4 will-change-transform">
        {[...doubled].reverse().map((src, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 w-[260px] h-[180px] rounded-2xl overflow-hidden border border-white/5 bg-[#111]"
          >
            <img
              src={src}
              alt={`Molde rev ${i + 1}`}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
