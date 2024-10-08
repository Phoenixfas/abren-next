import Image from 'next/image';
import React from 'react';

export default function Blogs() {
  return (
    <div className="bg-white py-24 sm:py-32" id="news">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="ml-12 max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">News</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Stay up to date with the latest news from Abrencare! We want to get you involved. 
          Visit our news page regularly to keep up to date with current events, promotions and industry news.
          </p>
        </div>
        <div className="flex flex-wrap gap-20 mt-10 justify-center border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          
          {/* Article 1 */}
          <article className="flex flex-col items-start justify-between max-w-xs">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2024-03-20" className="text-gray-500">Mar 20, 2024</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Medical</a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="https://www.medicalnewstoday.com/articles/could-a-new-alzheimers-biomarker-help-diagnose-the-disease-before-symptoms-show">
                  <span className="absolute inset-0"></span>
                  Could a new Alzheimer&apos;s biomarker help diagnose the disease before symptoms show?
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Researchers have identified a new biomarker for Alzheimer&apos;s disease, 
              which could help doctors diagnose it before symptoms start showing.
              </p>
            </div>
            <div className="relative mt-8 flex flex-col items-center gap-x-4">
              <Image src="/nurse-avatar.jpg" alt="img" className="h-10 w-10 rounded-full bg-gray-50 mr-20" width={40} height={40} />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Melat <span className="text-[#54b3ba]">Tilahun</span>
                  </a>
                </p>
                <p className="text-gray-600">CEO / Manager</p>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          {/* <article className="flex flex-col items-start justify-between max-w-xs">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2024-05-19" className="text-gray-500">19 maj 2024</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Ekonomi/ IT</a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="https://www.medicalnewstoday.com/articles/hormone-replacement-therapy-may-improve-pulmonary-hypertension">
                  <span className="absolute inset-0"></span>
                  Kan hormonersättningsterapi hjälpa till att behandla pulmonell hypertoni hos kvinnor?
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Ny forskning tyder på att hormonersättningsterapi (HRT)
                kan förbättra symtomen på pulmonell hypertoni hos kvinnor.
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image src="/unknown-avatar.jpg" alt="img" className="h-10 w-10 rounded-full bg-gray-50 mr-20" width={40} height={40} />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Christopher <span className="text-[#54b3ba]">Gustav</span>
                  </a>
                </p>
                <p className="text-gray-600">Försäljningschef</p>
              </div>
            </div>
          </article> */}

          {/* Article 3 */}
          <article className="flex flex-col items-start justify-between max-w-xs">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2024-05-17" className="text-gray-500">Mar 17, 2024</time>
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Medical</a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="https://www.medicalnewstoday.com/articles/why-are-men-at-higher-diabetes-and-diabetes-complications-risk-than-women">
                  <span className="absolute inset-0"></span>
                  Why are men at higher diabetes, diabetes complications risk than women?
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Two recent studies look at sex differences in diabetes, 
              with one looking at the potential mechanisms that explain why men develop diabetes at lower…
              </p>
            </div>
            <div className="relative mt-8 flex flex-col items-center gap-x-4">
              <Image src="/man-avatar.jpg" alt="img" className="h-10 w-10 rounded-full bg-gray-50 mr-20" width={40} height={40} />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Israel <span className="text-[#54b3ba]"></span>
                  </a>
                </p>
                <p className="text-gray-600">Head of unit</p>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </div>
  );
}
