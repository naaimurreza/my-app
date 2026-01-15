import React from 'react'

export const ConsultSolution = () => {
  return (
    <section className='bg-gradient-to-r from-blue-50 via-blue-100/80 to-blue-50 mt-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1">
            <p className='text-sm font-semibold tracking-[0.2em] uppercase text-blue-500 mb-3'>
              A message from leadership
            </p>
            <h1 className='text-3xl md:text-4xl font-semibold pb-4 text-slate-900'>
              Hear What Our
              <span className='text-blue-600'> Managing Director </span>
              Has to Say
            </h1>
            <div className="mt-4 rounded-2xl bg-white/80 border border-blue-100 p-5 sm:p-6 shadow-sm">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                “At our hospital, we believe mental health care begins with compassion. Every individual who walks through our doors is treated with dignity, understanding, and respect. Our commitment is not just to heal minds, but to restore hope, purpose, and quality of life.”
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                — Md Fokrul Hossain, Managing Director, Brain And Life Hospital
              </p>
            </div>
          </div>
          <div className='flex-1 flex justify-center md:justify-end'>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-200/50 blur-2xl md:blur-3xl" aria-hidden="true" />
              <img
                className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-full border-4 border-white shadow-xl object-cover'
                src="/assets/md.png"
                width={500}
                height={100}
                alt="Managing Director"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
