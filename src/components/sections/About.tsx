"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Award, Target, MapPin } from "lucide-react";
import {
  PERSONAL_INFO,
  STATS,
  EDUCATION,
  CERTIFICATIONS,
} from "@/lib/constants";

function AnimatedCounter({
  target,
  suffix,
  duration = 2,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function TimelineItem({
  icon,
  title,
  subtitle,
  period,
  description,
  index,
  color = "from-primary to-accent",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  index: number;
  color?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-4"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 shadow-glow z-10`}
        >
          {icon}
        </div>
        <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="pb-8 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
            {period}
          </span>
        </div>
        <h4 className="font-bold text-white text-base">{title}</h4>
        <p className="text-primary text-sm font-medium mb-2">{subtitle}</p>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-accent mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The Developer{" "}
            <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Turning ideas into elegant, efficient, and scalable software solutions.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass glass-hover rounded-2xl p-6 text-center border border-white/8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="text-4xl font-black gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + location */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Bio card */}
            <div className="glass rounded-2xl border border-white/8 p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Who I Am</h3>
              <p className="text-white/70 leading-relaxed text-base">
                {PERSONAL_INFO.bio}
              </p>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Career goals */}
            <div className="glass rounded-2xl border border-white/8 p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-white">Career Goals</h3>
              </div>
              <ul className="space-y-2 text-white/60 text-sm">
                {[
                  "Build scalable, user-centric web applications",
                  "Contribute to impactful open-source projects",
                  "Master full-stack development & cloud technologies",
                  "Grow into a senior software engineer role",
                ].map((goal, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <span className="text-primary mt-0.5">→</span>
                    <span>{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech snapshot */}
            <div className="glass rounded-2xl border border-white/8 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Tech Snapshot</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP",
                  "Python",
                  "MySQL",
                  "CodeIgniter 4",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-full glass border border-white/10 text-white/70 hover:border-primary/40 hover:text-white transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.08 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Education & Certifications timeline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Education &{" "}
              <span className="gradient-text">Certifications</span>
            </h3>

            {EDUCATION.map((edu, i) => (
              <TimelineItem
                key={i}
                icon={<GraduationCap className="w-5 h-5" />}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
                description={edu.description}
                index={i}
                color="from-primary to-blue-600"
              />
            ))}

            {CERTIFICATIONS.map((cert, i) => (
              <TimelineItem
                key={i}
                icon={<Award className="w-5 h-5" />}
                title={cert.name}
                subtitle={cert.issuer}
                period={cert.period}
                description={cert.description}
                index={EDUCATION.length + i}
                color="from-accent to-cyan-600"
              />
            ))}

            {/* Personal values */}
            <div className="glass rounded-2xl border border-white/8 p-6 mt-6">
              <h4 className="font-bold text-white mb-4">What Drives Me</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "💡", label: "Innovation" },
                  { icon: "🎯", label: "Precision" },
                  { icon: "🤝", label: "Collaboration" },
                  { icon: "📈", label: "Growth" },
                ].map((val) => (
                  <div
                    key={val.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/3 border border-white/5"
                  >
                    <span className="text-lg">{val.icon}</span>
                    <span className="text-sm text-white/70 font-medium">
                      {val.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
