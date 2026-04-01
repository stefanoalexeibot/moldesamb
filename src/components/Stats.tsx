"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ value, label, suffix = "", prefix = "", decimals = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 border-r border-white/5 last:border-0 group">
      <div className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 flex items-baseline gap-1">
        <span className="text-[#ED1C24]">{prefix}</span>
        <span>{count.toFixed(decimals)}</span>
        <span className="text-xl md:text-2xl text-gray-500 font-light">{suffix}</span>
      </div>
      <div className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] group-hover:text-[#ED1C24] transition-colors duration-500">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0A0A0A] relative z-20 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#0F0F0F] border-x border-white/5">
          <Counter prefix="+" value="10" label="Años Experiencia" suffix="AÑOS" />
          <Counter prefix="+" value="500" label="Proyectos" suffix="PIEZAS" />
          <Counter prefix="±" value="0.005" label="Precisión" suffix="MM" decimals={3} />
          <Counter value="100" label="Garantía" suffix="%" />
        </div>
      </div>
    </section>
  );
}
