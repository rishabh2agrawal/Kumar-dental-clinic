"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ravi Shankar",
    text: "Got my dental implants done here. Professional staff and absolutely painless procedure. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    text: "I was always scared of dentists, but the painless extraction here changed my perspective entirely. Amazing experience!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    text: "Very aesthetic clinic and top-notch equipment. The consultation was thorough and the doctors were incredibly patient.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    text: "My teeth whitening results have been incredible. The entire process was quick, comfortable, and worth every penny.",
    rating: 5,
  },
  {
    name: "Karan Verma",
    text: "Dr. Kumar is the best dentist I've visited. He explained everything clearly and the root canal was completely painless.",
    rating: 4,
  },
];

/* Simple inline Google "G" icon */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            What Our Patients Say
          </h2>
          <p className="text-text-main max-w-lg mx-auto">
            Real reviews from people who trust us with their smiles.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-nowrap overflow-x-auto pb-6 px-6 max-w-7xl mx-auto gap-5 snap-x snap-mandatory scrollbar-hide relative z-10">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="snap-center min-w-[300px] md:min-w-[360px] glass-card p-7 rounded-2xl shrink-0 flex flex-col justify-between"
          >
            <div>
              {/* Google badge + stars */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "currentColor" : "none"}
                      strokeWidth={i < review.rating ? 0 : 1.5}
                    />
                  ))}
                </div>
                <GoogleIcon />
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                <p className="text-xs text-text-main">Google Review</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
