import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white py-12 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-row flex-wrap lg:flex-row justify-between gap-12">
                <div className="max-w-80 flex flex-col gap-6">
                    <Image src="/abren-care.png" alt="AbrenCare Logo" className="w-40" width={160} height={160} />
                    <p className="text-lg leading-6">AbrenCare is a leading provider of home health care services. 
                    We offer a wide range of services to help individuals live independently in the comfort of their own homes.</p>
                </div>
                <div className="max-w-80 flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold">Contact Us</h3>
                    <p className="text-lg leading-6">Galoppgatan 13, 194 30, Upplands Väsby</p>
                    <p className="text-lg leading-6">Phone: +46 73 62 63 585</p>
                    <p className="text-lg leading-6">Phone: +46 73 576 25 35</p>
                    <p className="text-lg leading-6">Email: info@abrencare.se</p>
                    <div className="flex gap-5 text-white text-4xl">
                        <Link href="https://www.facebook.com/people/Abrencare/61565673178900/"><FaFacebook /></Link>
                        <Link href="https://www.linkedin.com/in/abren-care-39a844327/"><FaLinkedin /></Link>
                        <Link href="https://www.instagram.com/abrencareinfo/"><FaInstagram /></Link>
                    </div>
                </div>
                <div className="max-w-80 flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold">snabblänkar</h3>
                    <Link href="/" className="text-lg leading-6 hover:text-teal-300">Home</Link>
                    <Link href="/en/about-us" className="text-lg leading-6 hover:text-teal-300">About Us</Link>
                    <Link href="#services" className="text-lg leading-6 hover:text-teal-300">Services</Link>
                    <Link href="#contact" className="text-lg leading-6 hover:text-teal-300">Contact</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
