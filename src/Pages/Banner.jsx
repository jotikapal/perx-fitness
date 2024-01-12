import React, { useState } from 'react'
import bannerImg from './runners-silhouettes-athletes-fitness-39308.jpeg'


const Banner = () => {
    return (
        <>
            <section id="banner" className=" flex-col pt-16 mb-10 md:pt-24 md:pb-20 flex content-center items-center justify-center ">
                    <div className='w-full flex'>
                        <img src={bannerImg} height="600" width='400' className=' w-full'/>
                        {/* <span className='absolute top-0 opacity-75 bg-black w-full h-full '></span> */}
                    </div> 
                <div className="text-conatiner absolute mx-auto">
                    <div className="text-spacing-conatiner items-center flex flex-wrap">
                        <div className='text-fit-container w-full px-4 text-center'>
                            <h1 className='text-white font-semibold text-5xl'>Ready for a <span className='text-orange-500'>Change</span></h1>
                            <p className='mt-4 text-lg text-gray-300 '>Start now with our customized fitness program</p>
                            <button className='text-white mt-2 inline-block bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none font-medium text-xl rounded-lg px-3 py-1.5 md:px-5 md:py-2.5 text-center mr-3  '>Stories</button>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )

}
export default Banner;