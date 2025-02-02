import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { createProductActionUrl } from "@/utils/actionsUrl";

import {
  CartProductType,
  // Product
} from "@/utils/types-zustand";

interface State {
  cart: CartProductType[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: CartProductType) => void;
  updateProductQuantity: (product: CartProductType, amount: number) => void; // New amount update action
  // updateProductQuantity: (product: CartProductType, quantity: number) => void; // New quantity update action
  removeMultipleFromCart: (items: CartProductType[]) => void; // Multiple products removal
  removeFromCart: (Item: CartProductType) => void;
  emptyCart: () => void; // Empty cart
  setCart: (newCart: CartProductType[]) => void; // Added setCart method
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (product: CartProductType) => {
        // // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // if (!product) createProductActionUrl;
        if (!product) return;

        const cart = get().cart;
        // If product already exists in cart
        const cartItem = cart.find(
          (item) =>
            item.productId === product.productId && item.color === product.color
          // && item.variantId === product.variantId
          // && item.sizeId === product.sizeId
        );
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.productId === product.productId && item.color === product.color
              ? // && item.variantId === product.variantId
                // && item.sizeId === product.sizeId
                // ? { ...item, quantity: item.quantity + product.quantity }
                { ...item, amount: item.amount + product.amount }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            // totalPrice: state.totalPrice + product.price * product.quantity,
            totalPrice: state.totalPrice + product.price * product.amount,
          }));
        } else {
          const updatedCart = [...cart, { ...product }];
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price * product.amount,
            // totalPrice: state.totalPrice + product.price * product.quantity,
          }));
        }
      },
      updateProductQuantity: (product: CartProductType, quantity: number) => {
        const cart = get().cart;

        // If quantity is 0 or less, remove the item
        if (quantity <= 0) {
          get().removeFromCart(product);
          return;
        }

        const updatedCart = cart.map((item) =>
          item.productId === product.productId && item.color === product.color
            ? // && item.variantId === product.variantId
              // && item.sizeId === product.sizeId
              // ? { ...item, quantity: item.quantity + product.quantity }
              { ...item, amount: item.amount + product.amount }
            : item
        );

        const totalItems = updatedCart.length;
        const totalPrice = updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          // (sum, item) => sum + item.price * item.quantity,
          0
        );
        set(() => ({
          cart: updatedCart,
          totalItems,
          totalPrice,
        }));
      },
      removeFromCart: (product: CartProductType) => {
        const cart = get().cart;
        const updatedCart = cart.filter(
          (item) =>
            !(
              (
                item.productId === product.productId &&
                item.color === product.color
              )
              // && item.variantId === product.variantId
              // && item.sizeId === product.sizeId
            )
        );
        const totalItems = updatedCart.length;
        const totalPrice = updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          // (sum, item) => sum + item.price * item.quantity,
          0
        );
        set(() => ({
          cart: updatedCart,
          totalItems,
          totalPrice,
        }));

        // Manually sync with localStorage after removal
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      },
      removeMultipleFromCart: (products: CartProductType[]) => {
        const cart = get().cart;
        const updatedCart = cart.filter(
          (item) =>
            !products.some(
              (product) =>
                item.productId === product.productId &&
                item.color === product.color
              // && item.variantId === product.variantId
              // && item.sizeId === product.sizeId
            )
        );
        const totalItems = updatedCart.length;
        const totalPrice = updatedCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        );

        set(() => ({
          cart: updatedCart,
          totalItems,
          totalPrice,
        }));

        // Manually sync with localStorage after removal
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      },
      emptyCart: () => {
        set(() => ({
          cart: [],
          totalItems: 0,
          totalPrice: 0,
        }));

        // Explicitly clear the cart from localStorage as well
        localStorage.removeItem("cart");
      },
      setCart: (newCart: CartProductType[]) => {
        const totalItems = newCart.length;
        const totalPrice = newCart.reduce(
          (sum, item) => sum + item.price * item.amount,
          // (sum, item) => sum + item.price * item.quantity,
          0
        );
        set(() => ({
          cart: newCart,
          totalItems,
          totalPrice,
        }));
      },
    }),
    {
      name: "cart",
    }
  )
);
