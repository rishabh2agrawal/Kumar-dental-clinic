"use client";

import { motion } from "framer-motion";
import {
  Smile,
  Sparkles,
  Syringe,
  ShieldPlus,
  Scan,
  Stethoscope,
  Crown,
  HeartPulse,
} from "lucide-react";

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
  {
    icon: Crown,
    title: "Dental Crowns",
    desc: "Natural-looking crowns that restore strength, function, and aesthetics.",
  },
  {
    icon: HeartPulse,
    title: "Gum Care",
    desc: "Early gum treatment and deep cleaning to protect long-term oral health.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 lg:py-28 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-center mb-12 md:mb-14 max-w-4xl mx-auto"
      >
        <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
          Personalized Care
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 md:mb-5 leading-tight">
          Your Smile, Your Way: Trusted Dental Services for Every Need
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          We provide complete dental care for families and individuals, from routine checkups to
          advanced cosmetic and restorative treatments. Every plan is tailored to your goals,
          comfort, and long-term oral health.
        </p>
        <p className="mt-4 text-slate-700 font-semibold">Explore our featured services:</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute inset-x-0 top-20 -z-10 pointer-events-none"
      >
        <div className="mx-auto h-56 w-[85%] rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
            whileHover={{ y: -6 }}
            className="glass-card h-full p-6 md:p-7 rounded-2xl flex flex-col items-start transition-all duration-500 ease-in-out hover:shadow-[0_16px_36px_rgba(37,189,179,0.16)] group relative overflow-hidden"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-primary/10 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
            />

            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <service.icon size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{service.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
