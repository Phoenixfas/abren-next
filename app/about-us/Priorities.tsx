import React from 'react'

export default function Priorities() {
  return (
    <div className="relative w-full mx-auto overflow-hidden px-10 py-20 bg-[#cfd8dc]">
        <div className="absolute w-full min-h-[400px]">
                    
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>
        <div className="relative w-full bg-[#ffffff88] p-8 rounded-xl">
            <h2 className="relative flex gap-5 justify-center pb-5 mb-5 text-center text-wrap break-all sm:break-keep text-4xl md:text-6xl font-bold">
                <span>VÅRA</span> <span className="text-[#54b3ba]"> PRIORITERINGAR</span>
                <div className="absolute bottom-0 h-2 w-40 bg-[#54b3ba]"></div>
            </h2>
            <p className='text-center text-xl'>På Abrencare strävar vi efter att erbjuda personcentrerad vård och omsorg av högsta kvalitet i hemmet. Vi respekterar och värdesätter varje individs unika behov och önskemål, och skapar en trygg och tillitsfull miljö där kunden alltid står i fokus. Genom att kombinera erfarenhet, kompetens och empati säkerställer vi att varje kund får den vård och omsorg de förtjänar. Vi främjar delaktighet och självbestämmande, där individen är aktiv i sin genomförandeplan och har rätt att fatta egna beslut om sin vård.</p>
        </div>
    </div>
  )
}
