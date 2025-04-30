import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import React from 'react'
import Card from './Card'
import Footer from './Footer'

const Article1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location=useLocation();
    const {img,title,logo,user_name,time,para,para2,para3}=location.state || {};
    return (
        <>
            <div className='w-screen  h-auto bg-white   flex flex-col justify-start items-center gap-10 py-10'>
                <div className="w-[80vw] sm:w-[70vw] h-[30vh] sm:h-[40vh] md:h-[40vh]  border-black lg:h-[60vh] rounded-xl bg-cover bg-center"  style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center',backgroundSize: 'cover'
                              }}></div>
                <div className=' w-[90vw] md:w-[80vw] h-auto'>
                    <h1 className='text-2xl md:text-5xl font-bold  border-black sm:pl-10 md:pl-10 lg:pl-16'>{title}</h1>
                    <div className="  mt-4 flex items-center gap-1 sm:gap-5  text-sm sm:text-lg w-full sm:w-full border-black sm:pl-8 md:pl-10 lg:pl-16">
                        <p
                            className='text-gray-600 mt-2 text-sm h-10 w-10 rounded-full sm:h-16 sm:w-16   border-black'
                           style={{backgroundImage: `url(${logo})`,backgroundPosition:"center",backgroundSize:"cover"}}
                            >

                        </p>
                        <div className="text-black text-sm sm:text-lg flex gap-4">
                            <h1 className=" font-bold">{user_name} </h1>
                            <h1>{time}</h1>
                            <li>3 Min Read</li>
                        </div>
                    </div>

                    <div className='w-[90%] h-auto  border-red-500 mx-auto mt-10 flex flex-col gap-5'>

                        <h1 className='text-xl md:text-4xl font-bold'>Title 1</h1>

                        <p className='text-lg md:text-xl text-gray-600'>{para}</p>
                        <h1 className='text-2xl md:text-4xl font-bold'>Title 2</h1>

                        <p className='text-lg md:text-xl text-gray-600'>{para2}</p>
                        <p className='text-lg md:text-xl text-gray-600'>{para3}</p>
                

                        <div className='text-lg md:text-2xl text-gray-600 font-bold'>
                            <li>Vast horizons call to those unafraid of the unknown.</li>
                            <li>Every mile driven etches a new story into the soul.</li>
                            <li>Adventure lives in the roar of engines and the thrill of discovery.</li>
                        </div>

                    </div>


                </div>
                <h1 className='bg-white text-4xl font-medium px-10 py-5'>New Technology</h1>
                <Card />

            </div>
            <Footer />
        </>
    )
}

export default Article1
