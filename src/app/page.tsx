"use client";

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
import Testimonials from "@/components/Testimonials";
import FloatingPart from "@/components/FloatingPart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <Stats />
      <ClientsCarousel />
      <Services />
      <Process />
      <Showcase />
      <Materials />
      <div className="relative">
          <FloatingPart />
          <Technology />
      </div>
      <Testimonials />
      <Contact />
      <StickyCTA />
    </main>
  );
}
