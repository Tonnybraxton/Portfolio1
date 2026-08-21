"use client";

import { useEffect, useRef } from "react";

export default function FishCursor() {
  const fishRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer || !fishRef.current) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let angle = 0;
    let hasMoved = false;
    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX + 30;
      targetY = event.clientY + 18;

      if (!hasMoved) {
        x = targetX;
        y = targetY;
        hasMoved = true;
        fishRef.current?.style.setProperty("opacity", "1");
      }
    };

    const animate = () => {
      const deltaX = targetX - x;
      const deltaY = targetY - y;
      x += deltaX * 0.09;
      y += deltaY * 0.09;

      if (Math.abs(deltaX) + Math.abs(deltaY) > 0.2) {
        angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      }

      if (fishRef.current) {
        fishRef.current.style.transform = `translate3d(${x - 36}px, ${y - 25}px, 0) rotate(${angle}deg)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={fishRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden opacity-0 motion-reduce:hidden md:block"
      style={{ willChange: "transform, opacity" }}
    >
      <svg width="72" height="50" viewBox="0 0 100 70" fill="none">
        <defs>
          <linearGradient id="fish-body" x1="18" y1="12" x2="86" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67E8F9" />
            <stop offset="0.55" stopColor="#06B6D4" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="fish-fin" x1="16" y1="14" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A5F3FC" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
          <filter id="fish-glow" x="-30%" y="-45%" width="160%" height="190%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#fish-glow)">
          <path d="M24 35L3 12L8 35L3 58L24 35Z" fill="url(#fish-fin)" />
          <ellipse cx="57" cy="35" rx="34" ry="23" fill="url(#fish-body)" />
          <path d="M47 18C55 27 57 43 47 52C37 47 31 42 28 35C31 28 37 23 47 18Z" fill="#A5F3FC" fillOpacity="0.35" />
          <path d="M58 15C67 16 74 21 78 28C70 26 62 26 54 29C54 23 55 18 58 15Z" fill="url(#fish-fin)" />
          <path d="M56 55C65 53 73 48 77 42C68 44 61 43 54 40C54 46 55 51 56 55Z" fill="#0EA5E9" fillOpacity="0.8" />
          <circle cx="76" cy="29" r="5" fill="white" />
          <circle cx="77.5" cy="29" r="2.4" fill="#0F172A" />
          <circle cx="78.4" cy="28.1" r="0.7" fill="white" />
          <path d="M84 43C87 42 89 40 90 38" stroke="#E0F2FE" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
