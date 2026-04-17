import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50/80 border-t border-slate-200/60 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
        {/* Brand */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Image
              src="/Logo.png"
              alt="Kumar Dental Care"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-bold text-lg text-primary tracking-tight">
              Kumar Dental Care
            </span>
          </div>
          <p className="text-text-main text-sm max-w-sm leading-relaxed">
            Premium dental care in a state-of-the-art facility. Your health, our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-slate-800 mb-5 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Reviews", href: "#reviews" },
              { label: "Book Appointment", href: "#appointment" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-text-main hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-slate-800 mb-5 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-text-main text-left">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>
                123 Health Avenue, Wellness Block,
                <br />
                New Delhi, India 110001
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm text-text-main">
              <Phone size={16} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-text-main">
              <Mail size={16} className="text-primary shrink-0" />
              <span>contact@kumardental.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pt-6 border-t border-slate-200/50 text-center text-sm text-text-main/70 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Kumar Dental Care. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
