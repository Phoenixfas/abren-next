import React from 'react'

export default function Marquee() {
  return (
    <div className="marquee w-full h-20 flex items-center bg-[#54b3ba]">
        <div className="marquee-content text-3xl">
            <span>Patientnöjdhet</span> &#8226; 
            <span>Effektivitet</span> &#8226; 
            <span>Säkerhet</span> &#8226; 
            <span>Evidensbaserad vård</span> &#8226; 
            <span>Teamwork och kommunikation</span>
        </div>
    </div>
  )
}
