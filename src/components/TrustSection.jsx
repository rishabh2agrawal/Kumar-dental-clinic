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
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setCardsPerView(2);
        return;
      }
      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, trustHighlights.length - cardsPerView);
  const cardWidthPercent = 100 / cardsPerView;
  const totalPages = maxIndex + 1;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (isCarouselHovered || maxIndex === 0) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [isCarouselHovered, maxIndex]);

  const activeIndex = useMemo(
    () => currentIndex + Math.floor((cardsPerView - 1) / 2),
    [currentIndex, cardsPerView]
  );

  const handlePrev = () => {
    setCurrentIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentIndex((current) => Math.min(maxIndex, current + 1));
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 45) {
      handleNext();
    } else if (deltaX < -45) {
      handlePrev();
    }

    setTouchStartX(null);
  };

  return (
    <section id="why-us" className="w-full py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-5 md:mb-6 leading-tight">
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
            className="lg:col-span-8"
          >
            <div className="relative rounded-3xl">
              <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-primary/12 via-secondary/5 to-secondary/12 blur-2xl" />

              <div
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setIsCarouselHovered(true)}
                onMouseLeave={() => setIsCarouselHovered(false)}
              >
                <div
                  className="flex gap-6 md:gap-8 transition-transform duration-500 ease-in-out will-change-transform"
                  style={{
                    transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
                  }}
                >
                  {trustHighlights.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <motion.article
                        key={item.title}
                        className="glass-card rounded-2xl min-h-[250px] sm:min-h-[285px] md:min-h-[300px] px-6 md:px-8 py-6 md:py-8 flex flex-col shrink-0"
                        animate={{
                          opacity: isActive ? 1 : 0.84,
                          scale: isActive ? 1.045 : 0.98,
                          boxShadow: isActive
                            ? "0 14px 36px rgba(37, 189, 179, 0.16)"
                            : "0 8px 24px rgba(15, 23, 42, 0.1)",
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileHover={{ y: -5, boxShadow: "0 16px 34px rgba(15, 23, 42, 0.18)" }}
                        style={{
                          width: `calc(${cardWidthPercent}% - ${(cardsPerView - 1) * (cardsPerView >= 2 ? 32 : 24) / cardsPerView}px)`,
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 transition-all duration-300">
                          <item.icon size={30} strokeWidth={1.9} />
                        </div>
                        <h3 className="text-slate-800 text-xl md:text-2xl leading-tight font-bold max-w-[14ch]">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-text-main text-sm leading-relaxed max-w-[30ch]">{item.desc}</p>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 md:mt-5">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous highlight"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-slate-300 text-slate-700 inline-flex items-center justify-center hover:border-primary hover:text-primary hover:scale-105 hover:shadow-[0_0_18px_rgba(37,189,179,0.22)] transition-all disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next highlight"
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-slate-300 text-slate-700 inline-flex items-center justify-center hover:border-primary hover:text-primary hover:scale-105 hover:shadow-[0_0_18px_rgba(37,189,179,0.22)] transition-all disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-3" aria-hidden="true">
                {Array.from({ length: totalPages }, (_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`w-2.5 h-2.5 rounded-full ${dotIndex === currentIndex ? "bg-primary" : "bg-slate-300"}`}
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
