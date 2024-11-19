import Image from 'next/image'
import React from 'react'

export default function Approach() {
  return (
    <div className="relative w-full h-fit py-10 px-5 md:px-20 bg-gray-300 flex items-center gap-10 overflow-hidden">
        <Image src="/ribbon.png" alt="Image" className="absolute w-full max-h-[80%] object-contain" width={1280} height={720} quality={100} />
        <div className="relative w-full lg:w-3/4 h-fit flex flex-col gap-10 rounded-xl p-5 sm:p-10">
            <div className="relative pb-5 flex flex-col">
                <h2 className='relative text-5xl font-bold'>Förfinad operativ metod</h2>
                <div className='bg-[#54b3ba] absolute h-1 w-32 z-40 bottom-0'></div>
            </div>
            <p className='text-lg font-medium'>På Abrencare är vi dedikerade att erbjuda personcentrerad vård där varje individ bemöts med respekt och värdighet. Vår flerspråkiga personal följer strikta kvalitetsrutiner, och vårt arbete bygger på Socialstyrelsens nationella värdegrund samt de krav och förväntningar som våra kunder ställer på oss. Vi säkerställer att alla insatser håller högsta kvalitet genom att följa fastställda kvalitetsgarantier. Vi prioriterar att ha kompetent och empatisk personal och vi respekterar alltid varje kunds rätt till självbestämmande och delaktighet i vården.</p>
        </div>
        <div className="relative hidden lg:block w-1/2">
            <Image src="/dr.png" alt="Image" className="w-full max-h-[700px] object-contain" width={500} height={600} quality={100} unoptimized />
        </div>
    </div>
  )
}
