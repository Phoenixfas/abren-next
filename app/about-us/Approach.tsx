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
            <p className='text-lg font-medium'>På Abrencare värdesätter vi personcentrerad omvårdnad där varje individ behandlas med respekt och värdighet. Vi skapar individanpassade vårdplaner utifrån dina behov och önskemål för att säkerställa trygghet, kvalitet och kontinuitet i vår vård och omsorg. Vi erbjuder flerspråkig personal och följer strikta kvalitets- och säkerhetsrutiner enligt branschstandarder för att garantera högsta standard i vårt arbete. Vi på Abrencare prioriterar flera viktiga områden för att säkerställa hög kvalitet och effektivitet i vår vård och omsorg:</p>
        </div>
        <div className="relative hidden lg:block w-1/2">
            <Image src="/dr.png" alt="Image" className="w-full max-h-[700px] object-contain" width={500} height={600} quality={100} unoptimized />
        </div>
    </div>
  )
}
