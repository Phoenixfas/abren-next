import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <div className="bg-[#cfd8dc]" id="services">
        <div className="myservice">
            <h1 className="outfit-mainheading text-center text-bold text-4xl py-10"> 
            SERVICES
            </h1>
            <div className="the-line bg-[#54b3ba] h-1 w-32 justify-center z-40 mx-auto mb-12 "></div>
        </div>
        <div className="container mx-auto my-4 px-4 pb-12">
            <div className="flex flex-wrap justify-center gap-6">
            {/* <!-- Card 1 --> */}
            <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
                <Image src="/nursing-home.png" alt="Image" className="h-24 w-24 mb-4" width={96} height={96} />
                <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Home health <span className="text-[#54b3ba]">care</span></h2>
                <p className="teachers-lowerheading px-8 max-w-prose text-center">
                    Home health care means interventions in the home for: Medicines, Injections, Wound dressing, Sample collection Aims to provide hospital-like care at home.
                </p>
                </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
                <Image src="/home-button.png" alt="Image" className="h-24 w-24 mb-4" width={96} height={96} />
                <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Home service</h2>
                <p className="teachers-lowerheading px-12 max-w-prose text-center">
                    Home care for daily life assistance, including: Purchasing, Cleaning, Laundry, Meals Professional support to ease daily living.
                </p>
                </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center w-full md:w-1/2 lg:w-1/3 ">
                <Image src="/24-hours-support.png" alt="Image" className="h-24 w-24 mb-4" width={96} height={96} />
                <div className="text-center">
                <h2 className="text-2xl font-bold mb-2"><span className="text-[#54b3ba]">24/7 </span>NURSE CALL</h2>
                <p className="teachers-lowerheading px-12 max-w-prose text-center">
                    Abren Care provides on-call nursing services for: Elderly homes, LSS accommodation, Social psychiatry Emergency medical assistance anytime.
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
