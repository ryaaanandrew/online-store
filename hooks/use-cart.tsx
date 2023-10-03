import { create } from "zustand";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  previewImgUrls: string[];
  availableSizes: string[];
  collection: string;
};

interface CartStore {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
}

export const useCart = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (product: ProductType) => {
    set((state) => ({ cart: [...state.cart, product] }));
  },
}));
