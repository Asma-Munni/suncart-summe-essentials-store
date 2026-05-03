import React from "react";
import sunglass from '@/assets/sunglass.png'
import umbrella from '@/assets/umbrella.png'
import soap from '@/assets/soap.png'
import Image from "next/image";

const TopBrands = () => {
  return (
    <section className="mb-20">
      <div className="text-center mb-10 animate__animated animate__fadeInDown">
        <p className="text-amber-600 font-semibold">Featured Brands</p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Top Summer Brands
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Explore our most popular summer brands offering stylish, comfortable,
          and essential products for hot sunny days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Card 1 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 animate__animated animate__fadeInLeft">
          <div className="card-body text-center">
            <div className="text-5xl flex justify-center ">
                            <Image
                            src={sunglass}
                            height={150}
                            width={150}
                            alt='water drop'
                          /></div>

            <h3 className="text-xl font-bold">SunShade</h3>

            <p className="text-amber-600 font-medium">
              Sunglasses & Accessories
            </p>

            <p className="text-gray-500 mt-2">
              Premium summer eyewear brand offering stylish UV protection
              sunglasses for sunny outdoor days.
            </p>

            <div className="mt-4">
              <button className="btn btn-outline btn-warning btn-sm animate__animated animate__pulse animate__infinite">
                Explore Brand
              </button>
            </div>
          </div>
        </div>

        {/* Brand Card 2 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 animate__animated animate__fadeInUp">
          <div className="card-body text-center">
             <div className="text-5xl flex justify-center ">
                            <Image
                            src={soap}
                            height={150}
                            width={150}
                            alt='water drop'
                          /></div>

            <h3 className="text-xl font-bold">GlowCare</h3>

            <p className="text-amber-600 font-medium">
              Skincare Essentials
            </p>

            <p className="text-gray-500 mt-2">
              Trusted skincare brand focused on sunscreen, hydration, and skin
              protection during summer.
            </p>

            <div className="mt-4">
              <button className="btn btn-outline btn-warning btn-sm animate__animated animate__pulse animate__infinite">
                Explore Brand
              </button>
            </div>
          </div>
        </div>

        {/* Brand Card 3 */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 animate__animated animate__fadeInRight">
          <div className="card-body text-center">
             <div className="text-5xl flex justify-center ">
                            <Image
                            src={umbrella}
                            height={50}
                            width={50}
                            alt='water drop'
                          /></div>

            <h3 className="text-xl font-bold">BeachFlex</h3>

            <p className="text-amber-600 font-medium">
              Beach & Summer Wear
            </p>

            <p className="text-gray-500 mt-2">
              Modern summer lifestyle brand providing comfortable outfits and
              beach accessories.
            </p>

            <div className="mt-4">
              <button className="btn btn-outline btn-warning btn-sm animate__animated animate__pulse animate__infinite">
                Explore Brand
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;