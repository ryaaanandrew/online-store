"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const ProductCard = ({
  name,
  price,
  imgUrl,
  availableSizes,
}: {
  name: string;
  price: number;
  imgUrl: string[];
  availableSizes: string[];
}) => {
  const [previewAlt, setPreviewAlt] = useState<boolean>(false);
  const [fade, setFade] = useState(false);

  return (
    <div
      className={`border-2 border-red-200 relative w-full`}
      onMouseEnter={() => setPreviewAlt(true)}
      onMouseLeave={() => setPreviewAlt(false)}
    >
      <Link href={"/"}>
        <Image
          className="w-full"
          width={300}
          height={300}
          src={imgUrl?.[previewAlt ? 1 : 0]}
          alt={`picture of ${"product.name"}`}
        />
      </Link>
      <div>
        {previewAlt ? (
          <TooltipProvider>
            {availableSizes.map((item, i) => (
              <Tooltip key={`${item}-${i}`}>
                <TooltipTrigger>
                  <p className={"pr-2 capitalize"}>{item}</p>
                </TooltipTrigger>
                <TooltipContent>Quick Add</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        ) : (
          <>
            <div>{name}</div>
            <div>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
