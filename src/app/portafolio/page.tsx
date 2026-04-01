"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type Category = "all" | "milling" | "turning" | "molds" | "edm";

interface Project {
  id: number;
  category: "milling" | "turning" | "molds" | "edm";
  image: string;
  material: string;
  tolerance: string;
}

// ── MOLDES 2 (9 fotos - proceso detallado / espejo) ──────────────────────────
const moldes2Folder = "/images/MOLDES 2";
const moldes2Files = [
  "WhatsApp Image 2026-04-01 at 10.28.50 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.51 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.51 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.51 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.51 AM (3).jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.52 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.52 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.52 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.28.52 AM (3).jpeg",
];

// ── MOLDES (18 fotos - galería de trabajos) ───────────────────────────────────
const moldesFolder = "/images/MOLDES";
const moldesFiles = [
  "WhatsApp Image 2026-04-01 at 10.32.17 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.17 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.17 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.18 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.18 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.18 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.19 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.19 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.19 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.19 AM (3).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.20 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.20 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.20 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.20 AM (3).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.21 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.21 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.21 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.32.21 AM (3).jpeg",
];

const materials = ["Acero P20", "H13 Templado", "Inoxidable 420", "Acero D2", "Aluminio 7075", "Acero P20", "H13 Templado", "Inoxidable 420"];
const tolerances = ["±0.005mm", "±0.002mm", "±0.008mm", "±0.005mm", "±0.01mm", "±0.003mm", "±0.007mm", "±0.005mm"];
const categories: Array<"milling" | "turning" | "molds" | "edm"> = ["molds", "molds", "edm", "milling", "molds", "molds", "edm", "molds", "milling", "molds", "molds", "edm", "milling", "molds", "molds", "edm", "milling", "molds"];
const categories2: Array<"milling" | "turning" | "molds" | "edm"> = ["molds", "edm", "molds", "milling", "molds", "molds", "edm", "milling", "molds"];

// ── MOLDES 3 (16 fotos) ──────────────────────────────────────────────────────
const moldes3Folder = "/images/MOLDES 3";
const moldes3Files = [
  "WhatsApp Image 2026-04-01 at 10.46.25 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.26 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.27 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.27 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.27 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.27 AM (3).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.27 AM (4).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.28 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.28 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.28 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.29 AM.jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.29 AM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.29 AM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.29 AM (3).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.29 AM (4).jpeg",
  "WhatsApp Image 2026-04-01 at 10.46.30 AM.jpeg",
];

const portfolioProjects: Project[] = [
  // Original 3 from originales folder
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
  // MOLDES folder (18 images)
  ...moldesFiles.map((file, i) => ({
    id: 10 + i,
    category: categories[i % categories.length],
    image: `${moldesFolder}/${file}`,
    material: materials[i % materials.length],
    tolerance: tolerances[i % tolerances.length],
  })),
  // MOLDES 2 folder (9 images - excluding the 2 used for Before/After)
  ...moldes2Files.slice(2).map((file, i) => ({
    id: 30 + i,
    category: categories2[i % categories2.length],
    image: `${moldes2Folder}/${file}`,
    material: materials[(i + 3) % materials.length],
    tolerance: tolerances[(i + 2) % tolerances.length],
  })),
  // MOLDES 3 folder (16 images)
  ...moldes3Files.map((file, i) => ({
    id: 50 + i,
    category: categories[i % categories.length],
    image: `${moldes3Folder}/${file}`,
    material: materials[(i + 1) % materials.length],
    tolerance: tolerances[(i + 3) % tolerances.length],
  })),
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

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#ED1C24] transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          {t("portfolio", "back_home")}
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic mb-4">
            {t("portfolio", "title")}{" "}
            <span className="text-[#ED1C24]">{t("portfolio", "title_accent")}</span>
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl">
            {t("portfolio", "subtitle")}
          </p>
        </div>

        {/* ── BEFORE & AFTER SLIDER ────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-1 bg-white/5" />
            <span className="text-[#ED1C24] text-[10px] font-black uppercase tracking-[0.4em]">
              Detallado Espejo · Antes &amp; Después
            </span>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/5">
            <BeforeAfterSlider
              beforeImage={`${moldesFolder}/WhatsApp Image 2026-04-01 at 10.32.20 AM.jpeg`}
              afterImage={`${moldesFolder}/WhatsApp Image 2026-04-01 at 10.32.18 AM.jpeg`}
              beforeLabel="Antes · Maquinado Inicial"
              afterLabel="Después · Acabado Espejo A1"
              className="h-[320px] md:h-[500px]"
            />
          </div>

          {/* Info badges below slider */}
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              Material: Acero P20
            </span>
            <span className="bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              Acabado: Espejo A1
            </span>
            <span className="bg-white/5 border border-white/10 text-[#ED1C24] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border-[#ED1C24]/20">
              Tolerancia: ±0.003mm
            </span>
          </div>
        </div>

        {/* ── GALLERY GRID ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] flex-1 bg-white/5" />
          <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
            Galería de Trabajos
          </span>
          <div className="h-[1px] flex-1 bg-white/5" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                filter === f.id
                  ? "bg-[#ED1C24] text-white shadow-[0_0_20px_rgba(237,28,36,0.4)]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-48 md:h-64 bg-[#111] rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#ED1C24]/30 transition-colors"
              >
                <img
                  src={project.image}
                  alt={`Molde ${project.id}`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Material chip */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[6px] group-hover:translate-y-0">
                  <span className="bg-black/80 text-[#ED1C24] text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded backdrop-blur-md">
                    {project.material}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 bg-white/10 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-white/30 text-lg italic">Próximamente más proyectos en esta categoría...</p>
          </div>
        )}
      </div>

      {/* ── LIGHTBOX MODAL ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white bg-white/5 hover:bg-[#ED1C24] p-3 rounded-full transition-all duration-300 group z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#111] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/3 h-[360px] md:h-[600px] bg-black">
                <img
                  src={selectedProject.image}
                  alt={`Molde – ${selectedProject.material}`}
                  className="w-full h-full object-contain"
                />
              </div>

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

                <div className="h-[1px] w-full bg-white/10 my-8" />

                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Pieza maquinada bajo estrictos estándares de calidad ISO 9001 en centros de maquinado Haas de alta velocidad.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
