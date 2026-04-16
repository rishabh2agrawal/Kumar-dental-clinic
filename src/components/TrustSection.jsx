"use client";

import { motion } from "framer-motion";
import { HeartPulse, Cpu, ShieldCheck, Stethoscope } from "lucide-react";

const trustItems = [
  {
    icon: HeartPulse,
    title: "Painless Procedures",
    desc: "Gentle techniques and modern anaesthesia for a stress-free experience.",
  },
  {
    icon: Cpu,
    title: "Advanced Equipment",
    desc: "Digital X-rays, laser tools, and CAD/CAM technology.",
  },
  {
    icon: ShieldCheck,
    title: "Sterile Environment",
    desc: "Hospital-grade sterilization exceeding international standards.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Dentist",
    desc: "15+ years of clinical expertise across all dental specializations.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 relative z-20 -mt-12 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(37,189,179,0.12)] group"
          >
            <div className="w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <item.icon size={26} />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">{item.title}</h3>
            <p className="text-sm text-text-main leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
