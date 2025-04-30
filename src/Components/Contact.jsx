import React, { use } from 'react'
import { useState,useEffect } from 'react'
import {useForm} from 'react-hook-form';



const Contact = () => {
    useEffect(() =>{
        window.scroll(0,0);
    })
    const {register,
        handleSubmit,
        watch,
        formState:{errors,isSubmitting}
    }=useForm();

    async function onsubmit(data){
        await new Promise((resolve) =>setTimeout(resolve,3000))
        console.log("Form data is :",data);
        alert(`Message Sent ✅`);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)}
             className="sm:h-[100vh] md:h-full xl:h-screen w-screen flex flex-col justify-start gap-20 items-center pb-5 bg-[#232536]">

                <h1 className=" text-[40px] font-bold text-white   "  >Contact Us</h1>


                <div className=" w-[90vw]  xl:w-[55vw]  border-2    text-white  text-start px-5 py-10 rounded-3xl flex flex-col sm:flex-row transition duration 700 " >
                    <div className=" md:w-[45%] pr-4 ">
                        <h1 className="text-2xl font-semibold">Contact Information</h1>



                        <h1 className="text-md  mt-5 font-medium text-gray-400">Name</h1>
                        <h1 className="text-lg   font-normal">Adam Forge</h1>
                        <h1 className="text-md  mt-5 font-medium text-gray-400">Email</h1>
                        <h1 className="text-lg   font-normal">User123@gmail.com</h1>
                        <h1 className="text-md mt-5  font-medium text-gray-400">Message</h1>
                        <h1 className="text-lg   font-normal">Hello We Want To Collab With You...</h1>
                    </div>

                    <div className="mt-5 sm:mt-0 md:px-5 sm:w-[55%] ">
                        <h1 className="text-2xl font-semibold">Feel Free To Message</h1>

                        <label htmlFor="name" className="inline-block mt-5 mb-2">Name</label>
                        <input type="text" className="w-[95%] md:w-full h-[40px] rounded-lg  text-black px-2 outline-none " 
                        {...register('name',{required:{value:true,message:"Please enter the Name"},minLength:{value:2,message:"min len atleast 2"}})}
                        />

                        {errors.name && errors.name.message}
                        <br />
                        <label htmlFor="email" className="inline-block mt-5 mb-2 ">Email</label>
                        <input type="email" className="w-[95%] md:w-full *: h-[40px] rounded-lg   text-black px-2  outline-none border border-black  "
                        {...register('email',{required:{value:true,message:"Please enter the Email"}})}
                        />

                        {errors.email && errors.email.message}

                        <br />
                        <label htmlFor="message" className="inline-block mt-5 mb-2">Message</label>
                        <textarea type="text" id='message' className="w-[95%] md:w-full h-[100px] rounded-lg  text-black px-2  outline-none border border-black "
                        {...register('message',{required:{value:true,message:"Enter Some Valauable Message"},minLength:{value:20,message:"min len atleast 20 characters"},maxLength:{value:200,message:"Limit Exceed 200 Characters"}})}
                        />

                        {errors.message && errors.message.message}
                        <br />

                        <input className="cursor-pointer w-[95%] sm:w-[100%] h-[40px] mt-5 rounded-lg bg-red-500 text-white  text-lg  p-2" type='Submit' 
                        
                        disabled={isSubmitting}
                        value={isSubmitting?"Sending":"Send Message"}
                        
                       / >
                    </div>

                </div>
            </form>
        </>
    )
}

export default Contact
