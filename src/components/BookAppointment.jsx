"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    reason: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend or email service
    alert("Thank you! We will confirm your appointment shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      reason: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <section id="appointment" className="py-20 md:py-24 lg:py-28 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(37,189,179,0.08)] border border-white/40"
        >
          <div className="bg-white/85 p-5 sm:p-7 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
              Let&apos;s Create Your Healthiest Smile Yet
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-xl">
              Whether you&apos;re looking for preventive care or a full smile transformation, our team
              is here to help you every step of the way.
            </p>
            <p className="mt-3 text-sm font-medium text-primary">Ready to get started? Complete the form below</p>

            <form onSubmit={handleSubmit} className="mt-7 md:mt-8 space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                    className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter last name"
                    className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-2">
                  Reason for Visit
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                >
                  <option value="">Select reason</option>
                  <option value="checkup">General Checkup</option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="implants">Dental Implants</option>
                  <option value="braces">Braces / Aligners</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full min-h-11 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-2">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share any symptoms or preferences"
                  className="w-full min-h-24 px-4 py-3 rounded-2xl bg-white border border-slate-200/70 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/35 focus:shadow-[0_0_0_4px_rgba(37,189,179,0.14)] transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full min-h-11 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base shadow-[0_0_24px_rgba(37,189,179,0.32)] hover:shadow-[0_0_34px_rgba(0,152,219,0.35)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Book Appointment
              </motion.button>
            </form>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
              alt="Dental clinic interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/35 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl px-4 py-3">
              <p className="text-white text-sm md:text-base font-medium">
                A calm, modern clinic designed for comfort from the moment you walk in.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
