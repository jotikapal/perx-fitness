import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isMobile, setIsMobile] =useState(false)

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
      const handleResize = () => {
            setIsMobile(window.screen.width <= 768)
        };
 
        window.addEventListener('resize', handleResize)
        handleResize();
        // return() => {
        //     window.removeEventListener('resize', handleResize)
        // }
    },[])
console.log(isMobile,"isMobile")
    return (
        <div className="px-2 py-2.5 fixed bg-white w-full z-20 top-0 left-0 border-b border-gray-200 flex flex-row Navbar-Container">
            <div className="spacing-Container flex-row flex items-center justify-between mx-auto w-full">
                <div className=" logo-container items-center leading-relaxed flex text-black">
                    <svg class="text-orange-500  w-16 h-10 m-0 cursor-pointer " fill="currentColor" stroke stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"> </path>
                    </svg>
                    <p className="text-xl cursor-pointer flex font-semibold whitespace-nowrap">PERX FITNESS</p>
                </div>
                <div className='md:static absolute top-[50px] md:top-[65px] left-0 w-full md:w-fit lg:items-center lg:justify-center flex nav-list bg-[#ffffff] '>
                    <ul className={` flex gap-2.5  md:flex-row flex-col p-4 rounded-lg bg-grey-50 ${isMobile ? (showMenu ? 'block' : 'hidden') : ''}`}>
                        <li className='cursor-pointer font-semibold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:text-orange-500'>
                            <Link to='aboutMe' smooth={true} duration={600}>About</Link></li>
                        <li className='cursor-pointer font-semibold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:text-orange-500'>
                            <Link to='services' smooth={true} duration={600}>Training</Link></li>
                        <li className='cursor-pointer font-semibold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:text-orange-500'>
                            <Link to='timeline' smooth={true} duration={600}>Timeline</Link></li>
                        <li className='cursor-pointer font-semibold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:text-orange-500'>
                            <Link to='stories' smooth={true} duration={600}>Stories</Link></li>
                        <li className='cursor-pointer font-semibold text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:text-orange-500'>
                            <Link to='gallery' smooth={true} duration={600}>Gallery</Link></li>
                    </ul>
                </div>
                <div className='contact flex mr-5'>
                    <button className='text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none font-semibold px-2.5 md:font-medium md:text-xl rounded-lg md:px-5 md:py-2.5 text-center'>
                        <Link to='contact'>Contact</Link></button>
                    <button onClick={handleToggle} className='ml-3 inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Navbar;