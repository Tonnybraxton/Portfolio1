"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate sending (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1800));

    // For demo purposes, show success
    setFormState("success");
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setFormState("idle"), 4000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: "from-primary to-blue-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      color: "from-accent to-cyan-600",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: null,
      color: "from-success to-emerald-600",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@Tonnybraxton",
      href: PERSONAL_INFO.github,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-primary mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Open for internships, freelance projects, and full-time opportunities.
            Let&apos;s talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass glass-hover rounded-2xl border border-white/8 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">{info.label}</div>
                      <div className="font-semibold text-white/80 group-hover:text-white transition-colors text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/8">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shrink-0`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">{info.label}</div>
                      <div className="font-semibold text-white/80 text-sm">
                        {info.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability indicator */}
            <motion.div
              className="glass rounded-2xl border border-success/30 p-4 bg-success/5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-success animate-ping opacity-40" />
                </div>
                <div>
                  <p className="font-semibold text-success text-sm">
                    Open to Opportunities
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">
                    Internships · Freelance · Full-time
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl border border-white/10 p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs text-white/50 font-medium uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm transition-all duration-300 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-white/50 font-medium uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm transition-all duration-300 focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Internship Opportunity / Project Collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm transition-all duration-300 focus:border-primary/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm transition-all duration-300 focus:border-primary/50 resize-none"
                />
              </div>

              {/* Status messages */}
              {formState === "success" && (
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/30 text-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">
                    Message sent! I&apos;ll get back to you soon. 🚀
                  </p>
                </motion.div>
              )}
              {formState === "error" && (
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-medium">
                    Something went wrong. Please try again or email directly.
                  </p>
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={
                  formState === "idle"
                    ? { scale: 1.01, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }
                    : {}
                }
                whileTap={formState === "idle" ? { scale: 0.99 } : {}}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : formState === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
