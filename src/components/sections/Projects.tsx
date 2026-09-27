"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Github, ArrowUpRight, Check, ImageIcon } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [imageFailed, setImageFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141F32] shadow-lg transition-colors hover:border-cyan-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F172A]"
    >
      <div className="relative w-full shrink-0 aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/10">
        {imageFailed ? (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3 px-6 text-center`}>
            <Github className="w-10 h-10 text-white/80" aria-hidden="true" />
            <span className="text-lg font-bold text-white">{project.title}</span>
            <span className="text-xs text-white/75">Explore the repository on GitHub</span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className={cn(
              "transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.025]",
              project.imageLabel === "App screenshot" ? "object-cover object-top" : "object-contain"
            )}
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
        <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90">
          <ImageIcon className="w-3.5 h-3.5" aria-hidden="true" />
          {imageFailed ? "GitHub project" : project.imageLabel}
        </span>
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-950/75 text-white backdrop-blur-sm group-hover:bg-cyan-600 transition-colors">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="mb-3 self-start rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-cyan-300">
          {project.category}
        </span>
        <h3 className="text-xl font-bold leading-snug text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[11px] font-medium text-slate-300">{tech}</span>
          ))}
        </div>
        <div className="mt-5 flex min-h-11 items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-white group-hover:text-cyan-300">
          <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" aria-hidden="true" />View on GitHub</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [category, setCategory] = useState("All projects");
  const categories = ["All projects", ...Array.from(new Set(PROJECTS.map((project) => project.category)))];
  const projects = category === "All projects" ? PROJECTS : PROJECTS.filter((project) => project.category === category);

  return (
    <section id="projects" className="py-20 sm:py-24 relative scroll-mt-24">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent mb-3">Selected work</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">Ideas into <span className="gradient-text">Applications</span></h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">Explore my work in AI, commerce, and web development. Open any project to see its code and documentation on GitHub.</p>
          </div>
          <a href={`${PERSONAL_INFO.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 self-start items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <Github className="w-4 h-4" aria-hidden="true" />All repositories<ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label="Filter projects">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} aria-controls="project-grid" onClick={() => setCategory(item)} className={cn("min-h-11 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent", category === item ? "bg-cyan-400 text-slate-950" : "bg-white/5 text-slate-300 border border-white/10 hover:border-white/30 hover:text-white")}>
              {item}
            </button>
          ))}
        </div>
        <p className="mb-6 text-xs text-slate-400" role="status" aria-live="polite">Showing {projects.length} of {PROJECTS.length} projects</p>
        <div id="project-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
