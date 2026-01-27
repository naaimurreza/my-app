"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "../_contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const specialists = [
  {
    key: "mohit",
    image: "/assets/kamal.png",
    link: "/muhitkamal",
    imageSize: "max-w-md",
  },
  {
    key: "rabbani",
    image: "/assets/rabbani.png",
    link: "/golamrabbani",
    imageSize: "max-w-md",
  },
  {
    key: "mandal",
    image: "/assets/mondol.png",
    link: "/mandal",
    imageSize: "max-w-md",
  },
];

export default function SpecialistPsychiatristsSection() {
  const { t } = useLanguage();
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      {/* Modern background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.06),transparent_60%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-400"></div>
            <p className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 ring-1 ring-sky-200/50 shadow-sm">
              {t("specialists.badge")}
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t("specialists.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {t("specialists.description")}
          </p>
        </div>

        <Carousel
          className="w-full"
          plugins={[autoplayPlugin.current]}
        >
          <CarouselContent>
            {specialists.map((specialist, index) => (
              <CarouselItem key={index}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Content card with glassmorphism */}
                    <div className="space-y-10 order-2 lg:order-1">
                      <div className="relative group">
                        {/* Card background */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-emerald-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/80 shadow-xl shadow-gray-200/50">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-4">
                                {t(`specialists.${specialist.key}.name`)}{" "}
                                <span className="bg-linear-to-r from-sky-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                                  {t(`specialists.${specialist.key}.lastName`)}
                                </span>
                              </h3>
                              <div className="flex items-center gap-3 mt-4">
                                <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"></div>
                                <div className="h-1.5 w-2 bg-sky-400 rounded-full"></div>
                                <div className="h-1.5 w-2 bg-emerald-400 rounded-full"></div>
                              </div>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                              {t(`specialists.${specialist.key}.description`)}
                            </p>
                            <a
                              href={specialist.link}
                              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
                            >
                              <span>{t("specialists.readMore")}</span>
                              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Modern image presentation */}
                    <div className="relative order-1 lg:order-2">
                      <div className="relative">
                        {/* Animated gradient rings */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-sky-300/30 via-blue-300/20 to-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -inset-3 bg-gradient-to-tr from-sky-200/40 to-emerald-200/40 rounded-full blur-2xl"></div>

                        {/* Image container with modern styling */}
                        <div className={`relative overflow-hidden rounded-full shadow-2xl aspect-square ${specialist.imageSize} mx-auto scale-90 ring-8 ring-white/60 backdrop-blur-sm`}>
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-emerald-500/5 rounded-full z-20"></div>

                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full z-20"></div>

                          <Image
                            src={specialist.image}
                            alt={`${t(`specialists.${specialist.key}.name`)} ${t(`specialists.${specialist.key}.lastName`)}`}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover relative z-10"
                            style={
                              specialist.image === "/assets/rabbani.png"
                                ? { objectPosition: "center 30%" }
                                : specialist.image === "/assets/mondol.png"
                                  ? { objectPosition: "center 35%" }
                                  : { objectPosition: "center center" }
                            }
                            loading="lazy"
                            quality={85}
                            sizes="(max-width: 1024px) 100vw, 500px"
                          />
                        </div>

                        {/* Floating accent elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-sky-400/40 to-sky-300/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400/40 to-emerald-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                        {/* Corner decorative dots */}
                        <div className="absolute top-0 right-0 w-3 h-3 bg-sky-400 rounded-full shadow-lg shadow-sky-400/50"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
