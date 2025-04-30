import React from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import blogs from "../api/source";
const Blogs = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <>


            <div className='bg-white   border-red-500 '>
                <div className="  border-blue-500 text-white  w-full h-[50vh] sm:h-[60vh]   lg:h-[70vh] bg-[url('/images/Rectangle.png')] bg-cover bg-center  ">
                    <div className=' h-[100%] w-[50%] flex flex-col gap-4  lg:gap-8 pl-5 py-2'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Let's Drive </h1>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>On Your Way</h1>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>With Beast</h1>

                        <p className=' md:text-lg xl:text-xl  overflow-hidden h-[40%] scrollbar-none  '>Our car blog provides a comprehensive guide to everything automotive. From the latest models and in-depth reviews to expert tips on car maintenance, we offer a wealth of knowledge for car enthusiasts and everyday drivers alike. Whether you're looking for the best performance upgrades, eco-friendly electric vehicle insights, or reviews on the newest SUVs, we’ve got you covered. Our team of passionate writers shares their experience, providing tips on how to extend your vehicle’s lifespan, improve performance, and navigate the ever-evolving automotive industry. Join our community of car lovers, and stay updated with the latest trends, news, and reviews that will help you make the best decisions for your driving experience.</p>
                        <NavLink to={'/subscribe'}><button className='bg-[#ff5959] text-white   md:text-xl  md:font-bold  md:px-5  md:py-2 lg:py-5 rounded-xl py-1 w-24  md:w-48' >Subscribe</button>
                        </NavLink>


                    </div>




                </div>
                <div className=' w-full bg-white text-black p-5 flex flex-col flex-wrap  border-yellow-500'>
                    <h1 className='text-5xl font-medium'>All Posts</h1>

                    <ul>
                        {blogs.map((ele) => {


                            return (
                                <li key={ele.id}>
                                    <div className='w-full    lg:h-96  border-black py-4 mt-5 flex flex-col  md:flex-row md:px-5 gap-5'>
                                    <div className='w-[70vw] rounded-xl  md:mx-auto ml-5 h-52 sm:h-72 md:w-[50%] md:h-72 lg:h-80  border-red-500  bg-cover bg-center' style={{ backgroundImage: `url(${ele.img})` }}>

                                        </div>

                                        {/* <div
                                            className="w-[80vw] sm:w-[70vw] md:w-[40%]  ml-5 sm:ml-5 md:ml-0 md:mx-auto  h-40 sm:h-64 md:h-72 lg:h-80   bg-cover bg-center bg-no-repeat rounded-xl"
                                            style={{ backgroundImage: `url(${ele.img})` }}
                                        >
                                        </div> */}

                                        <div className="  border-black md:w-[70%] ml-5 flex flex-col gap-2 ">
                                            <h1 className='text-xl lg:text-2xl xl:text-4xl font-bold'>{ele.title}  </h1>
                                            <div className="mt-4 flex items-center gap-5 ">
                                                <p
                                                    className='text-gray-600 mt-2 text-sm h-10 w-10 rounded-full truncate'
                                                    style={{ backgroundImage: `url(${ele.logo})`, backgroundPosition: "center", backgroundSize: "cover" }}
                                                >

                                                </p>
                                                <div className="text-black">
                                                    <h1 className=" font-bold">{ele.user_name}</h1>
                                                    <h1>{ele.time}</h1>
                                                </div>
                                            </div>

                                            <h1 className='text-md lg:text-lg xl:text-xl overflow-hidden h-28    lg:h-72 '>{ele.heading}</h1>
                                            <NavLink to={"/article1"} state={{
                                                img: ele.img,
                                                title: ele.title,
                                                heading: ele.heading,
                                                user_name: ele.user_name,
                                                logo: ele.logo,
                                                time: ele.time,
                                                para:ele.para,
                                                para2:ele.para2,
                                                para3:ele.para3
                                            }}><button className='bg-red-500 w-52 text-white px-5 py-2 rounded-lg'>Read Full Article...</button></NavLink>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>



                </div>


            </div>
            <Footer />



        </>


    )
}

export default Blogs
