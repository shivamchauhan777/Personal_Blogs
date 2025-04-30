import React from 'react'
import Nav from "./Components/Nav";
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subscribe from './Components/Subscribe';
import ReadMore1 from './Components/ReadMore1';
import Article1 from './Components/Article1';

import Login from './Components/Login';
import CarGallery from './Components/CarGallery';




// const Home = () => {
//   return (
//     <>
//       <div className=' '>
//         <div className="text-white w-full h-[50vh] sm:h-[60vh]   lg:h-[70vh] bg-[url('./images/Hero.png')] bg-cover bg-center  ">
//           <div className=' h-[100%] w-[50%] flex flex-col gap-4  lg:gap-8 pl-5 py-2'>
//             <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Your Journey</h1>
//             <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Your Car</h1>
//             <h1 className='text-2xl md:text-4xl lg:text-6xl  xl:text-6xl font-bold'>Your Way</h1>

//             <p className=' md:text-lg xl:text-xl  overflow-scroll h-[40%] scrollbar-none  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad adipisci corporis consectetur quisquam cupiditate expedita obcaecati sit esse et quidem recusandae voluptatem, quam, libero eveniet doloremque, fugiat molestiae voluptas unde pariatur exercitationem repellendus ipsum. Sint culpa possimus odit, id, tempore numquam iste rerum doloribus iure illo officiis laudantium! Error nesciunt tempora culpa pariatur quam dolores inventore laborum velit rem, magni fugiat quis quidem quod deserunt facilis praesentium dicta. Ipsa natus dolor quis consequatur facilis pariatur sit labore nihil fugit nobis.</p>

//             <button className='bg-[#ff5959] text-white   md:text-xl  md:font-bold  md:px-5  md:py-2 lg:py-5 rounded-xl py-1 w-24  md:w-48'>Subscribe</button>
//           </div>

//         </div>

//         <div className='   -black h-auto w-full bg-white text-black flex flex-col lg:flex-row items-center px-5 gap-5 '>
//           <div className='lg:w-[60%] w-[90vw]  lg:h-[100%]    -black p-5 flex flex-col gap-5'>
//             <h1 className='text-5xl font-medium'>Latest</h1>

//             <div className='w-full h-[50vh] bg-[url("https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover bg-center '></div>

//             <h1 className='text-lg font-medium'>By <span className='text-[#ff5959]'> john Doe | </span>12 March , 2024</h1>

//             <h1 className='lg:text-4xl font-medium overflow-hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo.</h1>

//             <p className='text-xl text-gray-500 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, quam, officiis, amet quis error quas modi deserunt ex eligendi quidem fugiat neque accusantium ut enim praesentium assumenda harum libero ab quisquam. Id provident itaque pariatur quidem! Quas quasi beatae, exercitationem nam non dicta temporibus at possimus dolorum ab. Voluptas iure animi excepturi labore quibusdam consectetur vero accusamus, eum quae adipisci eaque, non quasi dolorum minus nesciunt distinctio earum, suscipit ullam dolores inventore! Sint consequuntur modi tenetur quam, repellat eaque. Eaque.</p>
//             <button className='bg-[#ff5959] text-white   md:text-xl  md:font-bold  md:px-5  md:py-2 lg:py-5 rounded-xl py-1 w-24  md:w-48'>Read More</button>
//           </div>



//           <div className='lg:w-[50%] h-[100%]    -red-500 p-5 lg:flex flex-col gap-10 lg:gap-20 hidden '>

//             <h1 className='text-5xl font-medium  flex justify-between items-center  '>Trending Blogs <span className='text-lg text-gray-500'>See all</span></h1>

//             <div>
//               <h1 className='text-lg font-medium'>By <span className='text-[#ff5959]'> john Doe | </span>12 March , 2024</h1>

//               <h1 className='lg:text-4xl   font-medium overflow-hidden  -  -black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo.</h1>
//             </div>
//             <div className='bg-[#ff5959] text-white '>
//               <h1 className='text-lg font-medium'>By <span className=''> john Doe | </span>12 March , 2024</h1>

//               <h1 className='lg:text-4xl   font-medium overflow-hidden  -  -black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo.</h1>
//             </div>
//             <div>
//               <h1 className='text-lg font-medium'>By <span className='text-[#ff5959]'> john Doe | </span>12 March , 2024</h1>

//               <h1 className='lg:text-4xl   font-medium overflow-hidden  -  -black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo.</h1>
//             </div>
//             <div>
//               <h1 className='text-lg font-medium'>By <span className='text-[#ff5959]'> john Doe | </span>12 March , 2024</h1>

//               <h1 className='lg:text-4xl   font-medium overflow-hidden  -  -black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo.</h1>
//             </div>


//           </div>
//         </div>
//       </div>

//       <h1 className='bg-white text-4xl font-medium px-10 py-5'>New Technology</h1>


//       <Card />


//       <h1 className='bg-white text-4xl px-10 font-medium py-12'>All Category</h1>

//       <Card2 />

//       <div className='w-full lg:h-[500px]  bg-[#232536] flex'>

//         <div className='   w-[50%] h-full flex flex-col items-center gap-10 pt-20'>
//           <h1 className='text-white   w-[60%] text-start text-lg lg:text-2xl font-medium'>Testimonials</h1>
//           <h1 className=' w-[60%] text-white lg:text-5xl text-xl font-medium'>What People Say about our Blogs</h1>
//           <h1 className='   w-[60%] text-white lg:text-2xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, natus.</h1>
//         </div>
//         <div className='   -red-500 w-[50%] flex justify-center items-center '>

//           <div className='w-40 h-40 lg:w-80 lg:h-80  rounded-full bg-[url("images/shivam2.png")] bg-cover bg-center'></div>
//         </div>

//       </div>

//       <h1 className='bg-white text-4xl px-10 font-medium py-12'>All Category</h1>
//       <Card3 />
//       <Footer />
//     </>
//   )
// }

const App = () => {
  return (
    <>
    <Router>


        <Nav  />
        {/* <Home /> */}
        <div className='bg-white w-full h-full'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='/read1' element={<ReadMore1/>} />
            <Route path='/article1' element={<Article1/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/car' element={<CarGallery/>} />
          </Routes>
      
        </div>
 

        
     

    </Router>

    
    </>
    
  )
}

export default App
