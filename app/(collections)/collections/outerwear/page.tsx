import ProductCard from "@/components/custom/productCard";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <div>Outerwear</div>
      <ul className="flex [&>li]:pr-2 text-xs">
        <li>All Kith</li>
        <li>Monday program</li>
        <li>kith tees</li>
        <li>kith hoodies</li>
        <li>kith pants</li>
      </ul>
      {/* Product holder */}
      <div className="grid grid-cols-3 gap-4">
        {/* Product item */}
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={["s", "m", "l"]}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={["s", "m", "l"]}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={["s", "m", "l"]}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={["s", "m", "l"]}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={["s", "m", "l"]}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={["s", "m", "l"]}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
        <ProductCard
          name="Kith x Looney Tunes x Converse Chuck 70 Hi 'Tweety'"
          price={150}
          availableSizes={("s", "m", "l")}
          imgUrl={[
            "https://i.ibb.co/35KmJfJ/KHM010459-412-BACK-900x.webp",
            "https://i.ibb.co/XbJMtkm/KHM010459-412-FRONT-900x.webp",
          ]}
        />
      </div>
    </div>
  );
};

export default Page;

// https://ibb.co/Kcnx1N1
// https://ibb.co/JKkgHFX
