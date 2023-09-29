"use client";
import React, { useEffect, useState } from "react";
import { data as productData } from "@/sampleData/productDetails.json";
import data from "@/sampleData/collectionData.json";
import { formatCurrency } from "@/lib/formatCurrency";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/custom/productCard";
import ShopMore from "@/components/custom/shopMore";
import ProductImageCarosel from "@/components/custom/productImageCarosel";

const CollectionProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const productDetails = productData;
  const { name, price, images, colors, final, note, details, availableSizes } =
    productDetails;
  const collectionData = data;

  return (
    <div className="h-full flex flex-col">
      <div className="flex h-full">
        <div className="w-full">
          <ProductImageCarosel productImages={images} />
        </div>
        <div className="w-full p-2 [&>*]:mb-2">
          <div className="">
            <h1 className=" text-xl font-semibold">{name}</h1>
            <h2>{formatCurrency(price)}</h2>
          </div>

          <Separator className=" bg-black" />
          <div className="flex">{colors?.join("/")}</div>

          <Separator className=" bg-black" />
          <div className="flex items-center justify-between">
            <p>Size</p>
            <div>
              {availableSizes?.map((size, i) => (
                <Button
                  onClick={() => {
                    console.log("hello");
                    setSelectedSize(size);
                  }}
                  key={`${size}-${i}`}
                  className={`py-0 px-2 bg-transparant text-black hover:bg-transparent ${
                    selectedSize === size ? "font-bold" : ""
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <Separator className=" bg-black" />
          <Button className="w-full my-4 rounded-none">ADD TO CART</Button>

          {final && <h2>FINAL SALE. NO RETURNS OR EXCHANGES</h2>}

          <div>
            <h2>EDITOR&apos;S NOTE</h2>
            <p>{note}</p>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>DETAILS</AccordionTrigger>
              <AccordionContent>
                <div>
                  {details?.map((detail, i) => (
                    <p key={`${detail}-${i}`}>{detail}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <div className="my-4">
              <Button className="p-0 bg-transparent text-black hover:bg-transparent">
                SIZE INFO
              </Button>
            </div>
            <Separator className=" bg-black" />
            <AccordionItem value="item-3">
              <AccordionTrigger>SHIPPING AND RETURNS</AccordionTrigger>
              <AccordionContent>
                Products are shipped standard ground by UPS or by various
                regional carriers based on delivery location. Most deliveries
                are estimated to arrive in 5-10 business days. In rare cases,
                delays can occur at the warehouse or carrier level that extend
                that timeframe. This is a final sale product, so returns and
                exchanges are not permitted.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <ShopMore collection={collectionData} />
    </div>
  );
};

export default CollectionProductPage;
