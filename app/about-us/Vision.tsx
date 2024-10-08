import { GiBullseye } from "react-icons/gi";

export default function Vision() {
  return (
    <div className="relative w-full h-fit py-10 pb-20 px-5 md:px-40 bg-gray-300 flex items-center gap-10 overflow-hidden">
        <div className="relative w-full h-fit flex flex-col items-center gap-5 text-center bg-white rounded-xl p-10 overflow-hidden">
            <GiBullseye className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] text-[#54b3ba55]" />
            <div className="relative flex flex-col items-center ">
                <h2 className='relative text-4xl font-bold'>Vår Vision</h2>
                {/* <div className='bg-[#54b3ba] absolute h-1 w-32 z-40 bottom-0'></div> */}
            </div>
            <p className='text-lg font-normal'>På Abrencare strävar vi efter att erbjuda säker, personlig och tillgänglig vård i hemmet. Med hjärta och kärlek arbetar vi för att förbättra livskvaliteten och ge trygghet dygnet runt. Vårt mål är att vara det självklara valet för dem som söker värme och professionalism i vården.</p>
        </div>
    </div>
  )
}
