import { useState } from 'react';
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer"
import list from "../api/home";
import { NavLink } from "react-router-dom";
const Home = () => {



  const [selectedId, setSelectedId] = useState(list[0].id); // Track selected item
  const [bgImage, setBgImage] = useState(list[0].img);
  const [head, setHead] = useState(list[0].title);
  const [name, setname] = useState(list[0].name);
  const [time, setTime] = useState(list[0].time);
  const [para, setPara] = useState(list[0].para);
  const [para2, setPar2] = useState(list[0].para2);
  const [para3, setPar3] = useState(list[0].para3);
  const [logo, setLogo] = useState(list[0].logo);

  console.log(bgImage)
  const handleClick = (id, img, title, name, time, logo,para,para2,para3) => {
    setSelectedId(id);
    setBgImage(img);
    setHead(title);
    setname(name);
    setTime(time);
    setLogo(logo);
    setPara(para);
    setPar2(para2);
    setPar3(para3);
    // console.log(bgImage)
  };

  return (

    <>      <div className=' '>
      <div className="text-white w-full h-[50vh] sm:h-[60vh] md:[]   lg:h-[70vh] bg-[url('/images/Hero.png')] bg-cover bg-center  ">
        <div className=' h-[100%] w-[50%] flex flex-col gap-4  lg:gap-8 pl-5 py-2'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Your Journey</h1>
          <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Your Car</h1>
          <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Your Way</h1>

          <p className=' md:text-lg xl:text-xl  overflow-hidden h-[40%] scrollbar-none  '>Our car blog provides a comprehensive guide to everything automotive. From the latest models and in-depth reviews to expert tips on car maintenance, we offer a wealth of knowledge for car enthusiasts and everyday drivers alike. Whether you're looking for the best performance upgrades, eco-friendly electric vehicle insights, or reviews on the newest SUVs, we’ve got you covered. Our team of passionate writers shares their experience, providing tips on how to extend your vehicle’s lifespan, improve performance, and navigate the ever-evolving automotive industry. Join our community of car lovers, and stay updated with the latest trends, news, and reviews that will help you make the best decisions for your driving experience.</p>

          <NavLink to={'/subscribe'}> <button className='bg-[#ff5959] text-white   md:text-xl  md:font-bold  md:px-5  md:py-2 lg:py-5 rounded-xl py-1 w-24  md:w-48' >Subscribe</button></NavLink>
        </div>

      </div>

      <div className='h-auto w-full bg-white text-black flex flex-col lg:flex-row  px-5 gap-5 '>
        <div className="lg:w-[60%] w-[90vw] lg:h-[100%] p-5 flex flex-col gap-5">
          <h1 className="text-5xl font-medium ">Latest</h1>


          {/* <div
            className="w-full h-[50vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div> */}
          <div
            className="w-full 
             h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[40vh] xl:h-[50vh] 
             bg-cover bg-center bg-no-repeat rounded-xl"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>

          <h1 className="text-lg font-medium">
            By <span className="text-[#ff5959]">{name} | </span>{time}
          </h1>
          <h1 className="lg:text-4xl font-medium overflow-hidden">{head}</h1>
          <p className=" text-xl h-auto text-gray-500 font-medium overflow-hidden">
           {para}
          </p>
          <NavLink to={"/read1"}
            state={{
              img: bgImage,
              title: head,
              time: time,
              user_name: name,
              para: para,
              para2: para2,
              para3: para3,
              logo: logo,
            }}>
            <button className="bg-[#ff5959]  text-white md:text-xl md:font-bold md:px-5 md:py-1 lg:py-2 lg:mt-5 rounded-xl py-1 w-24 md:w-40">
              Read More
            </button>
          </NavLink>
        </div>

        {/* Right Section with list of blogs */}
        <h1 className="text-2xl md:text-5xl font-medium flex justify-between  items-center w-full px:-5 md:px-10  lg:hidden border-red-500">
          Trending Blogs <span className="text-lg text-gray-500 ">See all</span>
        </h1>
        <div className="lg:w-[50%] w-full lg:pl-0    h-[100%]  lg:flex flex-col justify-start gap-10 lg:gap-20 py-10 ">
          <h1 className="text-5xl font-medium  justify-between hidden lg:block lg:flex  border-black">
            Trending Blogs <span className="text-lg text-gray-500 ">See all</span>
          </h1>
          <ul className="  flex flex-col gap-5">
            {list.map((ele) => {
              const isSelected = selectedId === ele.id;

              return (
                <li
                  key={ele.id}
                  onClick={() => handleClick(ele.id, ele.img, ele.title, ele.name, ele.time,ele.logo, ele.para, ele.para2, ele.para3)}
                  className={` ${isSelected ? 'rounded-lg bg-red-500 text-white' : ''} cursor-pointer`}
                >
                  <div className="border- border-black rounded-lg px-2 py-2">
                    <h1 className="text-lg font-medium">
                      By <span>{ele.name} | </span>{ele.time}
                    </h1>
                    <h1 className="lg:text-2xl font-medium overflow-hidden">{ele.title}</h1>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <h1 className='bg-white text-4xl font-medium px-10 py-5'>New Technology</h1>


      <Card />


     

    

      <div className='w-full h-96 md:h-auto  bg-[#232536] flex mt-10'>

        <div className='   w-[50%] text-sm h-full flex flex-col items-center gap-5 md:gap-10 py-10 md:pt-20'>
          <h1 className='text-white   w-[60%] text-start text-lg lg:text-2xl font-medium'>Testimonials</h1>
          <h1 className=' w-[60%] text-white lg:text-5xl text-xl font-medium'>What People Say about our Blogs</h1>
          <h1 className='   w-[60%] text-white lg:text-2xl font-medium'>"Our readers say that our blogs are incredibly insightful and engaging, offering valuable knowledge and inspiration with every post."</h1>
        </div>
        <div className='   -red-500 w-[50%] flex justify-center items-center '>

          <div className='w-40 h-40 lg:w-80 lg:h-80  rounded-full bg-[url("/images/BMW.svg")] bg-cover bg-center'></div>
        </div>

      </div>
      <h1 className='bg-white text-4xl px-10 font-medium py-12'>All Category</h1>
      <Card2 />

      {/* <h1 className='bg-white text-4xl px-10 font-medium py-12'>All Category</h1>
      <Card3 /> */}
      <Footer />
    </div>
    </>
  )
}

export default Home;

