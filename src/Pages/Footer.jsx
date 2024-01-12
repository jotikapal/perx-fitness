import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-black '>
                <div className='mx-auto w-full pt-8 pb-8 px-10'>   {/* sm:px-4 */}
                    <div className=' md:flex md:justify-between '> {/* md:flex md:justify-between */}
                        <div className='mb-6 '>    {/*mb:mb-0 */}
                            <Link className="text-sm font-bold items-center leading-relaxed flex mr-4 whitespace-nowrap uppercase text-gray-200">
                                <svg class="text-orange-500 w-16 h-10 m-0 " fill="currentColor" stroke stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"> </path>
                                </svg>
                                <p className='text-xl font-semibold whitespace-nowrap dark:text-white'>Perx fitness</p>
                            </Link>
                        </div>
                        <div className='grid sm:grid-cols-3 grid-cols-2 gap-8 text-center'> {/* sm:gap-6 sm:grid-cols-3 */}
                            <div>
                                <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>Resources</h2>
                                <ul className='text-gray-600 dark:text-gray-400'>
                                    <li className='mb-4'>
                                        <Link className='hover:underline'>Flowbite</Link>
                                    </li>
                                    <li className=''>
                                        <Link className='hover:underline'>Tailwind CSS</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>Follow us</h2>
                                <ul className='text-gray-600 dark:text-gray-400'>
                                <li className='mb-4'>
                                        <Link className='hover:underline'>Github</Link>
                                    </li>
                                    <li className=''>
                                        <Link className='hover:underline'>Discord</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <h2 className='mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white'>Legal</h2>
                                <ul className='text-gray-600 dark:text-gray-400'>
                                <li className='mb-4'>
                                        <Link className='hover:underline'>Impressum</Link>
                                    </li>
                                    <li className=''>
                                        <Link to="" className='hover:underline'>Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='my-6 border-gray-800 sm:mx-auto lg:my-8' />
                    <div className=' text-center'>
                        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2023 Lorem Ipsum</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;

// to='/allClient'