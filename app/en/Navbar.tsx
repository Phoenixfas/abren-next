'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
        <nav className="absolute left-0 top-0 z-[9999999] w-full sm:px-10 md:px-20">
            <div className="flex justify-between items-center gap-8">
            <div className="nav__logo">
                <Link href={"/en"}><Image src="/abren-care.png" className="w-40" alt="logo" width={160} height={160}/></Link>
            </div>
            <div className="hidden lg:flex gap-20 items-center ">
                <ul className="flex items-center gap-10 text-white text-xl">
                    <li className="hover:text-teal-500 duration-300"><Link href="/en" >Home</Link></li>
                    <li className="hover:text-teal-500 duration-300"><Link href="/en/about-us" >About-us</Link></li>
                    <li className="hover:text-teal-500 duration-300"><Link href="#services" >Service</Link></li>
                    <li className="hover:text-teal-500 duration-300"><Link href="#contact" >Contact</Link></li>
                </ul>
                <ul className="flex gap-2 font-bold text-xl ">
                    <li className="nav__item "><Link href="/en" className="to-english text-white hover:text-teal-500 flex items-center gap-2">En<Image src="/us.png" alt="us-lang" className="w-5" width={20} height={20} /></Link></li><span className="text-white">/</span>
                    <li className="nav__item"><Link href="/" className="to-swedish text-white hover:text-teal-500 flex items-center gap-2">Se<Image src="/sweden.png" alt="us-lang" className="w-5" width={20} height={20} /></Link></li>
                </ul>
            </div>
            <div className="sm:flex lg:hidden text-white text-3xl px-2 py-1 border-2 border-white rounded-lg" id="nav-toggle" onClick={() => setIsOpen(true)}>
                <RiMenuFill />
            </div>
            </div>
            <div className={`absolute top-0 right-0 duration-300 ${isOpen ? "translate-x-0" : "translate-x-[100%]"} flex flex-col items-center gap-10 text-white bg-teal-500 w-full py-20`} id="mobile-nav">
                <div className="absolute top-3 right-3 text-3xl" id="nav-close" onClick={() => setIsOpen(false)}>
                    <RiCloseFill />
                </div>
                <Link href="/en" >Home</Link>
                <Link href="/en/about-us" >About-us</Link>
                <Link href="#services" >Service</Link>
                <Link href="#contact" >Contact</Link>
                <ul className="flex gap-2 font-bold text-xl ">
                    <li className="nav__item"><Link href="/en" className="to-english text-white hover:text-teal-500 flex items-center gap-2">En<Image src="/us.png" alt="us-lang" className="w-5" width={20} height={20} /></Link></li><span className="text-white">/</span>
                    <li className="nav__item"><Link href="/" className="to-swedish text-white hover:text-teal-500 flex items-center gap-2">Se<Image src="/sweden.png" alt="us-lang" className="w-5" width={20} height={20} /></Link></li>
                </ul>
            </div>
        </nav>
  )
}