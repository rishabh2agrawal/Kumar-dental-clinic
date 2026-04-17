"use client";

import { motion } from "framer-motion";
import GlassButton from "./GlassButton";
import { Phone } from "lucide-react";

const DENTAL_WALKTHROUGH_VIDEO =
  "/Indian_People_Video_Generation.mp4";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[88svh] sm:min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={DENTAL_WALKTHROUGH_VIDEO} type="video/mp4" />
      </video>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/55 via-slate-900/35 to-slate-900/45 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-12 xl:px-20 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col items-center pt-3 sm:pt-4"
        >
          {/* Headline */}
          <motion.h1
            variants={FADE_UP}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 md:mb-6"
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
            className="mt-2 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Painless, precise, and patient-first treatments
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={FADE_UP}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full"
          >
            <GlassButton variant="primary" href="#appointment" className="w-full sm:w-auto min-h-11">
              Book Appointment
            </GlassButton>
            <GlassButton variant="outline" href="tel:+919876543210" className="w-full sm:w-auto min-h-11">
              <Phone size={16} className="mr-2" />
              Call Now
            </GlassButton>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
