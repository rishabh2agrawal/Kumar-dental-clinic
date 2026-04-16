"use client";

import { motion } from "framer-motion";
import GlassButton from "./GlassButton";
import AnimatedLogoMark from "./AnimatedLogoMark";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-center"
        >
          <AnimatedLogoMark />

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-block mb-4 px-4 py-1.5 rounded-full glass-dark text-primary text-sm font-semibold tracking-wide shadow-sm">
            Welcome to Kumar Clinic
          </motion.div>
          
          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight leading-tight mb-6"
          >
            Complete Dental & Eye Care <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Under One Roof
            </span>
          </motion.h1>

          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            className="mt-4 text-lg md:text-xl text-text-main max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience premium medical care with state-of-the-art technology. 
            We bring healthy smiles and clear vision to you and your family.
          </motion.p>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <GlassButton variant="primary">Book Appointment</GlassButton>
            <GlassButton variant="secondary">Explore Services</GlassButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
