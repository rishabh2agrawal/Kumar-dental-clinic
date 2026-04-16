"use client";

import { motion } from "framer-motion";
import { Stethoscope, Activity, ShieldCheck, Banknote } from "lucide-react";

const trustItems = [
  {
    icon: Stethoscope,
    title: "Experienced Doctors",
    desc: "A team of highly qualified specialists."
  },
  {
    icon: Activity,
    title: "Advanced Equipment",
    desc: "Modern technology for accurate diagnoses."
  },
  {
    icon: ShieldCheck,
    title: "Sterile Environment",
    desc: "Rigorous hygiene and safety protocols."
  },
  {
    icon: Banknote,
    title: "Affordable Care",
    desc: "Premium treatments at accessible prices."
  }
];

export default function TrustSection() {
  return (
    <section className="py-12 relative z-20 -mt-16 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,189,179,0.15)] group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <item.icon size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-sm text-text-main leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
