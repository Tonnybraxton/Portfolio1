"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, Mail, Github, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { PERSONAL_INFO, TECH_ICONS } from "@/lib/constants";

// Floating tech badge
function FloatingIcon({
  icon,
  color,
  name,
  delay,
  x,
  y,
}: {
  icon: string;
  color: string;
  name: string;
  delay: number;
  x: string;
  y: string;
}) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 pointer-events-none select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1],
        scale: [0, 1.1, 1],
        y: [20, 0, -10, 0],
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeOut",
        y: {
          delay: delay + 1,
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl glass border border-white/10 shadow-glass"
        style={{ borderColor: `${color}30`, boxShadow: `0 0 20px ${color}20` }}
      >
        {icon}
      </div>
      <span className="text-xs text-white/60 font-mono">{name}</span>
    </motion.div>
  );
}

// Animated code window
function CodeWindow() {
  const lines = [
    { indent: 0, content: "class Developer:", color: "text-blue-400" },
    { indent: 1, content: 'name = "Maaka Braxton"', color: "text-green-400" },
    { indent: 1, content: 'location = "Nairobi, Kenya"', color: "text-cyan-400" },
    { indent: 1, content: "skills = [", color: "text-white/70" },
    { indent: 2, content: '"PHP", "Python",', color: "text-yellow-400" },
    { indent: 2, content: '"MySQL", "CodeIgniter"', color: "text-yellow-400" },
    { indent: 1, content: "]", color: "text-white/70" },
    { indent: 0, content: "", color: "" },
    { indent: 0, content: "def build_solutions(self):", color: "text-purple-400" },
    { indent: 1, content: 'return "Digital Excellence"', color: "text-green-400" },
  ];

  return (
    <motion.div
      className="relative glass rounded-2xl border border-white/10 overflow-hidden shadow-glass"
      initial={{ opacity: 0, x: 60, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, rotateY: 2 }}
      style={{ perspective: "1000px" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/3">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-white/40 font-mono">developer.py</span>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-sm space-y-1 min-w-[280px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`flex items-start gap-3 ${line.color}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.08 }}
          >
            <span className="text-white/20 select-none w-5 text-right shrink-0 text-xs mt-0.5">
              {i + 1}
            </span>
            <span style={{ paddingLeft: `${line.indent * 16}px` }}>
              {line.content}
            </span>
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-white/20 text-xs w-5 text-right">11</span>
          <motion.span
            className="w-2.5 h-5 bg-primary rounded-sm"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    </motion.div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh"
    >
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
            left: "-10%",
            top: "-10%",
          }}
          animate={{
            x: mousePos.x * 0.02,
            y: mousePos.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
            right: "5%",
            bottom: "10%",
          }}
          animate={{
            x: -mousePos.x * 0.015,
            y: -mousePos.y * 0.015,
            scale: [1, 1.15, 1],
          }}
          transition={{
            x: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {TECH_ICONS.map((tech, i) => {
          const positions = [
            { x: "5%", y: "20%" },
            { x: "8%", y: "65%" },
            { x: "90%", y: "15%" },
            { x: "88%", y: "55%" },
            { x: "85%", y: "80%" },
            { x: "2%", y: "45%" },
          ];
          return (
            <FloatingIcon
              key={tech.name}
              icon={tech.emoji}
              color={tech.color}
              name={tech.name}
              delay={0.5 + i * 0.2}
              x={positions[i]?.x || "50%"}
              y={positions[i]?.y || "50%"}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Available for opportunities · Nairobi, Kenya</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="block text-white">{PERSONAL_INFO.tagline.split(" ").slice(0, 2).join(" ")}</span>
              <span className="block gradient-text">
                {PERSONAL_INFO.tagline.split(" ").slice(2, 4).join(" ")}
              </span>
              <span className="block text-white">
                {PERSONAL_INFO.tagline.split(" ").slice(4).join(" ")}
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="text-xl sm:text-2xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-white/50">I build with </span>
              <TypeAnimation
                sequence={[
                  "PHP & CodeIgniter 4",
                  2000,
                  "Python & MySQL",
                  2000,
                  "HTML, CSS & JavaScript",
                  2000,
                  "Modern Web Technologies",
                  2000,
                ]}
                repeat={Infinity}
                className="gradient-text font-bold"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {PERSONAL_INFO.subTagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base shadow-glow overflow-hidden"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl glass border border-white/15 text-white/90 font-semibold text-base hover:border-primary/50 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl glass border border-white/15 text-white/90 font-semibold text-base hover:border-accent/50 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social quick links */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                whileHover={{ x: 4 }}
              >
                <Github className="w-4 h-4" />
                <span>@Tonnybraxton</span>
              </motion.a>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-white/30 text-sm">
                {PERSONAL_INFO.location}
              </span>
            </motion.div>
          </div>

          {/* Right: Code window */}
          <div className="hidden lg:flex items-center justify-center relative">
            <CodeWindow />

            {/* Decorative elements around the window */}
            <motion.div
              className="absolute -bottom-6 -left-6 px-4 py-3 glass rounded-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-success/20 flex items-center justify-center text-lg">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-white/40">Status</p>
                  <p className="text-sm font-semibold text-success">Available to work</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 px-4 py-3 glass rounded-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl">⚡</div>
                <div>
                  <p className="text-xs text-white/40">Current Focus</p>
                  <p className="text-sm font-semibold gradient-text">
                    Full Stack Dev
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-white/30 font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
