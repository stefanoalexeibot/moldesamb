"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-xs mb-6 block">Hablemos de su proyecto</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 italic">
              CONTACTO <span className="text-gray-100 font-light not-italic">DIRECTO</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-medium">
              ¿Tiene un requerimiento especial? Nuestro equipo de ingeniería está listo para asesorarlo en la fabricación o mantenimiento de sus moldes.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-haas-red/10 flex items-center justify-center text-haas-red shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-haas-dark mb-1">Ubicación</h4>
                  <p className="text-gray-500 font-medium">Parque Industrial, Monterrey, NL, México</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-haas-red/10 flex items-center justify-center text-haas-red shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-haas-dark mb-1">Teléfono</h4>
                  <p className="text-gray-500 font-medium">+52 (81) 0000 0000</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-haas-red/10 flex items-center justify-center text-haas-red shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-haas-dark mb-1">Email</h4>
                  <p className="text-gray-500 font-medium">ventas@moldesamb.mx</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-haas-gray p-10 border border-gray-100 relative"
          >
            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-haas-dark mb-2 block">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-white border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-haas-red transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-haas-dark mb-2 block">Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Industrias Pepsi"
                    className="w-full bg-white border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-haas-red transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-haas-dark mb-2 block">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="juan@empresa.com"
                  className="w-full bg-white border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-haas-red transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-haas-dark mb-2 block">Mensaje / Requerimiento</label>
                <textarea 
                  rows={4}
                  placeholder="Describa brevemente su proyecto..."
                  className="w-full bg-white border border-gray-200 px-4 py-4 text-sm focus:outline-none focus:border-haas-red transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-haas-dark text-white py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-haas-red transition-all flex items-center justify-center gap-3 group"
              >
                Enviar Mensaje
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            {/* Accent decoration */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-haas-red/5 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
