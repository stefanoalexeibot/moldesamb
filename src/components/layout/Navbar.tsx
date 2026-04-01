"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/components/LanguageContext";
import { Menu, X, Settings, Globe } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav", "home"), href: "#inicio" },
    { name: t("nav", "services"), href: "#servicios" },
    { name: t("nav", "process"), href: "#proceso" },
    { name: t("nav", "showcase"), href: "#showcase" },
    { name: t("nav", "tech"), href: "#tecnologia" },
    { name: t("nav", "contact"), href: "#contacto" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#ED1C24] p-1.5 transition-transform group-hover:rotate-12">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            AMB<span className="font-light">PRECISION</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ED1C24] bg-[#ED1C24]/10 px-3 py-1.5 border border-[#ED1C24]/30 hover:bg-[#ED1C24] hover:text-white transition-all duration-300"
          >
            <Globe className="w-3.5 h-3.5" />
            {language.toUpperCase()}
          </button>

          <Link
            href="#contacto"
            className="bg-[#ED1C24] text-white text-xs font-black px-6 py-2.5 uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            {t("nav", "quote")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ED1C24] bg-[#ED1C24]/10 px-3 py-1.5 border border-[#ED1C24]/30"
          >
            {language.toUpperCase()}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#0A0A0A] z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-white text-2xl font-black uppercase tracking-tighter hover:text-[#ED1C24]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button 
          onClick={() => {
            toggleLanguage();
            setIsMobileMenuOpen(false);
          }}
          className="text-[#ED1C24] font-black uppercase tracking-widest flex items-center gap-2"
        >
          <Globe className="w-5 h-5" />
          {language === "es" ? "ENGLISH" : "ESPAÑOL"}
        </button>
      </div>
    </nav>
  );
}
