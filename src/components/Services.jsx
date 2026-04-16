"use client";

import { motion } from "framer-motion";
import { Smile, Sparkles, Syringe, ShieldPlus, Scan, Stethoscope } from "lucide-react";

const SERVICES = [
  {
    icon: ShieldPlus,
    title: "Root Canal",
    desc: "Painless treatment to save and restore your natural teeth.",
  },
  {
    icon: Smile,
    title: "Teeth Whitening",
    desc: "Professional bleaching for a brighter, confident smile.",
  },
  {
    icon: Scan,
    title: "Dental Implants",
    desc: "Permanent, natural-looking solutions for missing teeth.",
  },
  {
    icon: Sparkles,
    title: "Braces & Aligners",
    desc: "Invisible aligners and modern braces for perfect alignment.",
  },
  {
    icon: Syringe,
    title: "Tooth Extraction",
    desc: "Safe, comfortable removal with minimal downtime.",
  },
  {
    icon: Stethoscope,
    title: "General Checkup",
    desc: "Comprehensive examination and preventive care plans.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
          Our Services
        </h2>
        <p className="text-text-main max-w-xl mx-auto">
          Comprehensive dental care tailored to your needs, all under one roof.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card p-7 rounded-2xl flex flex-col items-start transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(37,189,179,0.12)] group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <service.icon size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-1.5">{service.title}</h4>
            <p className="text-sm text-text-main leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
