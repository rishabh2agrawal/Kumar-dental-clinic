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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] md:w-[95%] max-w-7xl rounded-full transition-all duration-300",
          isScrolled
            ? "glass shadow-lg py-2.5 px-4 md:px-6"
            : "glass py-3 px-4 md:px-6 shadow-sm"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
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
                "font-bold text-sm sm:text-base tracking-tight transition-colors text-primary block whitespace-nowrap overflow-hidden text-ellipsis"
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
              "md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors text-slate-700 hover:bg-slate-100 shrink-0"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden bg-slate-900/35 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto h-full w-[86%] max-w-sm glass border-l border-white/35 p-6 pt-5 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold tracking-wide text-slate-700">Menu</p>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full inline-flex items-center justify-center text-slate-700 hover:bg-white/70 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-800 font-semibold text-lg py-3 px-2 rounded-xl hover:bg-white/65 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <a
                href="#appointment"
                onClick={() => setMobileOpen(false)}
                className="mt-6 block text-center bg-gradient-to-r from-primary to-secondary text-white py-3.5 rounded-2xl font-semibold text-sm shadow-[0_0_24px_rgba(37,189,179,0.3)]"
              >
                Book Appointment
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
