"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSidebar } from "@/hooks/use-sidebar";
import { Separator } from "../ui/separator";
import { useEffect } from "react";
import { ProductTypeInCart, useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

const CartSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { cart, removeFromCart, cartTotal } = useCart();

  useEffect(() => {
    console.log("cart: ", cart);
  }, [cart]);

  return (
    <Sheet open={isSidebarOpen} onOpenChange={() => toggleSidebar(false)}>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <Separator />
        <ScrollArea>
          {cart?.map((product: ProductTypeInCart, i: number) => (
            <CartItem
              product={product}
              removeFromCart={removeFromCart}
              key={`${product.id}-${i}`}
            />
          ))}
        </ScrollArea>
        <Separator />
        <div className="border-2 sticky bottom-0">
          <h1>Total: {formatCurrency(cartTotal())}</h1>
          <h1>Total: {formatCurrency(cartTotal())}</h1>
          <h1>Total: {formatCurrency(cartTotal())}</h1>
          <h1>Total: {formatCurrency(cartTotal())}</h1>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const CartItem = ({
  product,
  removeFromCart,
}: {
  product: ProductTypeInCart;
  removeFromCart: (product: ProductTypeInCart) => void;
}) => (
  <div className="flex justify-start items-center rounded-sm bg-slate-100 p-2 mb-2">
    <Image
      height={70}
      width={70}
      src={product?.previewImgUrls?.[0]}
      alt={`image of ${product.name}`}
      className="mr-4 rounded-sm"
    />
    <div>
      <h2>Product: {product.name}</h2>
      <h2>Price: {formatCurrency(product.price)}</h2>
      <h2>size: {product.size}</h2>
      <h2>quantity: {product.quantity}</h2>
      <Button
        className="bg-transparent text-black p-0 underline"
        onClick={() => removeFromCart(product)}
      >
        Remove
      </Button>
    </div>
  </div>
);

export default CartSidebar;
