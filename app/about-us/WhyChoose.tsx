import React from 'react'

export default function WhyChoose() {
  return (
    <div className="relative w-full container mx-auto overflow-hidden px-4 py-5">
        <div className="absolute w-full min-h-[400px]">
                    
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


        </div>
        <div className="relative p-4 text-center justify-center">
            <h1 className="text-3xl outfit-mainheading mx-auto">
            VARFÖR <span className="text-[#54b3ba]"> VÄLJA</span> Abrencare?
            </h1>

            <div className="the-line bg-[#54b3ba] absolute h-1 w-32 justify-center z-40 top-20 "></div>
        </div>
            <div className="relative flex justify-center gap-6 flex-wrap py-10">
            
                {/* <!-- Card 1 --> */}
                <div className=" bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer ">
                
                    {/* <Image src="/clock.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Godkänd av IVO</h2>
                        <p className="text-gray-700">Vi är certifierade och kontrollerade av Inspektionen för Vård och Omsorg, vilket garanterar att vi följer de högsta standarderna inom vård och omsorg.</p>
                    </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                    
                    {/* <Image src="/customer-service.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                
                    <div>
                        <h2 className="text-xl font-bold mb-2">Licensierad Vårdgivare</h2>
                        <p className="text-gray-700">Vår licensiering innebär att vi uppfyller alla krav och riktlinjer för att erbjuda säker och kvalitativ vård.</p>
                    </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div className="bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                
                    {/* <Image src="/quality.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Erfaren Personal</h2>
                        <p className="text-gray-700">Vårt team består av professionella och erfarna sjuksköterskor och vårdpersonal som är dedikerade till att ge dig den bästa möjliga vården.</p>
                    </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div className="bg-white hover:scale-105 duration-300 border border-[#54b3ba] max-w-[250px] p-5 rounded-lg shadow-2xl flex items-center space-x-4 cursor-pointer">
                
                    {/* <Image src="/quality.png" alt="Image" className="mr-4 ml-2 h-20 p-1 w-20" width={80} height={80} />  */}
                    
                    <div>
                        <h2 className="text-xl font-bold mb-2">Individanpassad Vård</h2>
                        <p className="text-gray-700">Vi skräddarsyr våra tjänster efter dina behov och förutsättningar, för att säkerställa att du får den vård och det stöd du behöver.</p>
                    </div>
                </div>
            </div>

        </div>
  )
}
