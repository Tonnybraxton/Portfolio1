"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease",
      }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 blur-xl transition-opacity duration-500`}
        animate={{ opacity: hovered ? 0.25 : 0 }}
      />

      <div className="relative glass rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col">
        {/* Header banner */}
        <div
          className={`relative h-44 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="text-4xl mb-2">{project.icon}</div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 text-xs text-white/80 font-medium">
                <Code className="w-3 h-3" />
                {project.category}
              </div>
            </div>

            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-2">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-1.5">
            {project.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/50">
                <span className="text-success mt-0.5 shrink-0">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex gap-3 pt-2 border-t border-white/5">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" />
              View Code
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
            {project.live ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl glass border border-white/15 text-white/80 text-sm font-semibold flex items-center gap-1.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </motion.a>
            ) : (
              <div className="px-4 py-2.5 rounded-xl glass border border-white/8 text-white/30 text-sm font-semibold flex items-center gap-1.5 cursor-not-allowed">
                Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-accent mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Projects That{" "}
            <span className="gradient-text">Ship Value</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Five featured projects from my CV and GitHub. Browse every repository in the GitHub section below.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Tonnybraxton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass border border-white/15 text-white/80 hover:text-white hover:border-primary/50 transition-all duration-300 font-medium"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
