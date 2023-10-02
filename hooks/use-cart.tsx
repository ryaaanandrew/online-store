import { create } from "zustand";

export const useCart = create<any>((set, get) => ({
  cart: ["test 1"],
  addToCard: (item) => set((state) => ({ cart: [...state.cart, item] })),
}));
