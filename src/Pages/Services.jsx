import React, { useState,useEffect } from 'react'
import Image from './service-pic.webp'
import { Link } from 'react-scroll'

const Services = () => {
    const [isMobile, setIsMobile] =useState(false)

    useEffect(() => {
        const handleResize = () => {
              setIsMobile(window.screen.width <= 640)
          };
   
          window.addEventListener('resize', handleResize)
          handleResize();
          // return() => {
          //     window.removeEventListener('resize', handleResize)
          // }
      },[])
    
    return (
        <section id="services" className='mb-12'>
            <div className=" w-full ">
                <div className="md:flex md:flex-row justify-center">
                    <div className="w-full xl:w-1/2">
                        <img src={Image} className="w-full h-full inset-0 xl:block shadow-lg" />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <div className='md:flex md:flex-row justify-center'>

                            <div className='w-full md:w-1/2 flex flex-col flex-wrap'>
                                <div className='bg-gray-900 px-20 py-16 sm:p-16 text-white'>
                                    <svg class="text-orange-500 mb-4 h-12" fill="currentColor" stroke stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"> </path>
                                    </svg>
                                    <h4 className='text-xl font-semibold text-white mb-4 uppercase'>NUTRITION COACHING</h4>
                                    <p className='text-lg text-gray-400 leading-relaxed'>Personalized meal plans tailored to your goals and dietary restrictions.</p>
                                </div>
                                <div className='bg-black px-20 py-16 sm:p-16 text-white' height="330px">
                                    <svg class="text-orange-500 mb-4 h-12" fill="currentColor" stroke stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 642 512">
                                        <path d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"> </path>
                                    </svg>
                                    <h4 className='text-xl font-semibold text-white mb-4 uppercase'>HIIT FITNESS</h4>
                                    <p className='text-lg text-gray-400 leading-relaxed'>High-intensity interval training for maximum calorie burn.</p>
                                </div>
                            </div>

                            <div className={`w-full md:w-1/2 lg:mb-0 ${isMobile ? 'flex-col-reverse flex' : ' '}`}>
                                <div className=' bg-black px-20 py-16 sm:p-16 text-white ' height="330px">
                                    <svg class="text-orange-500 mb-4 h-12" fill="currentColor" stroke stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"> </path>
                                    </svg>
                                    <h4 className='text-xl font-semibold text-white mb-4 uppercase'>AGILITY</h4>
                                    <p className='text-lg text-gray-400 leading-relaxed'>Training to improve athletic performance and speed .</p>
                                </div>
                                <div className='px-20 py-16 bg-gray-900 sm:p-16 text-white' height="330px">
                                    <svg class="text-orange-500 mb-4 h-12" fill="currentColor" stroke stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"> </path>
                                    </svg>
                                    <h4 className='text-xl font-semibold text-white mb-4 uppercase'>STRENGTH</h4>
                                    <p className='text-lg text-gray-400 leading-relaxed'>Resistance training to build muscle and improve overall fitness.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </section >

    )

}
export default Services;