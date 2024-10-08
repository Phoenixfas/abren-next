import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
  return (
    <div className="relative w-full container mx-auto overflow-hidden px-4 py-5">
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
        <div className="relative p-4 text-center justify-center">
            <h1 className="text-3xl outfit-mainheading mx-auto">
            WHY <span className="text-[#54b3ba]"> CHOOSE</span> US?
            </h1>

            <div className="the-line bg-[#54b3ba] absolute h-1 w-32 justify-center z-40 top-20 "></div>
        </div>
            <div className="relative grid gap-6 md:grid-cols-3 py-10">
            
                {/* <!-- Card 1 --> */}
                <div className=" bg-white p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer ">
                
                    <Image src="/clock.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} /> 
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">24 Hour service</h2>
                        <p className="text-gray-700">At Abrencare, our experienced staff provides exceptional, personalized care. 
                  Trust our skilled professionals to enhance your well-being and quality of life. 
                  Experience the Abrencare difference today.</p>
                    </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="bg-white p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                    
                    <Image src="/customer-service.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} /> 
                
                    <div>
                        <h2 className="text-xl font-bold mb-2">Experienced Staff</h2>
                        <p className="text-gray-700">At Abrencare, our experienced staff provides exceptional, 
                  personalized care. Trust our skilled professionals to enhance your well-being and 
                  quality of life. Experience the Abrencare difference today.</p>
                    </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div className="bg-white p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                
                    <Image src="/quality.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} /> 
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Quality Service</h2>
                        <p className="text-gray-700">We prioritize quality to ensure our services meet the highest standards.</p>
                    </div>
                </div>
            </div>

        </div>
  )
}
