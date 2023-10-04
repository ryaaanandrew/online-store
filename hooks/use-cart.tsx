import { get } from "http";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  previewImgUrls: string[];
  availableSizes: string[];
  collection: string;
};

export interface ProductTypeInCart extends ProductType {
  size: string;
  quantity: number;
  productSizeId?: string;
  sum: number;
}

interface CartStore {
  cart: ProductTypeInCart[];
  cartTotal: () => number;
  addToCart: (product: ProductTypeInCart) => void;
  removeFromCart: (product: ProductTypeInCart) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      cartTotal: () => get().cart.reduce((acc, curr) => acc + curr.sum, 0),
      addToCart: (product: ProductTypeInCart) => {
        const currentCart = get().cart;
        const productSizeId = `${product.id}-${product.size}`;
        const sum = product.price * product.quantity;
        const updatedProduct = { ...product, productSizeId, sum };
        const prodIdx = currentCart.findIndex(
          (item) => item.productSizeId === productSizeId
        );

        if (prodIdx !== -1) {
          currentCart[prodIdx].quantity =
            currentCart[prodIdx].quantity + product.quantity;

          currentCart[prodIdx].sum =
            currentCart[prodIdx].quantity * currentCart[prodIdx].price;

          set(() => ({ cart: [...currentCart] }));
        } else {
          set((state) => ({ cart: [...state.cart, updatedProduct] }));
        }
      },
      removeFromCart: (product: ProductTypeInCart) => {
        const currentCart = get().cart;
        const fitleredCart = currentCart.filter((item) => {
          return item.productSizeId !== product.productSizeId;
        });

        set(() => ({ cart: [...fitleredCart] }));
      },
    }),
    {
      name: "online-store-storage",
    }
  )
);
