import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Banner() {
  return (
    
    <>
    <br/>
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-8 px-8 py-6">
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
      </div>
    <p className='mt-10 text-3xl font-semibold ml-6'>Meet Our Specialists: </p>
    <Carousel className='h-120 sm:h-200 md:h-120'>
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
