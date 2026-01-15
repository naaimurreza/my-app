"use client"

import React from 'react'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Banner() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
    <br/>
    <div className="container mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="flex flex-wrap items-center justify-center gap-8 px-8 py-6">
        <Image src="/assets/lifeandlight.png" width={50} height={50} alt="Life and Light logo" />
        <Image src="/assets/brainandlifelogo.png" width={50} height={50} alt="Brain and Life logo" />
        <Image src="/assets/lifeandlight.png" width={50} height={50} alt="Life and Light logo" />
        <Image src="/assets/brainandlifelogo.png" width={50} height={50} alt="Brain and Life logo" />
        <Image src="/assets/lifeandlight.png" width={50} height={50} alt="Life and Light logo" />
        <Image src="/assets/brainandlifelogo.png" width={50} height={50} alt="Brain and Life logo" />
        <Image src="/assets/lifeandlight.png" width={50} height={50} alt="Life and Light logo" />
        <Image src="/assets/brainandlifelogo.png" width={50} height={50} alt="Brain and Life logo" />
        <Image src="/assets/lifeandlight.png" width={50} height={50} alt="Life and Light logo" />
        <Image src="/assets/brainandlifelogo.png" width={50} height={50} alt="Brain and Life logo" />
      </div> */}
<div className='text-center max-w-3xl mx-auto mb-5'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold px-4'>
                Meet Our <span className='text-blue-600'>Specialists</span> 
              </h1>
            </div> 
      <Carousel
      className='h-120 sm:h-200 md:h-120'
      plugins={[autoplayPlugin.current]}
      onMouseEnter={autoplayPlugin.current.stop}
      onMouseLeave={autoplayPlugin.current.reset}
    >
  <CarouselContent>
    <CarouselItem><div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>

            <div className='mx-auto'>
              <h1 className='text-6xl font-semibold mb-4'>Prof. Dr. Muhit <span className='text-blue-600'>Kamal</span></h1>
              <p className='mb-6'>Speciality 
MBBS, M.Phil. (Psyche), FCPS (Psychiatry) 

Professor of Psychotherapy, 

Senior -Chief Consultant (Psychiatry & Psychotherapy) 

LABAID Cardiac Hospital.

Former Head of Psychotherapy;

Former Academic Course Director MD (Psychiatry);

Former Director, National Institute of Mental Health, Dhaka.</p>
<a href="/muhitkamal"
                className='inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
              >
                Read more
              </a>
            </div>
            <div>
              <Image src="/assets/kamal.png" alt="Brain and Life Hospital logo" height={600} width={460} className='bg-gray-300 rounded-full'/>
            </div>
          </div>
        </div></CarouselItem>
    <CarouselItem><div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>

            <div className='mx-auto'>
              <h1 className='text-6xl font-semibold mb-4'>Prof. Dr. Golam <span className='text-blue-600'>Rabbani</span></h1>
              <p className='mb-6'>Academic Qualification:
MBBS: Rajshahi Medical College, University of Rajshahi, Bangladesh
FCPS: Bangladesh College of Physicians and Surgeon</p>
<a href="/golamrabbani"
                className='inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
              >
                Read more
              </a>
            </div>
            <div>
              <Image src="/assets/rabbani.png" alt="Brain and Life Hospital logo" height={100} width={500}/>
            </div>
          </div>
        </div></CarouselItem>
    <CarouselItem><div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>

            <div className='mx-auto'>
              <h1 className='text-6xl font-semibold mb-4'>Prof. Dr. Mahadeb Chandra <span className='text-blue-600'>Mandal</span></h1>
              <p className='mb-6'>Academic Qualification:
MBBS: Rajshahi Medical College, University of Rajshahi, Bangladesh
FCPS: Bangladesh College of Physicians and Surgeon</p>
<a href="/mandal"
                className='inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
              >
                Read more
              </a>
            </div>
            <div>
              <Image src="/assets/mondol.png" alt="Brain and Life Hospital logo" height={100} width={500} className='bg-gray-300 rounded-full'/>
            </div>
          </div>
        </div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

</div>
        
    </>
  )
}
