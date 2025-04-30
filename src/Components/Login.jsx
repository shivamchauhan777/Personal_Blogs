import {React} from 'react'

import {useForm} from "react-hook-form";

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors,isSubmitting}
  }=useForm();
  
  async function submit(data){
    await new Promise((resolve) =>setTimeout(resolve,3000));
    console.log("Form data is : ",data);
    alert(`Logged In ✅`);
  }

  return (
    <>
      <form className='w-screen h-[100vh]  flex flex-col justify-start pt-5 md:pt-20 gap-10 items-center bg-[#232536]'
      onSubmit={handleSubmit(submit)}
      >
        
        <div className='w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] xl:h-[70vh] border-2 border-black flex flex-col gap-12 pl-10 py-10  rounded-xl  bg-white'>
        <h1 className='text-4xl md:text-6xl'>Log In</h1>
       <div className=' h-20 flex flex-col justify-between'>
       <label htmlFor="email" className='text-xl font-medium'>Email</label>
       <input  type="email"  className='w-[90%] h-10 rounded border-2 border-black outline-none px-2'
       
       {...register('email',{required:{value:true,message:"* Enter the Email Id"}})}/>

       {errors.email && errors.email.message} 
       </div>
        <div className='h-20 flex flex-col justify-between'>
        <label htmlFor="password" className='text-xl font-medium'>Password</label>
        <input type="password" className='w-[90%] h-10 rounded border-2 border-black outline-none px-2'
        {...register('password',
          {required:{value:true,message:"* Enter the Password"},
          minLength:{value:8,message:'min len atleast 8'},
          maxLength:{value:20,message:'max len atmost 12'}})}
        />
      
        {errors.password && errors.password.message}
        </div>

        <input type="submit"  className='w-[90%] h-10 bg-blue-600 rounded text-white text-xl hover:font-medium'
         disabled={isSubmitting} value={isSubmitting?"Submitting":"Submit"}></input>

        <span className='text-blue-600 font-medium cursor-pointer'>Forget Password ?</span>
        </div>
        
      </form>
    </>
  )
}

export default Login
