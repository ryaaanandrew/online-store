import Image from "next/image";
import React from "react";

const ProductImageCarosel = ({
  productImages,
}: {
  productImages: string[];
}) => {
  console.log("productImages", productImages);
  return (
    // TODO implement swiper
    <div className="border-2 border-pink-400 h-full">
      <div className="carousel h-full">
        <div className="carousel-cell bg-red-400 w-full h-full">asd</div>
        <div className="carousel-cell bg-red-400 w-full h-full">asd</div>
      </div>
    </div>
  );
};

export default ProductImageCarosel;
