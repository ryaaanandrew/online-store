import React from "react";
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

const CollectionProductPage = () => {
  const productDetails = productData;
  const {
    name,
    price,
    images,
    colors,
    description,
    final,
    note,
    details,
    productInfo,
    availableSizes,
  } = productDetails;
  const collectionData = data;

  return (
    <div className="h-full flex flex-col">
      <div className="flex h-full">
        <div className="w-full">
          <h1>left</h1>
        </div>
        <div className="w-full p-2">
          <h1>{name}</h1>
          <h2>{formatCurrency(price)}</h2>

          <Separator className=" bg-black" />
          {colors?.map((color, i) => (
            <h2 key={`${color}-${i}`}>{color}</h2>
          ))}

          <Separator className=" bg-black" />
          {availableSizes?.map((color, i) => (
            <h2 key={`${color}-${i}`}>{color}</h2>
          ))}

          <Separator className=" bg-black" />
          <Button className="w-full my-4 rounded-none">ADD TO CART</Button>

          {final && <h2>FINAL SALE. NO RETURNS OR EXCHANGES</h2>}

          {/* TODO - COMPLETE THIS LOOK SECTION */}

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
