import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  return (
    <footer className="glass border-t border-white/50 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center -ml-1">
               <img src="/Logo.png" alt="Logo" className="w-full h-full object-contain" />
             </div>
             <span className="font-bold text-xl text-primary tracking-tight">Kumar Care</span>
          </div>
          <p className="text-text-main text-sm max-w-sm">
            Premium dental and eye care in a state-of-the-art facility. Your health, our priority.
          </p>
          <div className="flex gap-4 pt-2">
            {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-slate-800 mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Dental Services", "Eye Care Services", "Book Appointment"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-text-main hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-slate-800 mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-text-main">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <span>123 Health Avenue, Wellness Block,<br/>New Delhi, India 110001</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-text-main">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-text-main">
              <Mail size={18} className="text-primary shrink-0" />
              <span>contact@kumarcare.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200/50 text-center text-sm text-text-main/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Kumar Dental & Eye Care. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
