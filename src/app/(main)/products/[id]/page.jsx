import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getProducts() {
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const products = await getProducts();

  const product = products.find((item) => Number(item.id) === Number(id));

  if (!product) {
    return (
      <div className="w-11/12 mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Product Not Found
        </h2>

        <Link href="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className=" bg-base-100 w-full mx-auto shadow-sm text-center">
        <div className="flex justify-center items-center"><figure className="p-6">
          <Image
            height={300}
            width={300}
            src={product.image}
            alt={product.name}
            className="object-cover rounded-xl"
          />
        </figure></div>
        

        <div className="w-11/12 mx-auto">
          <h2 className="font-bold text-2xl text-center">{product.name}</h2>

          <h2 className="font-bold">
            Brand:{" "}
            <span className="text-gray-600 font-normal">
              {product.brand}
            </span>
          </h2>

          <h2 className="font-bold">
            Price:{" "}
            <span className="text-gray-600 font-normal">
              ${product.price}
            </span>
          </h2>

          <h2 className="font-bold">
            Rating:{" "}
            <span className="text-gray-600 font-normal">
              {product.rating}
            </span>
          </h2>

          <h2 className="font-bold">
            Stock:{" "}
            <span className="text-gray-600 font-normal">
              {product.stock}
            </span>
          </h2>

          <h2 className="font-bold">
            Category:{" "}
            <span className="text-gray-600 font-normal">
              {product.category}
            </span>
          </h2>

          <p className="text-gray-600 mt-3">{product.description}</p>

          <div className=" justify-end mt-4">
            <button className="btn bg-amber-500 hover:bg-amber-600 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;