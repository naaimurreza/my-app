import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-0 pb-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>

            <div className='mx-auto'>
              <h5>- The best mental health solution</h5>
              <h1 className='text-6xl font-semibold mb-5'>Brain And <span className='text-blue-600'>Life</span> Hospital</h1>
              <p className='pb-7'>Where Healing Begins with Understanding.
              At our mental health hospital, we provide compassionate, evidence-based care in a safe and supportive environment. Our dedicated team of professionals is committed to helping individuals restore balance, build resilience, and rediscover hope—because every mind deserves care, dignity, and a path toward a healthier life.</p>
              <ul className="flex gap-2 sm:mb-0 dark:text-gray-300">
              <a href="https://www.facebook.com/share/1DWSRRzXA3/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>
              <a href="https://youtube.com/@brainandlifehospital?si=c8_Ppxrgbkt2p_pS" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@brain.and.life.hos?_r=1&_t=ZS-92z1ZnEbHzp" target="_blank" className='mt-2' >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>
                
              </a>
            </ul >
              <a
                href="/about"
                className='inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
              >
                About
              </a>
              <a
                href="/contact"
                className='inline-block px-6 py-3 ml-9 bg-blue-100 text-gray-900 rounded-md hover:bg-blue-700 hover:text-white transition'
              >
                Contact Us
              </a>
            </div>
            <div>
              <img src="/assets/hospital.png" alt="Brain and Life Hospital logo" height={200} width={550} className='bg-gray-300'/>
            </div>
          </div>
          <hr className='mt-8'/>
        </div>
  )
}
