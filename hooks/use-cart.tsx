import { create } from "zustand";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  previewImgUrls: string[];
  availableSizes: string[];
  collection: string;
};

export interface ProductTypeInCart extends ProductType {
  size?: string;
  quantity: number;
}

interface CartStore {
  cart: ProductTypeInCart[];
  addToCart: (product: ProductTypeInCart) => void;
}

export const useCart = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (product: ProductTypeInCart) => {
    const currentCart = get().cart;
    const prodIdx = currentCart.findIndex(
      (item) => item.id === product.id && item.size === product.size
    );

    if (prodIdx !== -1) {
      currentCart[prodIdx].quantity =
        currentCart[prodIdx].quantity + product.quantity;

      set(() => ({ cart: [...currentCart] }));
    } else {
      set((state) => ({ cart: [...state.cart, product] }));
    }
  },
}));
