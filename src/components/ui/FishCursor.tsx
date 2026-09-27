"use client";

import { useEffect, useRef } from "react";

const IDLE_DELAY = 700;

export default function FishCursor() {
  const fishRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches || !fishRef.current) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let targetX = pointerX;
    let targetY = pointerY;
    let x = targetX;
    let y = targetY;
    let angle = 0;
    let heading = 0;
    let escapeAngle = 0;
    let lastMovedAt = performance.now();
    let idleStartedAt: number | null = null;
    let hasMoved = false;
    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const overControl = event.target instanceof Element && event.target.closest("a, button, input, textarea, select");
      fishRef.current?.style.setProperty("opacity", overControl ? "0" : "1");

      const movementX = event.clientX - pointerX;
      const movementY = event.clientY - pointerY;
      if (Math.abs(movementX) + Math.abs(movementY) > 1) {
        heading = Math.atan2(movementY, movementX);
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      targetX = pointerX - Math.cos(heading) * 28;
      targetY = pointerY - Math.sin(heading) * 28;
      lastMovedAt = performance.now();
      idleStartedAt = null;

      if (!hasMoved) {
        x = targetX;
        y = targetY;
        hasMoved = true;

      }
    };

    const animate = (now: number) => {
      if (hasMoved && now - lastMovedAt > IDLE_DELAY) {
        if (idleStartedAt === null) {
          idleStartedAt = now;
          const distanceFromCursor = Math.hypot(x - pointerX, y - pointerY);
          escapeAngle =
            distanceFromCursor > 8
              ? Math.atan2(y - pointerY, x - pointerX)
              : heading + Math.PI;
        }

        const idleTime = now - idleStartedAt;
        const retreat = 52 + Math.min(idleTime * 0.08, 118);
        const swimPhase = idleTime * 0.003;

        targetX =
          pointerX +
          Math.cos(escapeAngle) * retreat +
          Math.sin(swimPhase) * 34;
        targetY =
          pointerY +
          Math.sin(escapeAngle) * retreat +
          Math.cos(swimPhase * 1.4) * 24;
      }

      const deltaX = targetX - x;
      const deltaY = targetY - y;
      x += deltaX * 0.075;
      y += deltaY * 0.075;

      if (Math.abs(deltaX) + Math.abs(deltaY) > 0.15) {
        angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      }

      if (fishRef.current) {
        fishRef.current.style.transform = `translate3d(${x - 24}px, ${y - 18}px, 0) rotate(${angle}deg)`;
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
      className="hidden lg:block pointer-events-none fixed left-0 top-0 z-[60] opacity-0 motion-reduce:hidden"
      style={{ willChange: "transform, opacity" }}
    >
      <svg width="48" height="36" viewBox="0 0 120 90" fill="none">
        <defs>
          <linearGradient id="cursor-fish-body" x1="29" y1="20" x2="110" y2="69" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.46" stopColor="#2563EB" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="cursor-fish-tail" x1="2" y1="17" x2="35" y2="73" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE68A" />
            <stop offset="0.52" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="cursor-fish-fin" x1="54" y1="13" x2="88" y2="69" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C4B5FD" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="cursor-fish-shadow" x="-25%" y="-38%" width="165%" height="190%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#22D3EE" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#cursor-fish-shadow)">
          <g className="fish-cursor-tail">
            <path d="M34 45C17 14 3 12 9 45C3 78 17 76 34 45Z" fill="url(#cursor-fish-tail)" />
            <path d="M28 31C20 30 13 34 9 45C13 56 20 60 28 59" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          </g>
          <path d="M30 45C43 18 80 14 104 28C115 34 118 41 118 45C118 49 115 56 104 62C80 76 43 72 30 45Z" fill="url(#cursor-fish-body)" />
          <path d="M53 22C63 9 80 9 91 23C79 21 69 24 60 31C57 28 55 25 53 22Z" fill="url(#cursor-fish-fin)" />
          <path d="M55 68C67 80 82 80 93 65C81 68 70 66 60 59C58 63 57 66 55 68Z" fill="url(#cursor-fish-fin)" opacity="0.9" />
          <path d="M42 30C52 25 64 24 75 27" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
          <path d="M39 41C51 36 65 35 78 39" stroke="#7DD3FC" strokeWidth="3" strokeLinecap="round" opacity="0.72" />
          <path d="M42 53C54 49 67 50 77 55" stroke="#C4B5FD" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <path d="M82 25C89 33 91 55 82 65" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" opacity="0.95" />
          <ellipse cx="101" cy="37" rx="6" ry="6.5" fill="white" />
          <circle cx="102.5" cy="37" r="3" fill="#0F172A" />
          <circle cx="103.5" cy="35.8" r="0.9" fill="white" />
          <path d="M110 53C113 52 115 50 116 48" stroke="#E0F2FE" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
