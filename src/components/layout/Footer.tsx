"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: t("nav", "home"), href: "#inicio" },
        { name: t("nav", "services"), href: "#servicios" },
        { name: t("nav", "process"), href: "#proceso" },
        { name: t("nav", "showcase"), href: "#showcase" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: t("nav", "tech"), href: "#tecnologia" },
        { name: t("nav", "contact"), href: "#contacto" },
        { name: "Privacidad", href: "#" },
        { name: "Términos", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ED1C24]/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-[#ED1C24] p-1.5 transition-transform group-hover:rotate-12">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                AMB<span className="font-light">PRECISION</span>
              </span>
            </Link>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm mb-10">
              {t("footer", "desc")}
            </p>
            <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#ED1C24] hover:border-[#ED1C24]/50 transition-all duration-500">
                        <Icon className="w-4 h-4" />
                    </a>
                ))}
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 group/link"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ED1C24]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} Moldes AMB. {t("footer", "rights")}
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-black text-white/20 uppercase tracking-widest">
              Design by <span className="text-white/40 hover:text-[#ED1C24] transition-colors cursor-pointer">Antigravity AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background large text */}
      <div className="absolute -bottom-10 left-10 text-[180px] font-black text-white/[0.01] select-none pointer-events-none">
        AMB
      </div>
    </footer>
  );
}
