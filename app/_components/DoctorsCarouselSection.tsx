"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const doctors = [
  {
    name: "Dr. Shoab Ahmed Talukdar (Kishor)",
    role: "Medical Officer",
    description: "MBBS, CMU",
    image: "/assets/doctor1.png",
  },
  {
    name: "Dr. Sanaul Huda Riad",
    role: "Medical Officer",
    description: "MBBS, RU",
    image: "/assets/doctor2.png",
  },
  {
    name: "Dr. Farzana Zabin",
    role: "Medical Officer",
    description: "MBBS",
    image: "/assets/doctor3.jpg",
  },
];

export default function DoctorsCarouselSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              Our medical team
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Meet Our{" "}
              <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Compassionate Doctors
              </span>
            </h2>
            <p className="text-lg text-slate-200/85 leading-relaxed">
              Our skilled medical professionals provide 24/7 care, combining
              medical expertise with empathy to support patients through every
              step of their mental health journey.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-sm"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {doctors.map((doctor, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <Card className="border border-white/10 bg-white/5 shadow-xl shadow-slate-950/40 backdrop-blur hover:border-sky-200/40 transition-all">
                        <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                          <div className="relative">
                            <div
                              className="absolute -inset-3 rounded-full bg-linear-to-r from-blue-200/30 to-indigo-200/30 blur-xl"
                              aria-hidden="true"
                            />
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-lg border-4 border-white/20"
                              loading="lazy"
                            />
                          </div>
                          <div className="text-center space-y-2">
                            <h3 className="text-lg font-semibold text-white">
                              {doctor.name}
                            </h3>
                            <p className="text-xs uppercase tracking-wide text-sky-300">
                              {doctor.role}
                            </p>
                            <p className="mt-2 text-sm text-slate-300 max-w-xs">
                              {doctor.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white/20 hover:border-sky-300/50" />
              <CarouselNext className="text-white border-white/20 hover:border-sky-300/50" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
