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
  productSizeId?: string;
}

interface CartStore {
  cart: ProductTypeInCart[];
  addToCart: (product: ProductTypeInCart) => void;
  removeFromCart: (product: ProductTypeInCart) => void;
}

export const useCart = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (product: ProductTypeInCart) => {
    const currentCart = get().cart;
    const productSizeId = `${product.id}-${product.size}`;
    const updatedProduct = { ...product, productSizeId };
    const prodIdx = currentCart.findIndex(
      (item) => item.productSizeId === productSizeId
    );

    if (prodIdx !== -1) {
      currentCart[prodIdx].quantity =
        currentCart[prodIdx].quantity + product.quantity;

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
}));
