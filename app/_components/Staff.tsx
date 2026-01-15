"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Staff() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          <div className="flex-1 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our care team
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              Meet our <span className="text-blue-600">dedicated professionals</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Behind every recovery story is a multidisciplinary team of psychiatrists,
              psychologists, nurses, and support staff who listen deeply and care consistently.
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
                {Array.from({ length: 5 }).map((_, index) => (
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
                              src="/assets/sujon.png"
                              alt="Shujon Howlader"
                              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-semibold text-slate-900">
                              Shujon Howlader
                            </p>
                            <p className="text-xs uppercase tracking-wide text-blue-600 mt-1">
                              Staff
                            </p>
                            <p className="mt-3 text-xs text-slate-600 max-w-xs">
                              Providing calm, patient‑centred support on every shift so that
                              individuals feel safe, heard, and respected.
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
  )
}

