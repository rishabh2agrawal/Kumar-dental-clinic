"use client";

import { motion } from "framer-motion";
import GlassButton from "./GlassButton";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Abstract Image Placeholder (Glass Box) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden glass-dark p-4 group">
            <div className="absolute inset-4 rounded-[1.5rem] bg-gradient-to-tr from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700" />
              <div className="relative z-10 text-center select-none text-primary/50 text-xl font-bold tracking-widest uppercase">
                Clinic Interior / Doctors
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-8 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
              Modern Care, <br/> Compassionate Approach.
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <p className="text-lg text-text-main leading-relaxed">
            Founded on the principles of trust and clinical excellence, Kumar Dental & Eye Care offers a sanctuary for health. Our multidisciplinary approach ensures that every aspect of your vision and smile is treated with unmatched precision and warmth.
          </p>
          
          <ul className="space-y-3 mb-6">
            {["20+ Years of Combined Experience", "100% Painless Laser Treatments", "Award-winning Patient Support"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base">
                <div className="w-6 h-6 rounded-full glass flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <GlassButton variant="secondary">Learn More About Us</GlassButton>
        </motion.div>
      </div>
    </section>
  );
}
