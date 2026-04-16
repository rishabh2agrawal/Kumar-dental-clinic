"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassButton({
  children,
  className,
  variant = "primary",
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-colors rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_15px_rgba(37,189,179,0.5)] hover:shadow-[0_0_25px_rgba(37,189,179,0.7)]",
    secondary:
      "glass text-secondary uppercase tracking-wider font-semibold hover:bg-white/80",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </motion.button>
  );
}
