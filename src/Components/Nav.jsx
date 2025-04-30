// import { Route,BrowserRouter,Routes,NavLink} from "react-router-dom";
// const Nav = () => {
//     return (
//       <>
//         <div className='w-full h-20 text-white  bg-[#232536] flex justify-between  xl:px-10 items-center'>


//           <div className="w-16 h-16   bg-[url('./images/logo.png')] bg-cover bg-center"></div>


//           <div className='flex px-5  xl:px-10 gap-10  items-center '>

//             <ul className=' text-xl font-medium hidden  lg:gap-10  lg:block  lg:flex  xl:gap-16  items-center'>
//               < NavLink to={"/"}>Home</ NavLink>
//               < NavLink to={"/blog"}>Blogs</ NavLink>
//               < NavLink to={"/about"}>About</ NavLink>
//               < NavLink to={"/contact"}>Contact</ NavLink>
//               <button className={`   text-black bg-white py-2 px-4 rounded-xl`}>Log In</button>
//             </ul>

//             <button className="text-4xl  lg:hidden bg-[url('images/menu.png')] bg-cover h-10 w-10 "></button>
//           </div>


//         </div>
//       </>
//     )
//   }

//   export default Nav;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-14 lg:h-20  text-white bg-[#232536] flex justify-between xl:px-8 items-center sticky top-0 z-10">
        {/* Logo */}
        <div className="w-10 h-10  lg:w-16 lg:h-16 bg-[url('/images/BMW.svg')] bg-cover bg-center ml-4 xl:ml-0"></div>

        {/* Nav Links for Large Screens */}
        <ul className="text-xl font-medium hidden lg:flex gap-6 xl:gap-16 items-center pl-8  mx-5 justify-center">
          <NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-[#ff5959]" : ""}`}>Home</NavLink>
          <NavLink to={"/blog"} className={({ isActive }) => `${isActive ? "text-[#ff5959]" : ""}`}>Blogs</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "text-[#ff5959]" : ""}`}>About</NavLink>
          <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "text-[#ff5959]" : ""}`}>Contact</NavLink>
        </ul>
        <NavLink to={"/login"}><button className="text-black hover:bg-[#ff5959] hover:text-white bg-white py-2 px-2 w-20 hidden lg:block font-medium  rounded-xl">Log In</button></NavLink>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden h-8 w-8 mr-4 bg-[url('/images/menu.png')] bg-cover"
          onClick={() => setIsOpen(!isOpen)}
        ></button>

        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-full bg-[#232536] flex flex-col gap-4 text-white text-lg p-4 lg:hidden z-50 shadow-lg">
            <NavLink to={"/"} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to={"/blog"} onClick={() => setIsOpen(false)}>Blogs</NavLink>
            <NavLink to={"/about"} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to={"/contact"} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink to={"/login"} >  <button
              className="text-black hover:bg-[#ff5959] hover:text-white bg-white py-1 px-4 rounded-xl w-24"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </button></NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
