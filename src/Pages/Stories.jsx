import React, { useState, useEffect } from 'react'
import leftIcon from './icons8-arrow -left-24.png'
import rightIcon from './icons8-arrow-24.png'
import image from './photo-1567013127542-490d757e51fc.avif'
import { Link } from 'react-scroll'


const StoriesData = ({ data }) => {
    console.log(data,"data")
    const [isMobile, setIsMobile] =useState(false)

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
    return (
        <>
            <div className={`px-10 md:px-8 w-full ${isMobile ? 'mt-8' : ''}`}>
                <div className='flex flex-wrap justify-center text-center mb-4 '>
                    <div className='w-full lg:w-6/12'>
                        <h2 className='text-4xl font-semibold uppercase'>STORIES</h2>
                        <p className='text-lg italic leading-relaxed my-4'>{data.description}</p>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center'>
                    <div className='w-full px-6'>
                        <img src={data.image} className='shadow-lg rounded-full h-20 w-20 mx-auto' />
                        <div className='pt-6 text-center'>
                            <h5 className='text-xl font-bold'>{data.name}</h5>
                            <p className='mt-1 text-sm text-orange-500 uppercase font-semibold'>LOREM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Stories = () => {
    const [data,setData] = useState([
        {
            name: "Lorem lpsum",
            image: image,
            description: "Working with Perx has been a game changer for me. Thanks to their personalized training program, I've been able to achieve my fitness goals and feel more confident and empowered in my body than ever before."
        },
        {
            name: "Ipsum",
            image: image,
            description: 'The training is awesome every time. I feel better than ever before'
        }
    ])
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
       setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
    }
    const handlenNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex))
    }
    console.log(currentIndex,"currentIdex")
    return (
        <>
            <section id="stories" className="pt-20 pb-30">
                <div className='flex justify-center flex-wrap'>
                    <div className='flex justify-center mb-8 '>
                        <button
                            onClick={handlePrev}
                            className='bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 md:py-3 pr-4 pl-3 absolute left-0 rounded-l md:flex-row md:flex'>
                            <img src={leftIcon} width="25" className='md:mr-1' />Prev
                        </button>
                        <button
                             onClick={handlenNext}  
                            className='bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 md:py-3 pl-4 pr-3 absolute rounded-r right-0 md:flex-row md:flex'>Next
                            <img src={rightIcon} width="25" className='md:ml-1' />
                        </button>
                    </div>
                    <StoriesData data={data[currentIndex]} />
                </div>
            </section>
        </>
    )
}
export default Stories;