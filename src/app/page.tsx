"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

// Dynamically load GitHub section to avoid SSR issues
const GitHubSection = dynamic(
  () => import("@/components/sections/GitHub"),
  { ssr: false }
);

// CursorGlow only on desktop
const CursorGlow = dynamic(
  () => import("@/components/ui/CursorGlow"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0F172A] overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHubSection />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
