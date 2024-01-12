import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Timeline = () => {
  
    return (
        <>
            <section id="timeline" className=" md:mx-auto mx-5 px-8 md:px-32 py-24 bg-gray-100">
                <div className='flex flex-wrap justify-center text-center mb-4'>
                    <div className='w-full lg:w-6/12'>
                        <h2 className="text-4xl font-semibold uppercase">LOREM TIMELINE</h2>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-black"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla dapibus ipsum vel augue luctus, quis tincidunt magna bibendum.
                            Donec vitae ultricies metus. Suspendisse potenti. In vehicula augue sed metus tincidunt, a lacinia velit feugiat.
                            Nam lacinia elit in lacus efficitur posuere. Phasellus ac mi vel justo interdum dictum.</p>
                    </div>
                    <div className='relative mt-12 items-center w-full text-left'>  {/* wrap overflow-hidden */}
                        {/* <div className='border-2-2 absolute center border-opacity-20 border-gray-700 h-full border ' ></div>  style="left:50%" */}

                        <div className='mb-8 flex justify-between items-center w-full'>
                            <div className='order-1 w-5/12'></div>
                            <div className=' flex items-center order-1 bg-orange-500 shadow-xl w-10 h-10 rounded-full'>
                                <h1 className='mx-auto font-semibold text-lg text-white'>1</h1>
                            </div>
                            <div className='order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4'>
                                <h3 className='mb-3 font-semibold uppercase text-white text-lg'>INQUIRY</h3>
                                <p className='md:tracking-tight mb-2 text-lg text-gray-400 leading-6 md:leading-relaxed '>Get started by submitting an inquiry. 
                                We'll discuss your fitness goals and preferences.</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full'>
                            <div className='bg-gray-900 rounded-lg w-5/12 px-6 py-4 shadow-xl'>
                                <h3 className='text-white text-lg font-semibold uppercase mb-3'>CONSULTATION</h3>
                                <p className='mb-2 text-lg text-gray-400 md:tracking-tight leading-6 md:leading-relaxed'>In this first meeting, we'll chat more about your goals and develop a plan.</p>
                            </div>
                            <div className='flex items-center bg-orange-500 rounded-full w-10 h-10 shadow-xl'>
                                <h1 className='mx-auto font-semibold text-lg text-white'>2</h1>
                            </div>
                            <div className='w-5/12'></div>
                        </div>

                        <div className='mb-8 flex justify-between items-center w-full'>
                            <div className='order-1 w-5/12'></div>
                            <div className=' flex items-center order-1 bg-orange-500 shadow-xl w-10 h-10 rounded-full'>
                                <h1 className='mx-auto font-semibold text-lg text-white'>3</h1>
                            </div>
                            <div className='order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4'>
                                <h3 className='mb-3 font-semibold uppercase text-white text-lg'>ASSESSMENT</h3>
                                <p className='md:tracking-tight mb-2 text-lg text-gray-400 leading-6 md:leading-relaxed '>A detailed evaluation of your current fitness level to customize a training program.</p>
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full'>
                            <div className='bg-gray-900 rounded-lg w-5/12 px-6 py-4 shadow-xl'>
                                <h3 className='text-white text-lg font-semibold uppercase mb-3'>PLAN</h3>
                                <p className='mb-2 text-lg text-gray-400 md:tracking-tight leading-6 md:leading-relaxed'>Based on your goals and assessment, we'll create a customized workout plan for you.</p>
                            </div>
                            <div className='flex items-center bg-orange-500 rounded-full w-10 h-10 shadow-xl'>
                                <h1 className='mx-auto font-semibold text-lg text-white'>4</h1>
                            </div>
                            <div className='w-5/12'></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Timeline;