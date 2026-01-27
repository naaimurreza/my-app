"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "../_contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function DoctorsCarouselSection() {
  const { t } = useLanguage();
  
  const doctors = [
    {
      nameKey: "doctors.doctor1.name",
      roleKey: "doctors.doctor1.role",
      descriptionKey: "doctors.doctor1.description",
      image: "/assets/doctor1.png",
    },
    {
      nameKey: "doctors.doctor2.name",
      roleKey: "doctors.doctor2.role",
      descriptionKey: "doctors.doctor2.description",
      image: "/assets/doctor2.png",
    },
    {
      nameKey: "doctors.doctor3.name",
      roleKey: "doctors.doctor3.role",
      descriptionKey: "doctors.doctor3.description",
      image: "/assets/doctor3.jpg",
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_60%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
              {t("doctors.badge")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {t("doctors.title")}
            </h2>
            <p className="text-lg text-gray-700">
              {t("doctors.description")}
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
                      <Card className="border border-gray-200 bg-white shadow-xl shadow-gray-200/50 hover:border-sky-300 transition-all">
                        <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                          <div className="relative">
                            <div
                              className="absolute -inset-3 rounded-full bg-linear-to-r from-sky-100 to-indigo-100 blur-xl"
                              aria-hidden="true"
                            />
                            <Image
                              src={doctor.image}
                              alt={t(doctor.nameKey)}
                              width={144}
                              height={144}
                              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-lg border-4 border-gray-200"
                              loading="lazy"
                              quality={85}
                              sizes="(max-width: 768px) 128px, 144px"
                            />
                          </div>
                          <div className="text-center space-y-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {t(doctor.nameKey)}
                            </h3>
                            <p className="text-xs uppercase tracking-wide text-sky-600">
                              {t(doctor.roleKey)}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                              {t(doctor.descriptionKey)}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-gray-700" />
              <CarouselNext className="text-gray-700" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
