import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientsCarousel from "@/components/ClientsCarousel";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Materials from "@/components/Materials";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import StickyCTA from "@/components/StickyCTA";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#ED1C24] selection:text-white">
      <CustomCursor />
      <Hero />
      <Stats />
      <ClientsCarousel />
      <Services />
      <Process />
      <Showcase />
      <Materials />
      <Technology />
      <Contact />
      <StickyCTA />
    </main>
  );
}
