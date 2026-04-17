"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["123 Health Avenue, Wellness Block", "New Delhi, India 110001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 11 2345 6789"],
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sunday: Closed"],
  },
];

export default function VisitUs() {
  return (
    <section id="visit" className="py-20 md:py-24 lg:py-28 w-full overflow-hidden">
      <div className="w-full px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="order-1 h-full min-h-[380px] md:min-h-[460px] lg:min-h-[620px] py-6 md:py-8"
        >
          <div className="h-full flex flex-col justify-center">
            <div className="mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight mb-3">
                Visit Us
              </h2>
              <p className="text-slate-600 max-w-xl">
                We&apos;re conveniently located and ready to welcome you.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {INFO_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 md:p-7 flex items-start gap-4 transition-all duration-500 ease-in-out hover:shadow-[0_12px_30px_rgba(37,189,179,0.14)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm text-slate-600 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeInOut" }}
          className="order-2 relative h-full min-h-[380px] md:min-h-[460px] lg:min-h-[620px]"
        >
          <div className="relative h-full rounded-3xl overflow-hidden shadow-[0_14px_36px_rgba(37,189,179,0.12)] border border-white/25">
            <iframe
              title="Kumar Dental Care Location"
              src="https://maps.google.com/maps?q=New%20Delhi%2C%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/30 to-transparent" />
            <a
              href="https://maps.google.com/?q=New+Delhi,+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 glass rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-slate-800 hover:text-primary transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
