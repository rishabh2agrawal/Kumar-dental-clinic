"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedLogoMark() {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Reveal eye after tooth draws (1.5s)
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Tooth outline representing dental care
  const toothPath = "M 50 15 C 70 5, 90 20, 85 45 C 80 65, 75 85, 65 85 C 58 85, 55 70, 50 65 C 45 70, 42 85, 35 85 C 25 85, 20 65, 15 45 C 10 20, 30 5, 50 15 Z";
  
  // Eye shapes representing eye care
  const eyeOpen = "M 25 45 Q 50 25 75 45 Q 50 65 25 45";
  const eyeClosed = "M 25 45 Q 50 45 75 45 Q 50 45 25 45";

  return (
    <motion.div 
      className="relative w-32 h-32 md:w-36 md:h-36 cursor-pointer flex items-center justify-center mb-8"
      onMouseEnter={() => setIsBlinking(true)}
      onMouseLeave={() => setIsBlinking(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background soft glow on hover (blink interaction) */}
      <motion.div 
        animate={{ opacity: isBlinking ? 0.8 : 0, scale: isBlinking ? 1.0 : 0.8 }}
        className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
      />

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible relative z-10 transition-transform duration-500">
        <defs>
          <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#25BDB3" />
            <stop offset="100%" stopColor="#0098DB" />
          </linearGradient>
          <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0098DB" />
            <stop offset="100%" stopColor="#A6DCDE" />
          </linearGradient>
          
          {/* Clip path for the organic wave reveal */}
          <clipPath id="waveClip">
            <motion.rect 
              x="0" y="0" height="100"
              initial={{ width: 0 }}
              animate={{ width: isRevealed ? 100 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </clipPath>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="2" result="blur" />
             <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Base Tooth Shape (Draws first to emphasize dental) */}
        <motion.path
          d={toothPath}
          fill="none"
          stroke="url(#toothGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* 2. Wave Line passing through */}
        {isRevealed && (
           <motion.line
             y1="25" y2="65"
             stroke="#A6DCDE"
             strokeWidth="2"
             filter="url(#glow)"
             initial={{ x1: 20, x2: 20, opacity: 0 }}
             animate={{ x1: 80, x2: 80, opacity: [0, 1, 1, 0] }}
             transition={{ duration: 1.2, ease: "easeInOut" }}
           />
        )}

        {/* 3. Eye Elements (Revealed by wave clip path) */}
        <g clipPath="url(#waveClip)">
          {/* Eye Outline matches blink state */}
          <motion.path
            d={isBlinking ? eyeClosed : eyeOpen}
            fill="none"
            stroke="url(#eyeGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ d: isBlinking ? eyeClosed : eyeOpen }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          />

          {/* Pupil */}
          <motion.circle
            cx="50"
            cy="45"
            r="8"
            fill="none"
            stroke="url(#eyeGrad)"
            strokeWidth="3"
            animate={{ 
              scale: isBlinking ? 0.3 : 1,
              opacity: isBlinking ? 0 : 1
            }}
            transition={{ duration: 0.15 }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
