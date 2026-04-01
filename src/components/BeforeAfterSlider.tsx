"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes (Maquinado)",
  afterLabel = "Después (Espejo)",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const updateSliderPosition = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent | MouseEvent).clientX;
    }

    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100)); // Clamp between 0 and 100
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => isDragging && updateSliderPosition(e);
    const handleTouchMove = (e: TouchEvent) => isDragging && updateSliderPosition(e);

    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl cursor-ew-resize select-none bg-[#111] group ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        updateSliderPosition(e);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        updateSliderPosition(e);
      }}
    >
      {/* Background (Before Image) */}
      <img
        src={beforeImage}
        alt="Antes"
        className="w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      
      {/* Before Label */}
      <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/80 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded backdrop-blur-md">
          {beforeLabel}
        </span>
      </div>

      {/* Foreground (After Image) clipped by clip-path */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <img
          src={afterImage}
          alt="Después"
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        
        {/* After Label */}
        <div className="absolute top-4 right-4 z-10 transition-opacity duration-300">
           {sliderPosition < 80 && (
              <span className="bg-[#ED1C24] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded backdrop-blur-md">
                {afterLabel}
              </span>
           )}
        </div>
      </div>

      {/* Slider Center Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full flex items-center justify-center pointer-events-none">
          <ArrowLeftRight className="w-5 h-5 text-black" />
        </div>
      </div>
    </div>
  );
}
