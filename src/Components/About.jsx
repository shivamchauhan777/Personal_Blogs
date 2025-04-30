import {React,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import CarGallery from './CarGallery';

const About = () => {
    useEffect(() =>{
        window.scroll(0,0);
    })
    return (
        <section className="w-full  bg-white py-16 px-6 md:px-16">
            <div className="max-w-7xl border-black mx-auto flex flex-col md:flex-row items-center gap-10 h-[100vh] lg:h-[80vh]">
                <div className="md:w-1/2 w-full">
                    <img
                        src="https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        loading="lazy"
                        alt="About Us Car"
                        className="w-full rounded-xl shadow-lg object-cover"
                    />
                </div>
                <div className="md:w-1/2 w-full flex flex-col gap-6">
                    <h2 className="text-4xl font-bold text-gray-900">About Our Cars</h2>
                    <p className="text-gray-600 text-lg">
                        At DriveBeast, we bring you a curated collection of the most advanced, stylish,
                        and powerful cars that match your lifestyle. From comfort to performance, our
                        mission is to help you explore the road with confidence and class.
                    </p>
                    <p className="text-gray-600">
                        With cutting-edge infotainment systems, luxurious interiors, and unmatched driving
                        experience, our vehicles are more than just machines—they’re your next adventure.
                    </p>
                   <NavLink to={"/car"}>
                   <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl w-fit hover:bg-red-600 transition">
                        Explore Our Cars
                    </button>
                   </NavLink>
                </div>
            </div>
        </section>
    );
};

export default About;
