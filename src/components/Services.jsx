"use client";

import { motion } from "framer-motion";
import { Smile, Sparkles, Syringe, Eye, Glasses, ZoomIn } from "lucide-react";

const DENTAL_SERVICES = [
  { icon: Smile, title: "Teeth Whitening", desc: "Professional bleaching for a brighter, glowing smile." },
  { icon: Syringe, title: "Painless Extraction", desc: "Safe and comfortable tooth removal procedures." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers and bonding for perfect aesthetics." },
];

const EYE_SERVICES = [
  { icon: Eye, title: "Cataract Surgery", desc: "Advanced laser surgery for clear vision." },
  { icon: Glasses, title: "Vision Correction", desc: "LASIK and customized prescription glasses." },
  { icon: ZoomIn, title: "Routine Checkups", desc: "Comprehensive eye exams for all ages." },
];

const ServiceCard = ({ icon: Icon, title, desc, delay, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8 }}
    className="glass-card p-6 rounded-2xl flex flex-col items-start transition-all duration-300 hover:shadow-[0_10px_40px_rgba(37,189,179,0.15)] relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 transition-opacity duration-500 rounded-full group-hover:opacity-40 ${theme === 'dental' ? 'bg-primary' : 'bg-secondary'}`} />
    
    <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-colors shadow-sm ${theme === 'dental' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-sm text-text-main line-clamp-2">{desc}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-4">Our Services</h2>
        <p className="text-lg text-text-main max-w-2xl mx-auto">
          Comprehensive, high-quality care tailored perfectly to your dental and vision needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {/* Dental Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6 px-2">
            <h3 className="text-2xl font-bold text-primary">Dental Care</h3>
            <div className="h-[2px] flex-1 bg-primary/20 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DENTAL_SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} theme="dental" />
            ))}
          </div>
        </div>

        {/* Eye Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6 px-2">
            <div className="h-[2px] flex-1 bg-secondary/20 rounded-full hidden sm:block" />
            <h3 className="text-2xl font-bold text-secondary">Eye Care</h3>
            <div className="h-[2px] flex-1 bg-secondary/20 rounded-full sm:hidden" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EYE_SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} theme="eye" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
