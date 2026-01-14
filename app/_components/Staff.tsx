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
    <div className="container flex flex-col md:flex-row items-center justify-between gap-10 py-10">
      <div className="flex-1">
        <p className="text-4xl">
          Meet Our <span className="text-blue-600">Amazing</span> Team
        </p>
        <p className="text-lg pt-4">
          Our dedicated team of professionals is here to provide you with exceptional care and support.
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center gap-2 p-6">
                      <img src="/assets/sujon.png" alt="Shujon Howlader" />
                      <p className="text-2xl">Shujon Howlader</p>
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
  )
}

