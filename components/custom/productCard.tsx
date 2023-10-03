"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { formatCurrency } from "@/lib/formatCurrency";
import { ProductType, useCart } from "@/hooks/use-cart";
import { useSidebar } from "@/hooks/use-sidebar";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [previewAlt, setPreviewAlt] = useState<boolean>(false);
  const { name, price, previewImgUrls, id, collection } = product;

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
          <ProductSizes product={product} />
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

const ProductSizes = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCart();
  const { toggleSidebar } = useSidebar();

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
    toggleSidebar(true);
  };

  return (
    <TooltipProvider>
      {product?.availableSizes?.map((item, index) => (
        <Tooltip delayDuration={100} key={`${item}-${index}`}>
          <TooltipTrigger>
            <p
              onClick={() => handleAddToCart(product)}
              className={"px-2 text-xs capitalize"}
            >
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
};

export default ProductCard;
