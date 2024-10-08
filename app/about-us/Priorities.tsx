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
            <p className='text-center text-xl'>På Abrencare strävar vi efter att erbjuda personcentrerad vård och omsorg av hög kvalitet i hemmet. Vi värdesätter och respekterar varje individs unika behov och önskemål genom att skapa en trygg och tillitsfull miljö där kunden alltid står i fokus. Vi kombinerar vår erfarenhet, kompetens och empati för att säkerställa att varje kund får den vård och omsorg de förtjänar. Hos oss är individen aktiv i sin genomförandeplan och vi prioriterar alltid kundens rätt att själv bestämma. Vi strävar efter att skapa en miljö där kundens gränser respekteras och där de känner sig värdiga och respekterade.</p>
        </div>
    </div>
  )
}
