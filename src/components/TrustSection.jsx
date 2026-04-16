"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, HeartPulse, Lightbulb, ShieldCheck, Stethoscope } from "lucide-react";

const trustHighlights = [
  {
    icon: HeartPulse,
    title: "Patient First",
    desc: "Your comfort and safety are our top priorities. We treat people, not just teeth.",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Highly qualified specialists with years of experience in endodontic, restorative, and cosmetic dentistry.",
  },
  {
    icon: ShieldCheck,
    title: "Sterile & Safe",
    desc: "Medical-grade hygiene and safety protocols. We adhere to the strictest sterilization standards.",
  },
  {
    icon: Clock,
    title: "Easy Booking",
    desc: "Simple scheduling designed for you. Book online or call us directly.",
  },
  {
    icon: Lightbulb,
    title: "Advanced Technology",
    desc: "Modern digital diagnostics and precision tools for faster, more accurate treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Care",
    desc: "Clear treatment plans, upfront guidance, and honest communication at every step.",
  },
];

export default function TrustSection() {
  const [cardsPerView, setCardsPerView] = useState(2);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 2);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalPages = Math.ceil(trustHighlights.length / cardsPerView);

  useEffect(() => {
    if (page >= totalPages) {
      setPage(0);
    }
  }, [page, totalPages]);

  const visibleHighlights = useMemo(() => {
    const startIndex = page * cardsPerView;
    return Array.from({ length: cardsPerView }, (_, offset) => {
      const index = (startIndex + offset) % trustHighlights.length;
      return trustHighlights[index];
    });
  }, [page, cardsPerView]);

  const handlePrev = () => {
    setPage((current) => (current - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPage((current) => (current + 1) % totalPages);
  };

  return (
    <section id="why-us" className="w-full py-24 max-w-7xl mx-auto px-6">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-6 leading-tight">
              Why Patients <span className="font-semibold">Choose Us</span>
            </h2>
            <p className="text-text-main leading-relaxed text-base md:text-lg max-w-xl">
              Whether you need preventive care, same-day crowns, or a full smile makeover, you will
              feel right at home in our warm, welcoming office. We offer personalized treatment for
              every stage of life, all under one roof.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {visibleHighlights.map((item) => (
                <article
                  key={`${item.title}-${page}`}
                  className="glass-card rounded-2xl min-h-[260px] sm:min-h-[300px] px-8 py-8 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8">
                    <item.icon size={30} strokeWidth={1.9} />
                  </div>
                  <h3 className="text-slate-800 text-2xl leading-tight font-bold max-w-[14ch]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-text-main text-sm leading-relaxed max-w-[28ch]">{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous highlight"
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-slate-300 text-slate-700 inline-flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next highlight"
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-slate-300 text-slate-700 inline-flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-3" aria-hidden="true">
                {Array.from({ length: totalPages }, (_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`w-2.5 h-2.5 rounded-full ${dotIndex === page ? "bg-primary" : "bg-slate-300"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
