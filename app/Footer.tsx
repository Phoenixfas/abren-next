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
                    <p className="text-lg leading-6">På Abrencare erbjuder vi vårdtjänster som hjälper individer att leva självständigt i bekvämligheten av sina egna hem.</p>
                </div>
                <div className="max-w-80 flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold">Kontakta oss</h3>
                    <p className="text-lg leading-6">Galoppgatan 13, 194 30, Upplands Väsby</p>
                    <p className="text-lg leading-6">Phone: +46 73 62 63 585</p>
                    <p className="text-lg leading-6">Phone: +46 73 576 25 35</p>
                    <p className="text-lg leading-6">Email: info@abrencare.se</p>
                    <div className="flex gap-5 text-white text-4xl">
                        <Link href="https://www.facebook.com/people/Abrencare/61565673178900/"><FaFacebook /></Link>
                        <Link href="https://www.linkedin.com/company/abrencare/"><FaLinkedin /></Link>
                        <Link href="https://www.instagram.com/abrencare.se?igsh=MnNmbXFvN21oanAy"><FaInstagram /></Link>
                    </div>
                </div>
                <div className="max-w-80 flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold">snabblänkar</h3>
                    <Link href="/" className="text-lg leading-6 hover:text-teal-300">Hem</Link>
                    <Link href="/about-us" className="text-lg leading-6 hover:text-teal-300">Om oss</Link>
                    <Link href="#services" className="text-lg leading-6 hover:text-teal-300">Tjänster</Link>
                    <Link href="#contact" className="text-lg leading-6 hover:text-teal-300">Kontakt</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
