import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import { Settings, Wrench, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* Clients Section (Social Proof) */}
      <section id="clientes" className="py-24 bg-[#F5F5F5] border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xs">
              <h2 className="text-[#1A1A1A] font-black uppercase tracking-[0.2em] text-[10px] mb-4">Empresas de confianza</h2>
              <p className="text-gray-400 font-bold text-sm tracking-tight leading-none">LÍDERES DE LA INDUSTRIA QUE CONFÍAN EN AMB.</p>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-3xl font-black tracking-tighter text-[#1A1A1A]">PEPSI</div>
              <div className="text-3xl font-black tracking-tighter text-[#1A1A1A]">ALEN</div>
              <div className="text-3xl font-black tracking-tighter text-[#1A1A1A]">BOKADOS</div>
              <div className="text-3xl font-black tracking-tighter text-[#1A1A1A]">VIAKABLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="group space-y-8 p-8 hover:bg-[#F5F5F5] transition-colors duration-500">
              <div className="w-20 h-20 bg-[#1A1A1A] text-white flex items-center justify-center group-hover:bg-[#ED1C24] transition-all duration-500">
                <Settings className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Fabricación <br /><span className="text-[#ED1C24]">CNC HAAS</span></h3>
              <p className="text-gray-500 leading-relaxed font-medium">Nuestros centros de maquinado certificados garantizan precisión micrométrica en cada molde de inyección.</p>
            </div>
            <div className="group space-y-8 p-8 hover:bg-[#F5F5F5] transition-colors duration-500 border-y md:border-y-0 md:border-x border-gray-100">
              <div className="w-20 h-20 bg-[#1A1A1A] text-white flex items-center justify-center group-hover:bg-[#ED1C24] transition-all duration-500">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Mantenimiento <br /><span className="text-[#ED1C24]">PREVENTIVO</span></h3>
              <p className="text-gray-500 leading-relaxed font-medium">Extendemos la vida útil de sus activos críticos mediante protocolos de mantenimiento estandarizados.</p>
            </div>
            <div className="group space-y-8 p-8 hover:bg-[#F5F5F5] transition-colors duration-500">
              <div className="w-20 h-20 bg-[#1A1A1A] text-white flex items-center justify-center group-hover:bg-[#ED1C24] transition-all duration-500">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Ingeniería <br /><span className="text-[#ED1C24]">DE CALIDAD</span></h3>
              <p className="text-gray-500 leading-relaxed font-medium">Control de calidad riguroso para cumplir con las exigencias de clientes corporativos globales.</p>
            </div>
          </div>
        </div>
      </section>

      <Technology />
      <Contact />
    </main>
  );
}
