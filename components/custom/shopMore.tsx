import ProductCard from "./productCard";

const ShopMore = ({ collection }: { collection: any }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="mb-4">
        <h1>Shop More</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 h-50">
        {collection?.data?.slice(0, 4).map((product: any, i: number) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ShopMore;
