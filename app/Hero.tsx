import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='relative w-full h-screen'>
        <div className="absolute top-0 left-0 w-full h-full">
            <video src="/home-vid.mp4" autoPlay loop muted className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full bg-[#00000055] flex flex-col items-center justify-center gap-5 text-center px-5">
            {/* <div className="hero-section h-full w-full flex flex-col items-center justify-center text-center mx-auto space-y-6 p-8 mt-8 mr-72"> */}
                <h1 className="outfit-mainheading hero-text text-white hover:text-teal-500 font-bold text-6xl transition-colors duration-700">
                    AbrenCare
                </h1>
                <p className="hero-description max-w-xl mx-auto text-center text-white teachers-lowerheading mb-5">
                    Välkommen till Abrencare – din partner för personcentrerad vård och omsorg i hemmet.  
                </p>
                <Link href={"/about-us"} className='w-fit px-5 py-2 rounded-full border text-sm uppercase text-white hover:text-black hover:bg-white hover:scale-110 duration-300'>
                    Läs mer
                </Link>

                <Link href="tel:+46736263585 ">
                    <Image className="icon phone-icon w-12 absolute bottom-0 right-0 m-4 z-10" src="/phone-call.png" alt="call" width={48} height={48} />
                </Link>
            {/* </div> */}
        </div>
    </div>
  )
}
