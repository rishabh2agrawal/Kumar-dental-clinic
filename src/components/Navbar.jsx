"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(scrollY.get() > 50);
    };
    const unsubscribe = scrollY.on("change", updateScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-300",
        isScrolled ? "glass shadow-lg py-2 px-6" : "bg-transparent py-4 px-6"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full glass flex items-center justify-center">
             <Image src="/Logo.png" alt="Kumar Dental & Eye Care" width={40} height={40} className="object-contain" />
          </div>
          <span className="font-bold text-lg text-primary tracking-tight hidden sm:block">
            Kumar Care
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="glass text-primary px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/80 transition shadow-[0_0_10px_rgba(37,189,179,0.1)] hover:shadow-[0_0_15px_rgba(37,189,179,0.3)]"
        >
          Contact Us
        </a>
      </div>
    </motion.header>
  );
}
