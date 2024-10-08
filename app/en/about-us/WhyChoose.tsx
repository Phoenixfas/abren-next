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
            WHY <span className="text-[#54b3ba]"> CHOOSE</span> Abrencare?
            </h1>

            <div className="the-line bg-[#54b3ba] absolute h-1 w-32 justify-center z-40 top-20 "></div>
        </div>
            <div className="relative flex justify-center gap-6 flex-wrap py-10">
            
                {/* <!-- Card 1 --> */}
                <div className=" bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer ">
                
                    {/* <Image src="/clock.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Approved by IVO</h2>
                        <p className="text-gray-700">We are certified and controlled by the Inspectorate for Care and Care, which guarantees that we follow the highest standards in care and care.</p>
                    </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                    
                    {/* <Image src="/customer-service.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                
                    <div>
                        <h2 className="text-xl font-bold mb-2">Licensed Caregiver</h2>
                        <p className="text-gray-700">Our licensing means that we meet all requirements and guidelines to offer safe and quality care.</p>
                    </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div className="bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                
                    {/* <Image src="/quality.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Experienced staff</h2>
                        <p className="text-gray-700">Our team consists of professional and experienced nurses and nursing staff who are dedicated to providing you with the best possible care.</p>
                    </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div className="bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                
                    {/* <Image src="/quality.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Individualized care</h2>
                        <p className="text-gray-700">We tailor our services to your needs and circumstances, to ensure that you receive the care and support you need.</p>
                    </div>
                </div>
            </div>

        </div>
  )
}
