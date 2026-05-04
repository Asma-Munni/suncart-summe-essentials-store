import Image from 'next/image';
import React from 'react';
import hero from '@/assets/hero1.png'

const Banner = () => {
    return (
        <div>
          <div className="hero bg-gradient-to-r from-amber-50 to-amber-100  w-11/12 mx-auto py-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <Image
     src={hero}
     height={400}
     width={400}
     className='rounded-xl'
     alt="banner- photo"
    />
    <div>
      <h1 className="animate__animated animate__fadeInUp
      text-4xl font-bold text-center md:text-start ">Summer Essentials Store</h1>
     <h2 className="text-4xl md:text-6xl font-bold text-orange-500 animate__animated animate__bounceInDown">
  Summer Sale 50% OFF
</h2>
      <p className="py-6 text-center md:text-start">
         All summer products are available here. flash 50% discount on make up item.
      </p>
      <div className="flex justify-center sm:justify-center md:justify-start"> <button className="btn bg-gradient-to-r from-amber-400 to-amber-600 text-white ">Get Started</button></div>
     
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;