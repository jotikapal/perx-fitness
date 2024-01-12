import React, { useState,useEffect } from 'react'
import image from './photo-1550345332-09e3ac987658.avif'
import icon from './icons8-tick-30.png'
import { Link } from 'react-scroll'

const AboutMe = () => {
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
        <>
            <section id="aboutMe" className="bg-white text-black w-full pb-12">
                <div className=" mx-8 md:mx-auto px-8 items-center md:flex md:flex-row ">
                    <div className="w-full mx-auto mb-6 md:w-5/12 lg:w-4/12 xl:w-4/12"> {/*    */}
                        <div className="">
                            <img src={image} width="469" height="704" className={`  md:max-w-full ${isMobile ? 'w-11/12' : ''} rounded-lg shadow-lg`} />
                        </div>
                    </div>
                    <div className="w-full mx-auto md:w-6/12 lg:w-6/12 xl:w-5/12 md:pl-6 lg:pl-12">  {/*  */}
                        <div className="">
                            <small className='text-orange-500'>About me</small>
                            <h2 className='text-4xl md:text-5xl uppercase font-bold mb-4 md:mb-6'>BE YOUR BEST</h2>
                            <p className=' mt-4 text-lg md:mt-6 md:text-xl leading-relaxed'>Hi, I'm Perx, a certified Personal Trainer with over 10 years of experience in the fitness industry.
                                My training philosophy is centered around three key principles: customized programming,
                                functional training, and education. With my personalized training plans,
                                you'll be able to achieve your fitness goals in a way that works best for your body and lifestyle.
                                Here's what you can expect when working with me:</p>
                            <ul className='list-disc list-inside my-6 md:mb-8 lg:mb-10'>
                                <li className='flex items-start mb-2'>
                                    <div className='bg-orange-500 h-6 w-6 md:h-8 md:w-8 mr-2 flex items-center justify-center rounded-full text-white flex-shrink-0'>
                                        <img src={icon} className='md:w-5 md:h-5 fill-current' />
                                    </div>
                                    <span className='text-lg leading-6 font-medium'>Customized programming tailored to your specific goals and needs</span>
                                </li>
                                <li className='flex items-start mb-2'>
                                    <div className='bg-orange-500 h-6 w-6 md:h-8 md:w-8 mr-2 flex items-center justify-center rounded-full text-white flex-shrink-0'>
                                        <img src={icon} className=' md:w-5 md:h-5 fill-current' />
                                    </div>
                                    <span className='text-lg leading-6 font-medium'>Functional training that will improve your overall fitness and help you move better in your daily life</span>
                                </li>
                                <li className='flex items-start mb-2'>
                                    <div className='bg-orange-500 h-6 w-6 md:h-8 md:w-8 mr-2 flex items-center justify-center rounded-full text-white flex-shrink-0'>
                                        <img src={icon} className=' md:w-5 md:h-5 fill-current' />
                                    </div>
                                    <span className='text-lg leading-6 font-medium'>Education on proper form, nutrition, and mindset to ensure long-term success</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutMe;