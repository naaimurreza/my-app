import React from 'react'

export const ConsultSolution = () => {
  return (
    <div className='container bg-blue-100 py-10'>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 p-10">
          <h1 className='text-4xl font-semibold pb-6'>
            Hear What Our<span className='text-blue-600'> Managing Director </span>Has to Say
          </h1>
          <p>“At our hospital, we believe mental health care begins with compassion. Every individual who walks through our doors is treated with dignity, understanding, and respect. Our commitment is not just to heal minds, but to restore hope, purpose, and quality of life.”
          — Managing Director</p>
        </div>
        <div className='flex-1 flex justify-center md:justify-end px-6 md:px-0'>
          <img
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-full mr-0 md:mr-10'
            src="/assets/md.png"
            width={500}
            height={100}
            alt="md photo"
          />
        </div>
      </div>
    </div>
  )
}
