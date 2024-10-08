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
                <span>OUR</span> <span className="text-[#54b3ba]"> PRIORITIES</span>
                <div className="absolute bottom-0 h-2 w-40 bg-[#54b3ba]"></div>
            </h2>
            <p className='text-center text-xl'>At Abrencare, we strive to offer person-centered care and high-quality care in the home. 
              We value and respect each individual&apos;s unique needs and wishes by creating a safe and trusting 
              environment where the customer is always in focus. We combine our experience, competence and 
              empathy to ensure that each client receives the care and attention they deserve. With us, the 
              individual is active in his implementation plan and we always prioritize the customer&apos;s 
              right to decide for himself. We strive to create an environment where the customer&apos;s 
              boundaries are respected and where they feel worthy and respected.</p>
        </div>
    </div>
  )
}
