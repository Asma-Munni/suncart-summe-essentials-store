"use client"

import { urlMaker } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function getProducts() {
  {/* const res = await fetch("http://localhost:3000/products.json");
  const data = await res.json();
  return data.products; */}
 

  const products = urlMaker("products.json")
  return products.products;
  
}

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    
    fetchProducts();
  }, []);

  // Limit to the first 3 products
  const limitedProducts = products.slice(0, 3);

  return (
    <div className='w-11/12 mx-auto my-16'>
      <h1 className='font-bold text-3xl text-center mb-6 mt-6'>Three Popular Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center'>
        {limitedProducts.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 w-96 mx-auto shadow-sm"
          >
            <figure>
              <Image
              height={200}
              width={300}
                className='h-50 w-100'
                src={product.image}
                alt={product.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              
              <h2 className='font-bold'>Price: <span className='text-gray-600'>{product.price}</span></h2>
              <h2 className='font-bold'>Rating: <span className='text-gray-600'>{product.rating}</span></h2>
              <div className="card-actions justify-end">
                <button className="btn bg-gradient-to-r from-amber-400 to-amber-600 hover:bg-amber-800 text-white">View Details button
</button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className='flex justify-center items-center mt-10 animate__animated animate__pulse animate__infinite'>
        <Link href={"/products"}><button className="btn  bg-gradient-to-r from-amber-400 to-amber-600 hover:bg-amber-800 text-white">See All Products
</button></Link>
        </div>
      

    </div>
  );
};

export default PopularProducts;