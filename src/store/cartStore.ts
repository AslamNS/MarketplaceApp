import { create } from "zustand";
import { Product } from "../types/product";

type cartStore ={
    cart : Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}

const useCartStore = create<cartStore>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((p) => p.id !== productId) })), // Assuming Product has an 'id' property
}));

export default useCartStore;