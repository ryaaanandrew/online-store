import ProductCard from "@/components/custom/productCard";
import React from "react";
import sampleData from "@/sampleData.json";

type CollectionsPageProps = {
  params: {
    collectionName: string;
  };
};

const CollectionsPage = ({ params }: CollectionsPageProps) => {
  const { collectionName } = params;

  // TODO: fetch api call to get products by collection name

  return (
    <div className="p-4">
      <h1 className=" tracking-tight capitalize">{collectionName}</h1>
      <ul className="flex py-4 [&>li]:pr-2 text-xs">
        <li>All Kith</li>
        <li>Monday program</li>
        <li>kith tees</li>
        <li>kith hoodies</li>
        <li>kith pants</li>
      </ul>
      <div className="grid grid-cols-3 gap-4">
        {sampleData?.productData?.map((product, i) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
