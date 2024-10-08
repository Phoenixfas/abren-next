'use client'
import { FormEvent, useState } from 'react'

export default function Contact() {
    const [msg, setMsg] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMsg('Tack för ditt meddelande! Vi återkommer så snart som möjligt.')
        alert(msg)
    }
  return (
    <div className="relative w-full min-h-screen flex flex-col xl:flex-row 2xl:flex-row bg-[url('/contact-us-image.png')] overflow-visible px-5" id="contact">
        <div className="flex-[1] flex flex-col justify-end px-5 md:px-[100px] py-[70px]">
            <p className="text-4xl font-bold text-white">Du är alltid välkommen att <span className="text-[#54b3ba]">kontakta oss!</span></p>
        </div>

        <div className="flex-[1.5] relative">
            <div className="2xl:w-[600px] xl:w-[500px] h-screen bg-white rounded-lg translate-y-20 px-[50px] py-[100px]">
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center gap-[80px]" >
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="text" name="name" id="name" placeholder="namn" />
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="email" name="email" id="email" placeholder="E-post" />
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="tel" name="phone" id="phone" placeholder="Telefon" />
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="text" name="message" id="message" placeholder="Meddelande" />
                    {/* <!-- <textarea className="outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999] name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea> --> */}
                    <button type='submit' className="w-fit bg-[#54b3ba] text-white text-2xl py-4 px-10">Skicka</button>
                </form>
            </div>
        </div>
    </div>
  )
}
