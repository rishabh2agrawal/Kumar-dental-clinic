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
    <section id="visit" className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
          Visit Us
        </h2>
        <p className="text-text-main max-w-lg mx-auto">
          We&apos;re conveniently located and ready to welcome you.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Info Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {INFO_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <item.icon size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm text-text-main leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-[1.5] min-h-[350px] lg:min-h-[420px] rounded-3xl overflow-hidden glass-card p-1"
        >
          <iframe
            title="Kumar Dental Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0868144412577!2d77.20659861508056!3d28.613939982425197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1.25rem", minHeight: "350px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
