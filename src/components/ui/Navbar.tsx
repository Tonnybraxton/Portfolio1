"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "mx-4 mt-3 rounded-2xl glass border border-white/10 shadow-glass"
              : "border-b border-white/5 bg-transparent"
          }`}
        >
          <div className="section-container">
            <nav className="flex items-center justify-between h-16 px-2">
              {/* Logo */}
              <motion.button
                onClick={() => handleNavClick("#home")}
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                  <Image
                    src="/logo.svg"
                    alt="Maaka Logo"
                    width={36}
                    height={36}
                    className="w-9 h-9"
                  />
                </div>
                <div>
                  <span className="font-bold text-sm gradient-text">MBO</span>
                  <span className="hidden sm:block text-[10px] text-white/40 font-mono leading-none">
                    Portfolio
                  </span>
                </div>
              </motion.button>

              {/* Desktop Nav */}
              <ul className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <li key={link.href}>
                      <motion.button
                        onClick={() => handleNavClick(link.href)}
                        className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/60 hover:text-white/90"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="navbar-active"
                            className="absolute inset-0 rounded-xl bg-white/10 border border-white/15"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </motion.button>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  href="mailto:braxtonmaaka1@gmail.com"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-primary to-accent shadow-glow hover:shadow-glow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </div>

              {/* Mobile menu toggle */}
              <motion.button
                className="md:hidden p-2 rounded-xl glass border border-white/10 text-white/80"
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: mobileOpen ? "all" : "none" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-72 glass border-l border-white/10 p-6 pt-20 flex flex-col gap-2"
          initial={{ x: "100%" }}
          animate={{ x: mobileOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white border border-white/15"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: mobileOpen ? 0 : 30, opacity: mobileOpen ? 1 : 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.button>
            );
          })}

          <div className="mt-auto pt-4 border-t border-white/10">
            <a
              href="mailto:braxtonmaaka1@gmail.com"
              className="block text-center py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-glow"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
