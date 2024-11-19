import Image from 'next/image'
import React from 'react'

export default function Welcome() {
  return (
    <div className="relative w-full h-fit py-10 px-5 md:px-40 bg-gray-300 flex items-center gap-10 overflow-hidden">
        <Image src="/ribbon.png" alt="Image" className="absolute w-full object-contain" width={1280} height={720} quality={100} />
        <div className="relative hidden lg:block w-1/2">
            <Image src="/nurse-old-man-posing-while-looking-camera.png" alt="Image" className="w-full max-h-[700px] object-contain" width={500} height={600} quality={100} />
        </div>
        <div className="relative w-full lg:w-2/3 h-fit flex flex-col items-center gap-10 text-center bg-white rounded-xl p-10">
            <div className="relative pb-5 flex flex-col items-center ">
                <h2 className='relative text-4xl font-bold'>VÄLKOMMEN</h2>
                <div className='bg-[#54b3ba] absolute h-1 w-32 z-40 bottom-0'></div>
            </div>
            <p className='text-base font-light'>
              <b className='font-bold'>Välkommen till Abrencare – Din pålitliga vårdgivare för personcentrerad vård och omsorg i hemmet.</b>
              <br/>
              Abren Care AB är ett privat företag som drivs av erfarna distriktssköterskor, socionomer, samordnare och ekonomer med lång erfarenhet inom hemsjukvård, äldreomsorg och jourverksamhet. Vi strävar efter att leverera högkvalitativ omvårdnad och omsorg genom lång erfarenhet, kunskap och passion för det vi gör.
              Med fokus på trygghet, kvalitet och kontinuitet erbjuder vi tjänster inom hemsjukvård, hemtjänst och sjuksköterskejour för att möta dina individuella behov och önskemål.
              Läs mer om våra tjänster och kontakta oss för att få veta mer om hur vi kan hjälpa dig och dina närstående.
          </p>
        </div>
    </div>
  )
}
