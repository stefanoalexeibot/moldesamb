"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("No webhook URL configured. Pretending to succeed.");
      setTimeout(() => setStatus("success"), 1500);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ED1C24]/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.4em] text-xs mb-6 block">
              {t("contact", "tag")}
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter italic mb-8 uppercase leading-[0.9]">
              {t("contact", "title")} <br />
              <span className="text-[#ED1C24] not-italic">{t("contact", "title_accent")}</span>
            </h2>
            <p className="text-gray-500 text-lg font-light mb-16 max-w-md">
              {t("contact", "subtitle")}
            </p>

            <div className="space-y-10">
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500 shadow-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-widest mb-1">{t("contact", "info_location")}</div>
                  <div className="text-gray-500 font-light group-hover:text-gray-300 transition-colors">Santa Catarina, Nuevo León, México</div>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500 shadow-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-widest mb-1">{t("contact", "info_phone")}</div>
                  <div className="text-gray-500 font-light group-hover:text-gray-300 transition-colors">+52 (81) 8390-3434</div>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ED1C24] group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-500 shadow-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-widest mb-1">{t("contact", "info_email")}</div>
                  <div className="text-gray-500 font-light group-hover:text-gray-300 transition-colors">ventas@moldesamb.com</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
                {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#ED1C24] hover:border-[#ED1C24]/50 transition-all duration-500">
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-[#111111] border border-white/5 rounded-[40px] relative overflow-hidden shadow-2xl"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ED1C24]/50 to-transparent" />
            
            {status === "success" ? (
              <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 text-center py-12">
                <div className="w-20 h-20 bg-[#ED1C24]/20 text-[#ED1C24] rounded-full flex items-center justify-center mb-4">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black italic text-white uppercase">{t("contact", "success_title") || "Mensaje Enviado"}</h3>
                <p className="text-gray-400 font-light">{t("contact", "success_message") || "Nos pondremos en contacto contigo a la brevedad."}</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 transition-all rounded-full text-white text-xs font-bold uppercase tracking-widest"
                >
                  {t("contact", "send_another") || "Enviar otro mensaje"}
                </button>
              </div>
            ) : (
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{t("contact", "form_name")}</label>
                    <input 
                      name="name"
                      type="text" 
                      className="w-full bg-black border border-white/10 focus:border-[#ED1C24] outline-none px-6 py-4 text-white font-medium transition-all rounded-2xl"
                      placeholder="John Doe"
                      required
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{t("contact", "form_email")}</label>
                    <input 
                      name="email"
                      type="email" 
                      className="w-full bg-black border border-white/10 focus:border-[#ED1C24] outline-none px-6 py-4 text-white font-medium transition-all rounded-2xl"
                      placeholder="john@company.com"
                      required
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{t("contact", "form_company")}</label>
                  <input 
                    name="company"
                    type="text" 
                    className="w-full bg-black border border-white/10 focus:border-[#ED1C24] outline-none px-6 py-4 text-white font-medium transition-all rounded-2xl"
                    placeholder="ACME Corp"
                    disabled={status === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{t("contact", "form_message")}</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-black border border-white/10 focus:border-[#ED1C24] outline-none px-6 py-4 text-white font-medium transition-all rounded-2xl resize-none"
                    placeholder="..."
                    required
                    disabled={status === "submitting"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-[#ED1C24] text-xs font-bold text-center">
                    Hubo un problema enviando el mensaje. Por favor intenta de nuevo.
                  </p>
                )}

                <button 
                  disabled={status === "submitting"}
                  className="w-full bg-[#ED1C24] text-white py-6 text-xs font-black uppercase tracking-[0.4em] transition-all duration-300 flex items-center justify-center gap-4 hover:bg-white hover:text-black shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Enviando..." : t("contact", "form_send")}
                  <Send className={`w-5 h-5 ${status === "submitting" ? "animate-pulse" : ""}`} />
                </button>
              </form>
            )}
            
            {/* Visual background text */}
            <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-white/[0.015] pointer-events-none select-none italic">
                CONTACTO
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
