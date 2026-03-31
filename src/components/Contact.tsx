"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-[#1A1A1A] p-8 md:p-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED1C24]/10 -rotate-45 translate-x-32 -translate-y-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">
                LISTO PARA <br />
                <span className="text-[#ED1C24] not-italic">COMENZAR?</span>
              </h2>
              <p className="text-gray-500 text-lg mb-12 max-w-sm">
                Inicie su proyecto de manufactura con el respaldo de ingeniería AMB. 
                Cotizaciones sin compromiso en menos de 24 horas.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Teléfono</div>
                    <div className="text-white font-bold">+52 (81) 1234 5678</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Email</div>
                    <div className="text-white font-bold">contacto@moldesamb.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Planta</div>
                    <div className="text-white font-bold text-sm">García, Nuevo León, México</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40">Nombre Completo</label>
                    <input type="text" className="w-full bg-[#F5F5F5] border-none p-4 text-sm focus:ring-2 focus:ring-[#ED1C24] outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40">Correo Corporativo</label>
                    <input type="email" className="w-full bg-[#F5F5F5] border-none p-4 text-sm focus:ring-2 focus:ring-[#ED1C24] outline-none" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40">Empresa / Proyecto</label>
                  <input type="text" className="w-full bg-[#F5F5F5] border-none p-4 text-sm focus:ring-2 focus:ring-[#ED1C24] outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40">Detalles del Requerimiento</label>
                  <textarea rows={4} className="w-full bg-[#F5F5F5] border-none p-4 text-sm focus:ring-2 focus:ring-[#ED1C24] outline-none resize-none" required />
                </div>
                <button type="submit" className="w-full bg-[#ED1C24] text-white py-5 text-sm font-black uppercase tracking-widest hover:bg-[#1A1A1A] transition-colors duration-300">
                  Enviar Solicitud
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
