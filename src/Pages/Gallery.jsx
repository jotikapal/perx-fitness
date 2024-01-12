import React, { useState } from 'react'
import firstImg from './gallery1.avif'
import secImg from './gallery2.avif'
import thirdImg from './gallery3.avif'
import fourthImg from './gallery4.avif'
import fifthImg from './gallery5.avif'
import sixthImg from './gallery6.avif'
import { Link } from 'react-scroll'

const Gallery = () => {

    return (
        <>
        <section id="gallery" className='pt-20 sm:pb-32 pb-20'>
             <div className='mx-auto md:px-32 '>  {/* md:px-32 */}
                <div className='flex flex-wrap text-center justify-center sm:px-20 px-14'>
                    <h2 className='uppercase text-4xl font-semibold '>Gallery</h2>
                    <p className='text-gray-400 text-lg leading-relaxed mt-4 mb-4'>A picture is worth a thousand words, and our image gallery speaks volumes about the success of our clients. Check it out for inspiration and motivation on your own fitness journey.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 pt-16 gap-8 px-10'>
                    <div className=''>
                        <img src={firstImg} className='rounded-lg shadow-lg' />
                    </div>
                    <div className=''>
                        <img src={secImg} className='rounded-lg shadow-lg' />
                    </div>
                    <div className=''>
                        <img src={thirdImg} className='rounded-lg shadow-lg' />
                    </div>
                    <div className=''>
                        <img src={fourthImg} className='rounded-lg shadow-lg' />
                    </div>
                    <div className=''>
                        <img src={fifthImg} className='rounded-lg shadow-lg' />
                    </div>
                    <div className=''>
                        <img src={sixthImg} className='rounded-lg shadow-lg' />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Gallery;