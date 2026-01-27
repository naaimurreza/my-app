"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AnimatedGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set initial mouse position to center
    if (typeof window !== "undefined") {
      setMousePosition({
        x: 50,
        y: 50,
      });
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  // Calculate parallax offsets based on scroll
  const parallaxOffset1 = scrollY * 0.1;
  const parallaxOffset2 = scrollY * 0.15;
  const parallaxOffset3 = scrollY * 0.2;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-[1] overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Base subtle background with continuous animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-sky-50/50 to-purple-50/45 animate-gradient-shift" />

      {/* Animated gradient blobs that follow cursor and animate continuously */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-3xl transition-all duration-700 ease-out animate-cursor-blob-1"
        style={{
          background:
            "radial-gradient(circle, rgba(110, 231, 183, 0.5), rgba(125, 211, 252, 0.45), transparent 70%)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: `translate(-50%, -50%) translateY(${-parallaxOffset1}px)`,
          willChange: "transform, opacity",
          opacity: 0.7,
        }}
      />

      <div
        className="absolute w-[850px] h-[850px] rounded-full blur-3xl transition-all duration-1000 ease-out animate-cursor-blob-2"
        style={{
          background:
            "radial-gradient(circle, rgba(196, 181, 253, 0.5), rgba(251, 113, 133, 0.45), transparent 70%)",
          left: `${100 - mousePosition.x}%`,
          top: `${100 - mousePosition.y}%`,
          transform: `translate(-50%, -50%) translateY(${-parallaxOffset2}px)`,
          willChange: "transform, opacity",
          opacity: 0.65,
        }}
      />

      {/* Floating animated blobs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl animate-float-blob-1"
        style={{
          background:
            "radial-gradient(circle, rgba(125, 211, 252, 0.45), rgba(110, 231, 183, 0.4), transparent 70%)",
          left: "20%",
          top: "30%",
          transform: `translateY(${-parallaxOffset3}px)`,
          opacity: 0.55,
        }}
      />

      <div
        className="absolute w-[750px] h-[750px] rounded-full blur-3xl animate-float-blob-2"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 113, 133, 0.45), rgba(196, 181, 253, 0.4), transparent 70%)",
          right: "15%",
          bottom: "25%",
          transform: `translateY(${-parallaxOffset1}px)`,
          opacity: 0.55,
        }}
      />

      {/* Additional floating blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-float-blob-1"
        style={{
          background:
            "radial-gradient(circle, rgba(110, 231, 183, 0.4), rgba(125, 211, 252, 0.35), transparent 70%)",
          left: "60%",
          top: "70%",
          transform: `translateY(${-parallaxOffset2}px)`,
          opacity: 0.5,
          animationDuration: "28s",
        }}
      />

      {/* Particle effect layer */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full blur-sm animate-particle"
            style={{
              background: `radial-gradient(circle, rgba(110, 231, 183, ${0.3 + (i % 3) * 0.1}), transparent)`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${12 + (i % 5) * 2}s`,
              transform: `translateY(${-parallaxOffset2 * (0.5 + i * 0.1)}px)`,
            }}
          />
        ))}
      </div>

      {/* Scroll-reactive gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-100/40 to-transparent transition-opacity duration-300"
        style={{
          opacity: Math.min(scrollY / 500, 0.5),
        }}
      />

      {/* Cursor trail effect with continuous animation */}
      <div
        className="absolute w-60 h-60 rounded-full blur-2xl transition-all duration-300 ease-out animate-cursor-trail"
        style={{
          background: "radial-gradient(circle, rgba(110, 231, 183, 0.5), transparent)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          opacity: 0.35,
        }}
      />
      
      {/* Continuously animating background gradient */}
      <div className="absolute inset-0 animate-gradient-shift opacity-35" />
    </div>
  );
}
