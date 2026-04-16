"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassButton({
  children,
  className,
  variant = "primary",
  href,
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold transition-all duration-300 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_20px_rgba(37,189,179,0.35)] hover:shadow-[0_0_30px_rgba(37,189,179,0.5)]",
    secondary:
      "glass text-primary hover:bg-white/80",
    outline:
      "border border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
