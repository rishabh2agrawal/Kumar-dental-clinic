"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#appointment" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const update = () => setIsScrolled(scrollY.get() > 50);
    const unsub = scrollY.on("change", update);
    return () => unsub();
  }, [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-300",
          isScrolled
            ? "glass shadow-lg py-2.5 px-6"
            : "glass py-3.5 px-6 shadow-sm"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 overflow-hidden rounded-full flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt="Kumar Dental Care"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span
              className={cn(
                "font-bold text-base tracking-tight hidden sm:block transition-colors text-primary"
              )}
            >
              Kumar Dental Care
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors text-text-main hover:text-primary"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#appointment"
            className={cn(
              "hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
              isScrolled
                ? "glass text-primary hover:shadow-[0_0_15px_rgba(37,189,179,0.25)]"
                : "bg-primary text-white shadow hover:shadow-lg"
            )}
          >
            Book Appointment
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors text-slate-700 hover:bg-slate-100"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-40 mx-4 glass rounded-3xl p-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 font-medium text-base hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block text-center bg-primary text-white py-3 rounded-2xl font-semibold text-sm shadow-[0_0_20px_rgba(37,189,179,0.3)]"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
