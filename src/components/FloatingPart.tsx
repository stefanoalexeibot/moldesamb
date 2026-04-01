"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Settings } from "lucide-react";

export default function FloatingPart() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[600px] flex items-center justify-center perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-80 h-80 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A] border-2 border-white/10 rounded-[60px] shadow-[0_0_100px_rgba(237,28,36,0.1)] flex items-center justify-center group"
      >
        {/* Inner layers for depth */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-4 border-2 border-[#ED1C24]/30 rounded-[45px] flex items-center justify-center overflow-hidden"
        >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
             <Settings className="w-32 h-32 text-[#ED1C24] animate-spin-slow group-hover:scale-125 transition-transform duration-1000" />
        </div>

        <div 
          style={{ transform: "translateZ(100px)" }}
          className="absolute inset-10 border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-[30px]"
        />

        <div 
          style={{ transform: "translateZ(150px)" }}
          className="absolute -top-4 -right-4 w-20 h-20 bg-[#ED1C24] rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-2xl rotate-12"
        >
            PREMIUM
        </div>

        {/* Glow behind */}
        <div className="absolute inset-0 bg-[#ED1C24]/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </motion.div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes spin-slow {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
