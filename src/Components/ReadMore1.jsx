import React from 'react'
import Card from './Card'
import Footer from './Footer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ReadMore1 = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })

    const location = useLocation();

    const { img, title, user_name, time, para, para2, para3, logo } = location.state || {};
    return (
        <>
            <div className='w-screen h-auto bg-white  border-black flex flex-col justify-start items-center gap-10 py-10'>
                {/* <div className="w-[70vw] lg:w-[70vw] h-[40vh]   border-black lg:h-[60vh] " style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover" }}></div> */}
                <div className="w-[70vw] lg:w-[70vw]  h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img})` }}
          ></div>
                <div className=' border-yellow-500 w-[80vw] h-auto'>
                    <h1 className='text-2xl md:text-5xl font-bold pl-2 lg:pl-16'>{title}</h1>
                    <div className="mt-4 flex items-center gap-5 pl-2 ">
                        <p
                            className='text-gray-600 mt-2 text-sm h-10 w-10 rounded-full truncate  border-black '
                            style={{ backgroundImage: `url(${logo})`, backgroundPosition: "center", backgroundSize: "cover" }}
                        >

                        </p>
                        <div className="text-black flex gap-5">
                            <h1 className=" font-bold">{user_name}</h1>
                            <h1>{time}</h1>
                            <li>3 Min Read</li>
                        </div>
                    </div>

                    <div className='w-[90%] h-auto  border-red-500 mx-auto mt-10 flex flex-col gap-5'>

                        <h1 className='text-xl md:text-4xl font-bold'>"The Unforgettable Bond Between Driver, Machine, and Open Road".</h1>

                        <p className='text-lg md:text-xl text-gray-600'>{para}</p>
                        <h1 className='text-2xl md:text-4xl font-bold'>"Chasing Freedom: The Endless Adventure of the Open Road"</h1>

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

export default ReadMore1

