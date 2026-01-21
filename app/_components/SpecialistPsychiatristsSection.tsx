"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const specialists = [
  {
    name: "Prof. Dr. Mohit",
    lastName: "Kamal",
    description:
      "Prof. Dr. M A Mohit Kamal is a distinguished psychiatrist and psychotherapist with extensive experience in mental health care. As a Senior Chief Consultant at LABAID Cardiac Hospital, he provides comprehensive psychiatric care and psychotherapy services.",
    image: "/assets/kamal.png",
    link: "/muhitkamal",
    imageSize: "max-w-md",
  },
  {
    name: "Prof. Dr. Golam",
    lastName: "Rabbani",
    description:
      "Prof. Dr. Golam Rabbani is a distinguished psychiatrist and mental health specialist with extensive experience in psychiatric care and psychotherapy. As Chief Consultant at Brain and Life Hospital, he provides comprehensive mental health services with a patient-centered approach and evidence-based treatments.",
    image: "/assets/rabbani.png",
    link: "/golamrabbani",
    imageSize: "max-w-lg",
  },
  {
    name: "Prof. Dr. Mahadeb Chandra",
    lastName: "Mandal",
    description:
      "Prof. Dr. Mahadeb Chandra Mandal is a renowned psychiatrist and mental health expert with extensive experience in clinical psychiatry and psychotherapy. As Senior Consultant at Brain and Life Hospital, he specializes in comprehensive mental health care with a focus on evidence-based treatments and patient recovery.",
    image: "/assets/mondol.png",
    link: "/mandal",
    imageSize: "max-w-md",
  },
];

export default function SpecialistPsychiatristsSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_55%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
            Our Expert Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Specialist Psychiatrists
            </span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Nationally recognized consultants in psychiatry and psychotherapy, dedicated to compassionate, evidence-based mental health care.
          </p>
        </div>

        <Carousel
          className="w-full"
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
            {specialists.map((specialist, index) => (
              <CarouselItem key={index}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-4xl lg:text-5xl font-bold text-white">
                        {specialist.name}{" "}
                        <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                          {specialist.lastName}
                        </span>
                      </h3>
                      <p className="text-lg text-slate-200 leading-relaxed">
                        {specialist.description}
                      </p>
                      <a
                        href={specialist.link}
                        className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="relative">
                      <div className={`relative overflow-hidden rounded-full shadow-2xl aspect-square ${specialist.imageSize} mx-auto`}>
                        <Image
                          src={specialist.image}
                          alt={`${specialist.name} ${specialist.lastName}`}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 500px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 text-white border-white/20 hover:border-sky-300/50" />
          <CarouselNext className="right-4 text-white border-white/20 hover:border-sky-300/50" />
        </Carousel>
      </div>
    </section>
  );
}
