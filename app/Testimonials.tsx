'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

export default function Testimonials() {
  // Create the keenSlider reference and state
  useEffect(() => {
    // Initialize KeenSlider only when the component is rendered in the client
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    })

    // Get the navigation buttons after the component is mounted
    const keenSliderPrevious = document.getElementById('keen-slider-previous')
    const keenSliderNext = document.getElementById('keen-slider-next')

    // Add event listeners for navigation buttons
    if (keenSliderPrevious && keenSliderNext) {
      keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
      keenSliderNext.addEventListener('click', () => keenSlider.next())
    }

    // Cleanup function to remove event listeners when the component is unmounted
    return () => {
      if (keenSliderPrevious && keenSliderNext) {
        keenSliderPrevious.removeEventListener('click', () => keenSlider.prev())
        keenSliderNext.removeEventListener('click', () => keenSlider.next())
      }
    }
  }, [])
  return (
    <div className="bg-gray-100">
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl pb-9">
                    <span>VAD SÄGER </span> <span className="text-[#54b3ba]">ANDRA?</span>
                </h2>

                <div className="mt-8 flex gap-4 lg:mt-0">
                    <button aria-label="Previous slide" id="keen-slider-previous" className="rounded-full border border-green-400 p-5  transition hover:bg-green-200 " >
                        <Image src="/left-arrow.png" className="w-5" alt='img' width={20} height={20} />
                    </button>

                    <button aria-label="Next slide" id="keen-slider-next" className="rounded-full border border-green-400 p-5  transition hover:bg-green-200 ">
                        <Image src="/right-arrow.png" className="w-5" alt='img' width={20} height={20} />
                    </button>
                </div>
            </div>
            <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0 ">
                <div id="keen-slider" className="keen-slider">

                    {/* <!-- first testimonial  --> */}
                    <div className="keen-slider__slide">
                        <blockquote className="flex h-full flex-col justify-between bg-white p-6  sm:p-8 lg:p-12 shadow-2xl rounded-lg border-black">
                            <div >
                                <Image src="/gustav-image.jpg" alt="Testimonial Image 1" className=" w-24 h-24 rounded-full mx-auto mb-4 object-cover -ml-0" width={500} height={500} />
                                <div className="flex gap-0.5 text-[#54b3ba]">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <div className="mt-4 ">
                                    <p className="outfit-mainheading text-2xl font-bold text-black sm:text-3xl">Gustav Andersson</p>

                                    <p className="mt-4 leading-relaxed text-gray-700"> Att samarbeta med AbrenCare har varit en givande upplevelse. Deras engagemang för personcentrerad vård, professionell personal och efterlevnad av branschstandarder säkerställer enastående service. Vårt samarbete präglas av tydlig kommunikation, effektivt teamwork och en delad hängivenhet att förbättra liv. AbrenCare är en pålitlig partner när det gäller att leverera vård av hög kvalitet, och vi ser fram emot att fortsätta arbeta tillsammans. </p>
                                </div>
                            </div>

                            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; Gustav Andersson
                            </footer>
                        </blockquote>
                    </div>

                    {/* <!-- second testimonial --> */}
                    <div className="keen-slider__slide">
            <blockquote
                className="flex h-full flex-col justify-between bg-white p-6  sm:p-8 lg:p-12  shadow-2xl rounded-lg border-black"
            >
                <div>

                <Image src="/erik-image.jpg" alt="Testimonial Image 1" className=" w-24 h-24 rounded-full mx-auto mb-4 object-cover -ml-0" width={500} height={500} />
                <div className="flex gap-0.5 text-[#54b3ba]">
                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>
                </div>

                <div className="mt-4">
                    <p className="oufit-mainheading text-2xl font-bold text-black sm:text-3xl">Erik Johansson</p>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    AbrenCare överträffade mina förväntningar på alla sätt. Deras professionella men ändå 
                    medkännande tillvägagångssätt fick mig att känna mig uppskattad och respekterad från början. 
                    Tack vare deras vård av hög kvalitet som levererades i bekvämligheten av mitt eget hem 
                    kände jag mig stöttad och stärkt under hela min resa. Jag rekommenderar starkt AbrenCare 
                    till alla som söker personligt anpassad och medkännande hemsjukvård.
                    </p>
                </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Erik Johansson
                </footer>
            </blockquote>
                    </div>

                    {/* <!-- third testimonial --> */}
                    <div className="keen-slider__slide">
            <blockquote
                className="flex h-full flex-col justify-between bg-white p-6  sm:p-8 lg:p-12 shadow-2xl rounded-lg border-black ">
                <div>

                <Image src="/anna-image.jpg" alt="Testimonial Image 1" className=" w-24 h-24 rounded-full mx-auto mb-4 object-cover -ml-0" width={500} height={500} />
                <div className="flex gap-0.5 text-[#54b3ba]">
                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>

                    <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                    </svg>
                </div>

                <div className="mt-4">
                    <p className="text-2xl font-bold text-black sm:text-3xl">Anna Lundgren</p>

                    <p className="mt-4 leading-relaxed text-gray-700">
                    Deras engagemang för personcentrerad vård är uppenbart i varje interaktion. Oavsett om det handlade 
                    om hjälp med medicinska behov, hjälp med dagliga aktiviteter eller helt enkelt att erbjuda sällskap, 
                    gick de alltid utöver för att säkerställa mitt välbefinnande. Tack vare AbrenCare kunde jag få den 
                    vård jag behövde i bekvämligheten av mitt eget hem, vilket gjorde all skillnad i min återhämtningsresa.
                    </p>
                </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Anna Lundgren
                </footer>
            </blockquote>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
