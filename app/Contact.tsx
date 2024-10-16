'use client'
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [msg, setMsg] = useState('')
    const [user_name, setUserName] = useState('')
    const [user_email, setUserEmail] = useState('')
    const [user_phone, setUserPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        emailjs.send("service_8pz9hrl","template_y7q4kca",{
                user_name,
                user_email,
                user_phone,
                message,
            },
            {
                publicKey: 'UpOQUZ-1rDWjBj3YI',
            }
        )
          .then(
            (result) => {
              console.log(result.text);
              setMsg("Ditt meddelande har skickats. Tack!");
              setUserName('');
              setUserEmail('');
              setUserPhone('');
              setMessage('');
            },
            (error) => {
              console.log(error);
            }
          );
      };
  return (
    <div className="relative w-full min-h-screen flex flex-col xl:flex-row 2xl:flex-row bg-[url('/contact-us-image.png')] overflow-visible px-5" id="contact">
        <div className="flex-[1] flex flex-col justify-end px-5 md:px-[100px] py-[70px]">
            <p className="text-4xl font-bold text-white">Du är alltid välkommen att <span className="text-[#54b3ba]">kontakta oss!</span></p>
        </div>

        <div className="flex-[1.5] relative">
            <div className="2xl:w-[600px] xl:w-[500px] h-screen bg-white rounded-lg translate-y-20 px-[50px] py-[100px]">
                {msg && <p className="absolute w-[90%] text-center top-10 left-1/2 -translate-x-1/2 text-base font-bold text-white bg-green-500 px-5 py-1 rounded-full">{msg}</p>}
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center gap-[80px]" >
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="text" name="user_name" id="name" placeholder="namn" required value={user_name} onChange={(e) => setUserName(e.target.value)} />
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="email" name="user_email" id="email" placeholder="E-post" required value={user_email} onChange={(e) => setUserEmail(e.target.value)} />
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="tel" name="user_phone" id="phone" placeholder="Telefon" required value={user_phone} onChange={(e) => setUserPhone(e.target.value)} />
                    <input className="w-full outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999]" type="text" name="message" id="message" placeholder="Meddelande" required value={message} onChange={(e) => setMessage(e.target.value)} />
                    {/* <!-- <textarea className="outline-none border-b border-[#54b3ba] text-xl py-1 font-medium placeholder:text-[#999] name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea> --> */}
                    <button type='submit' className="w-fit bg-[#54b3ba] text-white text-2xl py-4 px-10">Skicka</button>
                </form>
            </div>
        </div>
    </div>
  )
}
