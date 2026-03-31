import Link from "next/link";
import { Settings, Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/5 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#ED1C24] p-1.5 transition-transform group-hover:rotate-12">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                AMB<span className="font-light">PRECISION</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Líderes en ingeniería de moldes de inyección con tecnología Haas CNC de 4 ejes. 
              Calidad y precisión para la industria global.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#ED1C24] transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#ED1C24] transition-colors">
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#ED1C24]">Navegación</h4>
            <ul className="space-y-4">
              <li><Link href="#inicio" className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Inicio</Link></li>
              <li><Link href="#clientes" className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Clientes</Link></li>
              <li><Link href="#servicios" className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Servicios</Link></li>
              <li><Link href="#tecnologia" className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Tecnología</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#ED1C24]">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-400 group">
                <Phone size={18} className="text-[#ED1C24]" />
                <span className="text-sm font-medium group-hover:text-white transition-colors">+52 (81) 1234 5678</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <Mail size={18} className="text-[#ED1C24]" />
                <span className="text-sm font-medium group-hover:text-white transition-colors">contacto@moldesamb.com</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <MapPin size={18} className="text-[#ED1C24]" />
                <span className="text-sm font-medium group-hover:text-white transition-colors">García, N.L., México</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#ED1C24]">Boletín</h4>
            <p className="text-gray-500 text-xs mb-6">Reciba actualizaciones sobre nuestra capacidad instalada y proyectos.</p>
            <div className="flex bg-white/5 p-1 border border-white/10">
              <input type="email" placeholder="Email corporate" className="bg-transparent border-none p-3 text-xs w-full outline-none" />
              <button className="bg-[#ED1C24] px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            © 2026 MOLDES AMB. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest">Privacidad</Link>
            <Link href="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-widest">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
