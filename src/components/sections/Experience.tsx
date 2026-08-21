"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

function ExperienceCard({
  exp,
  index,
  isLeft,
}: {
  exp: (typeof EXPERIENCE)[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex gap-6 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Desktop timeline node */}
      <div className="hidden lg:flex flex-col items-center">
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shrink-0 shadow-glow z-10`}
          initial={{ scale: 0, rotate: -20 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
        >
          {exp.icon}
        </motion.div>
        {index < EXPERIENCE.length - 1 && (
          <motion.div
            className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-primary/50 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            style={{ minHeight: "60px" }}
          />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 pb-12 ${isLeft ? "" : "lg:text-right"}`}>
        <div className="glass rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
          {/* Mobile icon */}
          <div className="flex items-center gap-3 mb-4 lg:hidden">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl`}
            >
              {exp.icon}
            </div>
            <div>
              <span className="text-xs text-white/40 font-mono">{exp.period}</span>
              <div
                className={`inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
              >
                {exp.type}
              </div>
            </div>
          </div>

          {/* Desktop header */}
          <div
            className={`hidden lg:flex items-center gap-3 mb-4 ${isLeft ? "" : "justify-end"}`}
          >
            <span className="text-xs font-mono text-white/40">{exp.duration}</span>
            <span className="text-xs font-mono text-accent">·</span>
            <span className="text-xs font-mono text-white/40">{exp.period}</span>
            <div
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}
            >
              {exp.type}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-1">
            {exp.role}
          </h3>
          <p
            className={`text-base font-semibold mb-3 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
          >
            {exp.company}
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Responsibilities */}
          <div className="space-y-2 mb-4">
            {exp.responsibilities.map((resp, i) => (
              <motion.div
                key={i}
                className={`flex items-start gap-2 text-sm text-white/50 ${isLeft ? "" : "lg:flex-row-reverse lg:text-right"}`}
                initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.4 + i * 0.08 }}
              >
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <span>{resp}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech tags */}
          <div
            className={`flex flex-wrap gap-2 ${isLeft ? "" : "lg:justify-end"}`}
          >
            {exp.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-success mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-success" />
            Work Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Real-world experience building production software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
