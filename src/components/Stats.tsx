"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

const AnimatedCounter = ({ value, label, suffix = "", delay = 0 }: { value: number, label: string, suffix?: string, delay?: number }) => {
  const count = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { 
        duration: 2, 
        delay, 
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            if (value % 1 !== 0) {
              ref.current.textContent = latest.toFixed(3);
            } else {
              ref.current.textContent = Math.round(latest).toString();
            }
          }
        }
      });
      return animation.stop;
    }
  }, [isInView, value, delay, count]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl group hover:border-[#ED1C24]/50 transition-all duration-500">
      <div className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500 flex items-baseline">
        <span ref={ref}>0</span>
        <span className="text-[#ED1C24] text-3xl not-italic ml-1">{suffix}</span>
      </div>
      <div className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-center">{label}</div>
    </div>
  );
};

export default function Stats() {
  const { t } = useLanguage();
  
  const stats = [
    { value: 10, label: t("stats", "years"), suffix: "+" },
    { value: 500, label: t("stats", "projects"), suffix: "+" },
    { value: 0.005, label: t("stats", "precision"), suffix: t("stats", "precision_suffix") },
    { value: 100, label: t("stats", "guarantee"), suffix: "%" },
  ];

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <AnimatedCounter 
                value={stat.value} 
                label={stat.label} 
                suffix={stat.suffix} 
                delay={idx * 0.1} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
