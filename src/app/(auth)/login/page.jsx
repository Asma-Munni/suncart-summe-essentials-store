"use client"

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
     {/*use form hook */}
    const {
    register,
    handleSubmit,
    watch,
     formState: { errors },
   
  } = useForm()

    const handleLoginFunc = (data) =>{
     console.log(data, "data")
    }

    console.log(watch("email"))
    console.log(watch("password"))
    return (
        <div className='container mx auto min-h-[80vh] flex justify-center items-center bg-white'>
            <div className='p-6 rounded-xl bg-amber-50 shadow-lg'>
                <button className="btn w-full mt-3 bg-white border flex items-center justify-center gap-2 hover:bg-gray-100 transition mb-2">
  <FcGoogle className="w-5 h-5" />
  Continue with Google
</button>

 <div className="divider">OR</div>

                <h2 className='text-center text-3xl font-bold mb-6'>Login your account</h2>
                 <div className="divider"></div>
               <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

                <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input 
  type="email" 
 
  className="input" 
  placeholder="Type here email"
  {...register("email", { required: "Email field is required." })}

  />
 {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
  
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input 
  type="password"
 
  className="input" 
  placeholder="Type here password"
  {...register("password", { required: "Password field is required." })} 
  />
   {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
  
</fieldset>

<button className="btn w-full bg-amber-500 text-white mb-4">Login</button>
               </form>
                <div className="divider"></div>
               <p>Do not have an account? 
                <Link 
               className='text-amber-500'
               href={"/register"}> Register</Link></p>
            </div>
            
        </div>
    );
};

export default LoginPage;