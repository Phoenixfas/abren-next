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
                <h2 className='relative text-4xl font-bold'>WELCOME</h2>
                <div className='bg-[#54b3ba] absolute h-1 w-32 z-40 bottom-0'></div>
            </div>
            <p className='text-base font-light'>Welcome to Abrencare – your partner for person-centred care and care at home. With a focus on security, 
      quality and continuity, we offer tailor-made services in home health care, home care and 
      nursing care to meet your individual needs and wishes. Explore our services today and discover 
      how we can help you and your loved ones get the care and concern you deserve. 
      Abren Care AB is a private company run by experienced nurses, sociologists, 
      coordinators and economists with extensive experience in home health care, 
      elderly care and emergency nursing work. We strive to deliver high quality nursing 
      and care for our clients through our broad expertise and dedication.</p>
        </div>
    </div>
  )
}
