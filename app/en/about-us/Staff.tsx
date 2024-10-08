import Image from 'next/image'
import React from 'react'

export default function Staff() {
  return (
    <div className="bg-[#eceff1] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our <span className="text-[#54b3ba]">leadership</span></h2>
                <p className="mt-6 text-lg leading-6 text-gray-600">At Abrencare, our experienced team of healthcare, social work, and 
                  administrative professionals is dedicated to providing high-quality services in a safe and 
                  trusting environment. We are passionate about making a positive difference and improving 
                  the quality of life and well-being for our clients and their families.</p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li>
                <div className="flex items-center gap-x-6">
                    <Image className="h-16 w-16 rounded-full" src="/nurse-avatar.jpg" alt="img" width={500} height={500} />
                    <div>
                    <a href="mailto:melat@abrencare.se"><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">melat@abrencare.se</h3></a>
                    <p className="text-sm font-semibold leading-6 text-[#54b3ba]">CEO / Manager</p>
                    </div>
                </div>
                </li>
        

                <li>
                    <div className="flex items-center gap-x-6">
                    <Image className="h-16 w-16 rounded-full" src="/man-avatar.jpg" alt="img" width={500} height={500} />
                    <div>
                        <a href="mailto:israel@abrencare.se"><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">israel@abrencare.se</h3></a>
                        <p className="text-sm font-semibold leading-6 text-[#54b3ba]">Head of unit</p>
                    </div>
                    </div>
                </li>

                <li>
                    <div className="flex items-center gap-x-6">
                    <Image className="h-16 w-16 rounded-full" src="/man-avatar2.jpg" alt="img" width={500} height={500} />
                    <div>
                        <a href="mailto:coordinator@abrencare.se"><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">coordinator@abrencare.se</h3></a>
                        <p className="text-sm font-semibold leading-6 text-[#54b3ba]">Coordinator</p>
                    </div>
                    </div>
                </li>

                <li>
                    <div className="flex items-center gap-x-6">
                    <Image className="h-16 w-16 rounded-full" src="/nurse-avatar2.jpg" alt="img" width={500} height={500} />
                    <div>
                        <a href="mailto:kvalitet@abrencare.se"><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">kvalitet@abrencare.se</h3></a>
                        <p className="text-sm font-semibold leading-6 text-[#54b3ba]">Quality, education and deviations</p>
                    </div>
                    </div>
                </li>

                <li>
                    <div className="flex items-center gap-x-6">
                    <Image className="h-16 w-16 rounded-full" src="/man-avatar.jpg" alt="img" width={500} height={500} />
                    <div>
                        <a href="mailto:info@abrencare.se"><h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">info@abrencare.se</h3></a>
                        <p className="text-sm font-semibold leading-6 text-[#54b3ba]">Economics / IT</p>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
