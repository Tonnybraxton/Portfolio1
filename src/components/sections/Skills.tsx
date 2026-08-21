"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  Tools: "🛠️",
};

function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
          />
          <span className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <motion.span
          className="text-xs font-mono text-white/40 group-hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar h-2">
        <motion.div
          className="skill-bar-fill h-full"
          style={{
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            boxShadow: `0 0 10px ${color}40`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const circumference = 2 * Math.PI * 24;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="glass glass-hover rounded-2xl p-4 border border-white/8 flex flex-col items-center gap-3 group cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4, scale: 1.03 }}
    >
      {/* Circular progress */}
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay: index * 0.07 + 0.3, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color}60)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold" style={{ color }}>
            {level}%
          </span>
        </div>
      </div>

      <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const categories = Object.keys(SKILLS);
  const currentSkills = SKILLS[activeCategory as keyof typeof SKILLS];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-primary mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Technical Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2",
                activeCategory === cat
                  ? "text-white"
                  : "glass border border-white/10 text-white/50 hover:text-white/80"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="skills-tab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {CATEGORY_ICONS[cat]} {cat}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bar chart */}
          <motion.div
            key={activeCategory + "-bars"}
            className="glass rounded-2xl border border-white/8 p-6 space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>{CATEGORY_ICONS[activeCategory]}</span>
              <span>{activeCategory} Skills</span>
            </h3>
            {currentSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                index={i}
              />
            ))}
          </motion.div>

          {/* Circular cards grid */}
          <div>
            <motion.div
              key={activeCategory + "-cards"}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {currentSkills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  index={i}
                />
              ))}
            </motion.div>

            {/* All skills overview */}
            <motion.div
              className="mt-6 glass rounded-2xl border border-white/8 p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-white/50 mb-3 uppercase tracking-wider">
                All Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {Object.values(SKILLS)
                  .flat()
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        borderColor: `${skill.color}30`,
                        background: `${skill.color}10`,
                        color: skill.color,
                      }}
                      whileHover={{
                        scale: 1.1,
                        borderColor: skill.color,
                        background: `${skill.color}20`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: skill.color }}
                      />
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
