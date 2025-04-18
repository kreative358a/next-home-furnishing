// "use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type CartItem, type CartState } from "@/utils";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// const getCartFromLocalStorage = (): CartState => {
//   const cart = localStorage.getItem("cart");
//   return cart ? JSON.parse(cart) : defaultState;
// };

const getCartFromLocalStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : defaultState;
  }
  return defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((i) => i.cartId === newCartItem.cartId);
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      // state.tax = 0.1 * state.cartTotal;
      // state.orderTotal = state.cartTotal + state.shipping + state.tax;
      // localStorage.setItem('cart', JSON.stringify(state));
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item added to cart" });
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const cartId = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartId === cartId);
      if (!cartItem) return;
      state.cartItems = state.cartItems.filter((i) => i.cartId !== cartId);
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= Number(cartItem.price) * cartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Item removed from the cart" });
    },
    editItem: (
      state,
      action: PayloadAction<{ cartId: string; amount: number }>
    ) => {
      const { cartId, amount } = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartId === cartId);
      if (!cartItem) return;

      state.numItemsInCart += amount - cartItem.amount;
      state.cartTotal += Number(cartItem.price) * (amount - cartItem.amount);
      cartItem.amount = amount;

      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: "Amount Updated" });
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
