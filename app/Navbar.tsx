import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
        <nav className="relative w-full sm:px-10 md:px-20">
            <div className="flex justify-between items-center gap-8">
            <div className="nav__logo">
                <a href="#"><Image src="/abren-care.png" className="w-40" alt="logo" width={160} height={160}/></a>
            </div>
            <div className="nav-links gap-20 items-center ">
                <ul className="flex items-center gap-10 text-white text-xl">
                <li className="hover:text-teal-500 duration-300"><a href="#home" >Hem</a></li>
                <li className="hover:text-teal-500 duration-300"><a href="about-us.html" >Om oss</a></li>
                <li className="hover:text-teal-500 duration-300"><a href="#services" >Tjänster</a></li>
                <li className="hover:text-teal-500 duration-300"><a href="#contact" >Kontakt</a></li>
                </ul>
                <ul className="flex gap-2 font-bold text-xl ">
                <li className="nav__item "><a href="./english-index.html" className="to-english text-white hover:text-teal-500 flex items-center gap-2">En<img src="./asset/us.png" alt="us-lang" className="w-5" /></a></li><span className="text-white">/</span>
                <li className="nav__item"><a href="./index.html" className="to-swedish text-white hover:text-teal-500 flex items-center gap-2">Se<img src="./asset/sweden.png" alt="us-lang" className="w-5" /></a></li>
                </ul>
            </div>
            <div className="sm:flex lg:hidden text-white text-3xl px-2 py-1 border-2 border-white rounded-lg" id="nav-toggle">
                <i className="ri-menu-fill"></i>
            </div>
            </div>
            <div className="absolute top-0 right-0 duration-300 translate-x-[100%] flex flex-col items-center gap-10 text-white bg-teal-500 w-full py-20" id="mobile-nav">
            <div className="absolute top-3 right-3 text-3xl" id="nav-close">
                <i className="ri-close-fill"></i>
            </div>
            <a href="#home" >Hem</a>
            <a href="about-us.html" >Om oss</a>
            <a href="#services" >Tjänster</a>
            <a href="#contact" >Kontakt</a>
            <ul className="flex gap-2 font-bold text-xl ">
                <li className="nav__item"><a href="./english-index.html" className="to-english text-white hover:text-teal-500 flex items-center gap-2">En<img src="./asset/us.png" alt="us-lang" className="w-5" /></a></li><span className="text-white">/</span>
                <li className="nav__item"><a href="./index.html" className="to-swedish text-white hover:text-teal-500 flex items-center gap-2">Se<img src="./asset/sweden.png" alt="us-lang" className="w-5" /></a></li>
            </ul>
            </div>
        </nav>
  )
}
