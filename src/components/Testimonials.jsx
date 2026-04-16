"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ravi Shankar",
    role: "Patient",
    text: "Got my cataract surgery done here. Professional staff and absolutely painless procedure. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Patient",
    text: "I was always scared of dentists, but the painless extraction here changed my perspective entirely.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Patient",
    text: "Very aesthetic clinic and top-notch equipment. The consultation was thorough and the doctors were patient.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-4">Patient Experiences</h2>
        <p className="text-lg text-text-main max-w-2xl mx-auto">
          Hear directly from those who trust us with their vision and smiles.
        </p>
      </div>

      <div className="flex flex-nowrap overflow-x-auto pb-10 px-6 max-w-7xl mx-auto gap-6 snap-x snap-mandatory scrollbar-hide py-4">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="snap-center min-w-[320px] md:min-w-[400px] glass-card p-8 rounded-3xl shrink-0 flex flex-col justify-between"
          >
            <div>
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{review.name}</h4>
                <p className="text-sm text-text-main">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
