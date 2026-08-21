"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Mail, Code2, Heart } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold gradient-text">MBO</span>
                <p className="text-[10px] text-white/40">Portfolio</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              {PERSONAL_INFO.name} — Building digital solutions from{" "}
              {PERSONAL_INFO.location}.
            </p>
            <div className="flex gap-3">
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  📞 {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            © {currentYear} {PERSONAL_INFO.name}. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            in Nairobi.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-glow"
        whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 30px rgba(59,130,246,0.6)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
