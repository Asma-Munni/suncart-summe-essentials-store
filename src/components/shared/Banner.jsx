import Image from 'next/image';
import React from 'react';
import hero from '@/assets/hero1.png'

const Banner = () => {
    return (
        <div>
          <div className="hero bg-amber-50 min-h-screen w-11/12 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
     src={hero}
     height={400}
     width={400}
     alt="banner- photo"
    />
    <div>
      <h1 className="text-5xl font-bold text-center md:text-start">Summer Essentials Store</h1>
      <p className="py-6 text-center md:text-start">
         All summer products are available here. flash 50% discount on make up item.
      </p>
      <div className="flex justify-center md:justify-start"> <button className="btn bg-amber-500 text-white ">Get Started</button></div>
     
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;