import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Contact = () => {
    return (
        <>
            <section id="contact" className="relative bg-black pb-20 mt-20 block">
                {/* <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden mt-20" height="80px" transform="translateZ(0px)" >
                        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div> */}
                <div className='mx-auto md:px-4 px-16 pt-24'>  {/*  pb-20 */}
                    <div className='flex flex-wrap text-center justify-center'>
                        <div className='w-full lg:w-6/12 px-4'>
                            <h2 className='text-4xl font-semibold uppercase text-gray-400'>CONTACT</h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">Have a question or want to learn more about my services? Don't hesitate to reach out using the contact form below. I'm here to support you on your fitness journey.</p>
                        </div>
                    </div>
                </div>
            </section>
            <form>
                <div className='lg:pt-0 bg-black pb-24 '>    {/*py-24  */}
                    <div className='mx-auto px-4 justify-center flex'>
                        <div className='flex flex-wrap w-11/12 md:w-6/12 sm:w-10/12 justify-center '> {/* lg:mt-64 mt-48 */}
                            <div className='w-full lg:w-6/12 px-4 bg-orange-500 flex-auto p-4 lg:p-10 text-gray-200'>
                                <p className='leading-relaxed mt-1 mb-4 text-gray-200 '>Ready to get started on your fitness journey? Simply fill out the fields below, and we'll be in touch shortly to discuss how we can help you achieve your goals.</p>
                                <form action="https://api.web3forms.com/submit" method="POST">
                                    <input type="hidden" name="access_key" value="7c720be2-7766-4eae-b17f-1bdd8dce2112"></input>
                                    <div className='w-full mb-3 mt-8'>
                                        <label className='uppercase text-xs font-bold mb-2 text-gray-200 ' for="full-name">Name</label>
                                        <input className='px-3 py-3 text-black bg-white rounded text-sm shadow w-full' id='full-name' type='text' placeholder='Name' />
                                    </div>
                                    <div className='w-full mb-3'>
                                        <label className='uppercase text-xs font-bold mb-2 text-gray-200' for="email">email</label>
                                        <input className='px-3 py-3 text-black bg-white rounded text-sm shadow w-full' id='email' type='email' placeholder='Email' />
                                    </div>
                                    <div className='w-full mb-3'>
                                        <label className='uppercase text-xs font-bold mb-2 text-gray-200' for="message">message</label>
                                        <textarea rows="4" cols="80" placeholder='Write a message' className='px-3 py-3 text-black bg-white rounded text-sm shadow w-full' id='message' type='email' />
                                    </div>
                                    <div className='justify-center flex'>
                                        <button className='bg-gray-900 text-white active:bg-gray-700 mr-1 mb-1 rounded px-6 py-3 shadow font-bold uppercase text-sm hover:shadow-lg' type='submit'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )

}
export default Contact;