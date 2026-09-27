"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { SKILLS, SKILL_EVIDENCE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<keyof typeof SKILLS, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  "AI & Search": "✨",
  Testing: "🧪",
  Tools: "🛠️",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SKILLS>("Frontend");
  const categories = Object.keys(SKILLS) as (keyof typeof SKILLS)[];
  const evidence = SKILL_EVIDENCE[activeCategory];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="section-container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-primary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Technical Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Skills in <span className="gradient-text">Practice</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            What I use and how I apply it, from responsive interfaces to document search with AI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Skill categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              aria-controls="skill-details"
              className={cn(
                "px-4 sm:px-5 py-2.5 rounded-xl font-medium text-sm transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F172A]",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white"
                  : "glass border border-white/10 text-white/60 hover:text-white"
              )}
            >
              <span aria-hidden="true">{CATEGORY_ICONS[category]}</span>
              {category}
            </button>
          ))}
        </div>

        <div id="skill-details" className="grid lg:grid-cols-[1.35fr_1fr] gap-6 items-start">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="glass rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">{activeCategory} Skills</h3>
            <div className="space-y-5">
              {SKILLS[activeCategory].map((skill) => (
                <div key={skill.name} className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden="true" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: evidence.color }} />
                  <div>
                    <h4 className="font-semibold text-white/90">{skill.name}</h4>
                    <p className="text-sm text-white/55 leading-relaxed mt-1">{skill.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <aside className="glass rounded-2xl border border-white/10 p-6 sm:p-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: evidence.color }} />
            <p className="text-xs uppercase tracking-widest text-accent mb-4">See it in a project</p>
            <h3 className="text-2xl font-bold text-white mb-3">{evidence.project}</h3>
            <p className="text-white/60 leading-relaxed text-sm mb-6">{evidence.summary}</p>
            <a
              href={evidence.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-3 rounded-xl bg-white/5 border border-white/15 hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              Explore {evidence.project}
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
            <div className="mt-8 pt-5 border-t border-white/10">
              <p className="text-xs text-white/40">Recent work · September 2026</p>
              <p className="text-sm text-white/55 leading-relaxed mt-2">
                My latest projects bring together Python APIs, TypeScript interfaces, relational databases, and tests for real user journeys.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
