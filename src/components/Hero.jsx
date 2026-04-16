"use client";

import { motion } from "framer-motion";
import GlassButton from "./GlassButton";
import { Phone } from "lucide-react";

const DENTAL_WALKTHROUGH_VIDEO =
  "/Indian_People_Video_Generation.mp4";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 14 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={DENTAL_WALKTHROUGH_VIDEO} type="video/mp4" />
      </video>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={FADE_UP}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wide"
          >
            Kumar Dental Care
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Advanced Dental Care for{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              a Healthier Smile
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={FADE_UP}
            className="mt-2 text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Painless, precise, and patient-first treatments
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={FADE_UP}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <GlassButton variant="primary" href="#appointment">
              Book Appointment
            </GlassButton>
            <GlassButton variant="outline" href="tel:+919876543210">
              <Phone size={16} className="mr-2" />
              Call Now
            </GlassButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
