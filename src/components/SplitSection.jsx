"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SplitSection() {
  const [hovered, setHovered] = useState(null); // 'dental' | 'eye' | null

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">Two Focuses. One Standard.</h2>
        <p className="text-text-main max-w-xl mx-auto">
          We bring specialized expertise in both fields, ensuring you receive focused, premium care regardless of why you visit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row h-[500px] md:h-[600px] rounded-3xl overflow-hidden glass shadow-2xl relative">
        
        {/* Dental Side */}
        <motion.div
          onMouseEnter={() => setHovered('dental')}
          onMouseLeave={() => setHovered(null)}
          animate={{
            flex: hovered === 'dental' ? 1.2 : hovered === 'eye' ? 0.8 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex-1 bg-gradient-to-br from-primary/10 to-primary/5 border-b md:border-b-0 md:border-r border-white/40 flex items-center justify-center p-8 overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 text-center">
            <motion.div 
              animate={{ scale: hovered === 'dental' ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20.5v-2a2 2 0 1 0-4 0v2"/><path d="M18 20.5v-2a2 2 0 1 0-4 0v2"/><path d="m20.5 10-1.5-1.5a2.12 2.12 0 0 0-3 0L12 12l-4-3.5a2.12 2.12 0 0 0-3 0L3.5 10"/><path d="M3 12a9 9 0 0 0 18 0"/></svg>
            </motion.div>
            <h3 className="text-3xl font-bold text-slate-800 mb-3">Dental Precision</h3>
            <p className="text-text-main max-w-xs mx-auto drop-shadow-sm opacity-90 transition-opacity group-hover:opacity-100">
              Restoring smiles with aesthetic care, implants, and painless laser treatments.
            </p>
          </div>
        </motion.div>

        {/* Eye Side */}
        <motion.div
          onMouseEnter={() => setHovered('eye')}
          onMouseLeave={() => setHovered(null)}
          animate={{
            flex: hovered === 'eye' ? 1.2 : hovered === 'dental' ? 0.8 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex-1 bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center p-8 overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 text-center">
            <motion.div 
              animate={{ scale: hovered === 'eye' ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg text-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </motion.div>
            <h3 className="text-3xl font-bold text-slate-800 mb-3">Vision Clarity</h3>
            <p className="text-text-main max-w-xs mx-auto drop-shadow-sm opacity-90 transition-opacity group-hover:opacity-100">
              Advanced diagnostics, surgery, and eyewear for perfect, uncompromised sight.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
