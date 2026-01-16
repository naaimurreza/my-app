"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Doctors() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Psychiatrist",
      description:
        "Leading our medical team with over 20 years of experience in psychiatry, specializing in complex mental health disorders and treatment planning.",
      image: "/assets/main female doctor1.png",
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Psychologist",
      description:
        "Expert in cognitive behavioral therapy and trauma treatment, helping patients develop coping strategies and achieve mental wellness.",
      image: "/assets/main male doctor2.png",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Psychiatric Specialist",
      description:
        "Specializing in mood disorders and anxiety treatments, providing comprehensive care with a focus on patient-centered recovery.",
      image: "/assets/main female doctor.jpg",
    },
    {
      name: "Dr. David Thompson",
      role: "Mental Health Consultant",
      description:
        "Focused on integrative treatment approaches, combining medication management with therapeutic interventions for optimal patient outcomes.",
      image: "/assets/main male doctor3.jpg",
    },
    {
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description:
        "Dedicated to adolescent and family mental health, providing compassionate care and support for comprehensive healing journeys.",
      image: "/assets/main male doctor4.jpg",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          <div className="flex-1 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our nursing team
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Meet our{" "}
              <span className="text-blue-600">compassionate doctors</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Our skilled medical professionals provide 24/7 care, combining
              medical expertise with empathy to support patients through every
              step of their mental health journey.
            </p>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
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
                      <Card className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center gap-3 p-6">
                          <div className="relative">
                            <div
                              className="absolute -inset-2 rounded-full bg-blue-200/50 blur-md"
                              aria-hidden="true"
                            />
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-semibold text-slate-900">
                              {doctor.name}
                            </p>
                            <p className="text-xs uppercase tracking-wide text-blue-600 mt-1">
                              {doctor.role}
                            </p>
                            <p className="mt-3 text-xs text-slate-600 max-w-xs">
                              {doctor.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
