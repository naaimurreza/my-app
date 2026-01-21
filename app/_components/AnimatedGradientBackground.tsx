"use client";

import React from "react";

export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base white background layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Subtle animated overlay for depth - very minimal */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.01),transparent_50%)] animate-gradient-overlay" />
    </div>
  );
}
