

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getProducts  () {
const res = await fetch("http://localhost:3000/products.json",{cache:"no-store"});
const data = await res.json();
return data.products;

}


const Products = async() => {
  
    const products = await getProducts();
    console.log(products, "products");
    return (
       <div className='w-11/12 mx-auto'>
      <h1 className='font-bold text-3xl text-center mb-6 mt-6'>All Products</h1>
      <div className='grid md:grid-cols-3 gap-2 justify-center items-center'>{products.map((product) => (
        <div 
        key={product.id}
        className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <Image
      height={50}
      width={200}
       className='h-50 w-100'
      src={product.image}
      alt={product.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <h2 className='font-bold'>Brand: <span className='text-gray-600'>{product.brand}</span></h2>
    <h2 className='font-bold'>Price: <span className='text-gray-600'>{product.price}</span></h2>
    <h2 className='font-bold'>Rating: <span className='text-gray-600'>{product.rating}</span></h2>
    <h2 className='font-bold'>Stock: <span className='text-gray-600'>{product.stock}</span></h2>
    <h2 className='font-bold'>Category: <span className='text-gray-600'>{product.category}</span></h2>
   
    <div className="card-actions justify-end">
      <Link 
      className='bg-gradient-to-r from-amber-400 to-amber-600 text-white btn'
      href={`/products/${product.id}`}>See Details</Link>
    </div>
  </div>
</div>
      ))}</div>
      
    </div>
    );
};

export default Products;