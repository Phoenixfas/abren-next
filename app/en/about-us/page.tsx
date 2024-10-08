import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from './Hero'
import Priorities from './Priorities'
import Marquee from '../Marquee'
import Approach from './Approach'
import Staff from './Staff'
import Contact from '../Contact'
import Vision from './Vision'
import WhyChoose from './WhyChoose'

export default function page() {
  return (
    <div className="w-full min-h-[100vh] relative">
        <Navbar />
        <Hero />
        <Priorities />
        <Approach />
        <Marquee />
        <Vision />
        <WhyChoose />
        <Staff />
        <Contact />
        <Footer />
    </div>
  )
}
