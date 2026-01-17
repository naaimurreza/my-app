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

export default function Banner() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <br />
      <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8 h-260 md:h-180 lg:h-190">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Our Expert Team
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Meet Our <span className="text-blue-600">Specialist Psychiatrists</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nationally recognized consultants in psychiatry and psychotherapy, dedicated to compassionate, evidence-based mental health care.
          </p>
        </div>
        <Carousel
          className="h-120 sm:h-200 md:h-120"
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="mx-auto">
                    <h1 className="text-6xl font-semibold mb-4">
                      Prof. Dr. Muhit{" "}
                      <span className="text-blue-600">Kamal</span>
                    </h1>
                    <p className="mb-6">
                      {" "}
                      Prof. Dr. M A Mohit Kamal is a distinguished psychiatrist
                      and psychotherapist with extensive experience in mental
                      health care. As a Senior Chief Consultant at LABAID
                      Cardiac Hospital, he provides comprehensive psychiatric
                      care and psychotherapy services.
                    </p>
                    <a
                      href="/muhitkamal"
                      className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Read more
                    </a>
                  </div>
                  <div>
                    <Image
                      src="/assets/kamal.png"
                      alt="Brain and Life Hospital logo"
                      height={600}
                      width={460}
                      className="bg-gray-300 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="mx-auto">
                    <h1 className="text-6xl font-semibold mb-4">
                      Prof. Dr. Golam{" "}
                      <span className="text-blue-600">Rabbani</span>
                    </h1>
                    <p className="mb-6">
                      Prof. Dr. Golam Rabbani is a distinguished psychiatrist
                      and mental health specialist with extensive experience in
                      psychiatric care and psychotherapy. As Chief Consultant at
                      Brain and Life Hospital, he provides comprehensive mental
                      health services with a patient-centered approach and
                      evidence-based treatments.
                    </p>
                    <a
                      href="/golamrabbani"
                      className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Read more
                    </a>
                  </div>
                  <div>
                    <Image
                      src="/assets/rabbani.png"
                      alt="Brain and Life Hospital logo"
                      height={100}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="mx-auto">
                    <h1 className="text-6xl font-semibold mb-4">
                      Prof. Dr. Mahadeb Chandra{" "}
                      <span className="text-blue-600">Mandal</span>
                    </h1>
                    <p className="mb-6">
                      Prof. Dr. Mahadeb Chandra Mandal is a renowned
                      psychiatrist and mental health expert with extensive
                      experience in clinical psychiatry and psychotherapy. As
                      Senior Consultant at Brain and Life Hospital, he
                      specializes in comprehensive mental health care with a
                      focus on evidence-based treatments and patient recovery.
                    </p>
                    <a
                      href="/mandal"
                      className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Read more
                    </a>
                  </div>
                  <div>
                    <Image
                      src="/assets/mondol.png"
                      alt="Brain and Life Hospital logo"
                      height={100}
                      width={500}
                      className="bg-gray-300 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
