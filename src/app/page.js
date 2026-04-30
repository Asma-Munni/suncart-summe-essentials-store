import Image from "next/image";

import Banner from "@/components/shared/Banner";
import PopularProducts from "@/components/shared/PopularProducts";
import Products from "./(main)/products/page";
import ExtraSections from "@/components/shared/ExtraSections";

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <PopularProducts></PopularProducts>
       <Products></Products>
       <ExtraSections></ExtraSections>

    </div>
  
  );
}
