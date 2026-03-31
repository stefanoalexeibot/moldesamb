import { Settings, Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-haas-dark text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-haas-red p-1.5">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                AMB<span className="font-light text-haas-gray">PRECISION</span>
              </span>
            </div>
            <p className="text-haas-gray/60 leading-relaxed max-w-xs">
              Líderes en ingeniería de moldes de precisión. 
              Más de 20 años impulsando la industria de inyección de plástico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-haas-red transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-haas-red transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-haas-red">Navegación</h4>
            <ul className="space-y-4 text-haas-gray/60 font-medium">
              <li><Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="#clientes" className="hover:text-white transition-colors">Clientes</Link></li>
              <li><Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="#tecnologia" className="hover:text-white transition-colors">Tecnología Haas</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-haas-red">Servicios</h4>
            <ul className="space-y-4 text-haas-gray/60 font-medium">
              <li>Fabricación de Moldes</li>
              <li>Mantenimiento Preventivo</li>
              <li>Ingeniería Reversa</li>
              <li>Asesoría Técnica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-haas-red">Contacto</h4>
            <ul className="space-y-6 text-haas-gray/60 font-medium">
              <li className="flex gap-4">
                <MapPin className="text-haas-red shrink-0" size={20} />
                <span>Monterrey, Nuevo León, México</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-haas-red shrink-0" size={20} />
                <span>+52 (81) 0000 0000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-haas-red shrink-0" size={20} />
                <span>ventas@moldesamb.mx</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-haas-gray/40">
          <p>© 2024 AMB Precision Molds (Moldes AMB). Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
