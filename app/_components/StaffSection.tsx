"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../_contexts/LanguageContext";

const staff = [
  {
    image: "/assets/sujon.png",
    nameKey: "staff.member1.name",
    roleKey: "staff.member1.role",
  },
  {
    image: "/assets/manik.png",
    nameKey: "staff.member2.name",
    roleKey: "staff.member2.role",
    link: "https://www.facebook.com/mahmudul.9900",
  },
  {
    image: "/assets/faruk.jpg",
    nameKey: "staff.member3.name",
    roleKey: "staff.member3.role",
  },
  {
    image: "/assets/ayesha.png",
    nameKey: "staff.member4.name",
    roleKey: "staff.member4.role",
  },
  {
    image: "/assets/nijhum.png",
    nameKey: "staff.member5.name",
    roleKey: "staff.member5.role",
  },
  {
    image: "/assets/Taimoor .jpg",
    nameKey: "staff.member6.name",
    roleKey: "staff.member6.role",
  },
];

export default function StaffSection() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<number | null>(null);

  // Duplicate staff array for seamless infinite loop
  const duplicatedStaff = [...staff, ...staff, ...staff];

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 2.5; // pixels per frame
    let animationFrameId: number | null = null;

    const autoScroll = () => {
      if (!container) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        return;
      }
      
      // Only scroll if not paused and not dragging
      if (!isPaused && !isDragging) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Only proceed if we have valid scroll dimensions
        if (maxScroll > 0) {
          const oneThird = maxScroll / 3; // Since we have 3 copies of the array

          // Direct scroll without smooth behavior for continuous animation
          container.scrollLeft += scrollSpeed;

          // Seamless loop: when we've scrolled one-third (one full set), reset to beginning
          if (container.scrollLeft >= oneThird) {
            container.scrollLeft = container.scrollLeft - oneThird;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(autoScroll);
      autoScrollRef.current = animationFrameId;
    };

    // Start the animation loop after a short delay to ensure DOM is ready
    const startTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(autoScroll);
      autoScrollRef.current = animationFrameId;
    }, 200);

    return () => {
      clearTimeout(startTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isPaused, isDragging]);

  // Pause auto-scroll on interaction, resume after delay
  const pauseAutoScroll = () => {
    setIsPaused(true);
    const timeoutId = setTimeout(() => {
      setIsPaused(false);
    }, 3000); // Resume after 3 seconds of no interaction
    
    return () => clearTimeout(timeoutId);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    pauseAutoScroll();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    pauseAutoScroll();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    pauseAutoScroll();
  };

  // Pause on scroll (wheel/trackpad)
  const handleWheel = () => {
    pauseAutoScroll();
  };

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
            {t("staff.badge")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("staff.title")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            {t("staff.description")}
          </p>
        </div>

        {/* Scrollable Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <div ref={scrollContentRef} className="flex gap-6 lg:gap-8" style={{ width: "fit-content" }}>
              {duplicatedStaff.map((member, index) => {
                const CardContent = (
                  <div className="group relative rounded-2xl border border-white/30 dark:border-gray-700/30 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md overflow-hidden shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30 hover:-translate-y-1 hover:border-white/50 dark:hover:border-gray-600/50 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                      <Image
                        src={member.image}
                        alt={t(member.nameKey)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        quality={85}
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {t(member.nameKey)}
                      </h3>
                      <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                        {t(member.roleKey)}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <div
                    key={`${member.nameKey}-${index}`}
                    className="shrink-0 w-[280px] sm:w-[300px] lg:w-[320px]"
                  >
                    {member.link ? (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                        onClick={(e) => {
                          // Prevent link click if user was dragging
                          if (isDragging) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {CardContent}
                      </a>
                    ) : (
                      CardContent
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
