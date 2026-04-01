"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

// Define project categories
type Category = "all" | "milling" | "turning" | "molds" | "edm";

interface Project {
  id: number;
  category: "milling" | "turning" | "molds" | "edm";
  image: string;
  material: string;
  tolerance: string;
  // Fallbacks if we want to expand
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    category: "molds",
    image: "/images/originales/M0004- AM441584.jpeg",
    material: "Inoxidable 420",
    tolerance: "±0.005mm",
  },
  {
    id: 2,
    category: "milling",
    image: "/images/originales/M0004- AM441575.jpeg",
    material: "Acero P20",
    tolerance: "±0.01mm",
  },
  {
    id: 3,
    category: "edm",
    image: "/images/originales/M0004- AM441583.jpeg",
    material: "H13 Templado",
    tolerance: "±0.002mm",
  },
  {
    id: 4,
    category: "turning",
    image: "/images/originales/ST-28.png", // Using ST-28 as placeholder for a turning part
    material: "Aluminio 6061",
    tolerance: "±0.01mm",
  }
];

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { id: Category; label: string }[] = [
    { id: "all", label: t("portfolio", "filter_all") },
    { id: "milling", label: t("portfolio", "filter_milling") },
    { id: "turning", label: t("portfolio", "filter_turning") },
    { id: "molds", label: t("portfolio", "filter_molds") },
    { id: "edm", label: t("portfolio", "filter_edm") },
  ];

  const filteredProjects = portfolioProjects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#ED1C24] transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            {t("portfolio", "back_home")}
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic mb-4">
            {t("portfolio", "title")} <span className="text-white/20 not-italic font-light">{t("portfolio", "title_accent")}</span>
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl">
            {t("portfolio", "subtitle")}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === f.id
                  ? "bg-[#ED1C24] text-white shadow-[0_0_20px_rgba(237,28,36,0.4)]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-80 bg-[#111] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#ED1C24]/30 transition-colors"
              >
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Meta Labels */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 text-[10px] font-black uppercase tracking-widest">
                  <span className="bg-black/80 text-[#ED1C24] px-3 py-1 rounded backdrop-blur-md border border-[#ED1C24]/20">
                     {project.material}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/10 p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[10px] group-hover:translate-y-0">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-white/30 text-lg italic">Próximamente más proyectos en esta categoría...</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white bg-white/5 hover:bg-[#ED1C24] p-3 rounded-full transition-all duration-300 group"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the modal content
              className="relative max-w-5xl w-full bg-[#111] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="w-full md:w-2/3 h-[400px] md:h-[600px] bg-black">
                <img
                  src={selectedProject.image}
                  alt={`Project ${selectedProject.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Meta Sidebar */}
              <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                <div className="mb-8">
                  <div className="text-[#ED1C24] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {t("portfolio", "material_label")}
                  </div>
                  <div className="text-2xl text-white font-light tracking-tight">
                    {selectedProject.material}
                  </div>
                </div>

                <div>
                  <div className="text-[#ED1C24] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    {t("portfolio", "tolerance_label")}
                  </div>
                  <div className="text-4xl text-white font-black italic tracking-tighter">
                    {selectedProject.tolerance}
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10 my-10" />
                
                <p className="text-gray-500 text-sm font-light">
                  Pieza maquinada bajo estrictos estándares de calidad ISO 9001 en centros de maquinado Haas.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
