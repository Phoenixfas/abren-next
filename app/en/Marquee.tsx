import React from 'react'

export default function Marquee() {
  return (
    <div className="marquee w-full h-20 flex items-center bg-[#54b3ba]">
        <div className="marquee-content text-3xl">
            <span>Our most important focus areas in the improvement work are</span> &#8226; 
            <span>Patient satisfaction</span> &#8226; 
            <span>Efficiency</span> &#8226; 
            <span>Safety</span> &#8226; 
            <span>Evidence-based care</span> &#8226; 
            <span>Teamwork and communication</span>
        </div>
    </div>
  )
}
