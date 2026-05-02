"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
     {/*use form hook */}
    const {
    register,
    handleSubmit,
    watch,
     formState: { errors },
   
  } = useForm()

    const handleRegisterFunc = async (data) =>{
     console.log(data, "data")
     const {email, name, photo, password} = data;
     console.log(email, photo);


     const {data:res, error} = await authClient.signUp.email({
    name:name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});
   console.log(res, error)
    };

    console.log(watch("email"))
    console.log(watch("password"))
    return (
        <div className='container mx auto min-h-[80vh] flex justify-center items-center bg-white'>
            <div className='p-4 mt-4 rounded-xl bg-amber-50 shadow-lg'>

                <h2 className='text-center text-3xl font-bold mb-6'>Register your account</h2>
                 <div className="divider"></div>
               <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input 
  type="name" 
  className="input" 
  placeholder="Type here name"
  {...register("name", { required: "Name field is required." })}

  />
 {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
  
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input 
  type="text" 
 
  className="input" 
  placeholder="Type here Photo URL"
  {...register("photo", { required: "Photo URL field is required." })}

  />
 {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
  
</fieldset>

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

<button className="btn w-full bg-amber-500 text-white mb-4">Register</button>
               </form>
                
            </div>
            
        </div>
    );
};

export default RegisterPage;