import Image from "next/image";
import Slider from "react-slick";
import React from "react";

const ProductImageCarosel = ({
  productImages,
}: {
  productImages: string[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="md:w-[50vw]">
      {productImages.map((image, i) => (
        <Image
          className="max-h-[700px] max-w-[700px]"
          key={`${image}-${i}`}
          src={image}
          alt="Picture of the author"
          width={500}
          height={500}
          // placeholder="blur"
        />
      ))}
    </Slider>
  );
};

export default ProductImageCarosel;
