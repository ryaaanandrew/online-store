"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { formatCurrency } from "@/lib/formatCurrency";

type ProductCardType = {
  id: string;
  name: string;
  price: number;
  previewImgUrls: string[];
  availableSizes: string[];
  collection: string;
};

const ProductCard = ({ product }: { product: ProductCardType }) => {
  const [previewAlt, setPreviewAlt] = useState<boolean>(false);
  const { name, price, previewImgUrls, availableSizes, id, collection } =
    product;

  const handleAddToCard = () => {
    console.log("add to cart");
  };

  return (
    <div
      className={`relative w-full`}
      onMouseEnter={() => setPreviewAlt(true)}
      onMouseLeave={() => setPreviewAlt(false)}
    >
      <Link href={`${collection}/products/${id}`}>
        <Image
          className="w-full"
          width={300}
          height={300}
          src={previewImgUrls?.[previewAlt ? 1 : 0]}
          alt={`picture of ${"product.name"}`}
        />
      </Link>
      <div>
        {previewAlt ? (
          <ProductSizes
            sizes={availableSizes}
            handleAddToCard={handleAddToCard}
          />
        ) : (
          <div className="pt-2 text-xs">
            <div className="mb-2">{name}</div>
            <div className="font-bold">{formatCurrency(price)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductSizes = ({
  sizes,
  handleAddToCard,
}: {
  sizes: string[];
  handleAddToCard: () => void;
}) => (
  <TooltipProvider>
    {sizes?.map((item, index) => (
      <Tooltip delayDuration={100} key={`${item}-${index}`}>
        <TooltipTrigger>
          <p onClick={handleAddToCard} className={"px-2 text-xs capitalize"}>
            {item}
          </p>
        </TooltipTrigger>
        <TooltipContent className="bg-black text-white text-xs border-0 cursor-pointer">
          Quick Add
        </TooltipContent>
      </Tooltip>
    ))}
  </TooltipProvider>
);

export default ProductCard;
