"use client";

import { motion } from "framer-motion";
import GlassButton from "./GlassButton";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 pattern-dots" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight mb-8"
        >
          Ready for a <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Brighter Smile</span> & <br className="md:hidden" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Clearer Vision?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GlassButton className="px-10 py-5 text-lg shadow-[0_0_40px_rgba(37,189,179,0.4)] animate-[pulse_3s_ease-in-out_infinite]">
            Book Your Appointment Today
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
}
