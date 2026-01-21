"use client";

import React from "react";

export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient layer - light mode */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50/80 via-blue-50/80 to-cyan-50/80" />

      {/* Animated gradient orbs - optimized with blur and will-change */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-300/30 rounded-full blur-3xl animate-gradient-float-1"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform, opacity' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl animate-gradient-float-2"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform, opacity' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-cyan-300/30 rounded-full blur-3xl animate-gradient-float-3"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform, opacity' }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-sky-200/25 rounded-full blur-3xl animate-gradient-float-4"
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform, opacity' }}
      />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl animate-gradient-float-1"
        style={{ transform: 'translate3d(0, 0, 0)', animationDelay: '5s', willChange: 'transform, opacity' }}
      />

      {/* Subtle animated overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_50%)] animate-gradient-overlay" />
    </div>
  );
}
