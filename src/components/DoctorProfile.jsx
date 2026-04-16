"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Clock } from "lucide-react";

export default function DoctorProfile() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16">
        {/* Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 w-full max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass-card">
            {/* Gradient avatar placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-4xl font-bold">DK</span>
                </div>
                <p className="text-primary/40 text-sm font-medium tracking-wider uppercase">
                  Doctor Photo
                </p>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/15 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Doctor Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">
              Meet Your Dentist
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
              Dr. Rajesh Kumar
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: GraduationCap, label: "BDS, MDS — Prosthodontics" },
              { icon: Clock, label: "15+ Years Experience" },
              { icon: Award, label: "500+ Happy Patients" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass-card text-xs md:text-sm text-slate-700 font-medium"
              >
                <item.icon size={16} className="text-primary" />
                {item.label}
              </div>
            ))}
          </div>

          <p className="text-text-main leading-relaxed text-base">
            With over 15 years of clinical excellence, Dr. Kumar combines modern
            dental technology with a compassionate, patient-first approach. Every
            treatment is designed around your comfort — from routine cleanings to
            complex implant procedures, you&apos;re in experienced, gentle hands.
          </p>

          <p className="text-text-main leading-relaxed text-base">
            Our clinic uses the latest digital X-rays, painless laser equipment,
            and sterilization protocols that exceed international standards.
            Your safety and smile are our top priorities.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-12 lg:gap-16 mt-16 md:mt-20">
        {/* Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 w-full max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass-card">
            {/* Gradient avatar placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-4xl font-bold">AS</span>
                </div>
                <p className="text-primary/40 text-sm font-medium tracking-wider uppercase">
                  Doctor Photo
                </p>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/15 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Doctor Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">
              Meet Your Dentist
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
              Dr. Ananya Sharma
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: GraduationCap, label: "BDS, MDS - Orthodontics" },
              { icon: Clock, label: "12+ Years Experience" },
              { icon: Award, label: "400+ Smile Transformations" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass-card text-xs md:text-sm text-slate-700 font-medium"
              >
                <item.icon size={16} className="text-primary" />
                {item.label}
              </div>
            ))}
          </div>

          <p className="text-text-main leading-relaxed text-base">
            Dr. Ananya focuses on smile design and alignment-focused care with a gentle, personalized
            approach. From clear aligners to cosmetic corrections, every treatment plan is tailored to
            your goals and comfort.
          </p>

          <p className="text-text-main leading-relaxed text-base">
            She combines digital treatment planning with patient education, so you understand every
            step before we begin. The result is predictable outcomes and a confident, natural smile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
