import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <div className="absolute w-full h-full">
          <video src="/about-vid.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full bg-[#000000aa] flex flex-col items-center justify-center px-5">
            <h1 className='text-center text-6xl text-white'>ABOUT US</h1>

            <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
        </div>
    </div>
  )
}
