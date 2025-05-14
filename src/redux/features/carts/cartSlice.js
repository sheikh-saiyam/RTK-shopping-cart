import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router";
import { toast } from "sonner";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const isProductExixt = state.find(
        (product) => product.productId === action.payload.id
      );

      if (isProductExixt) {
        toast.info("Product already exists in your cart!", {
          style: {
            marginTop: "-10px",
          },
        });
      } else {
        state.push({
          ...action.payload,
          productId: action.payload.id,
          id: Date.now(),
          quantity: 1,
        });
        toast.success("Product added your cart!", {
          style: {
            marginTop: "-10px",
          },
        });
      }
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.find((cart) => cart.id == action.payload);
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.find((cart) => cart.id == action.payload);
      if (cartItem) {
        cartItem.quantity--;
      }
    },
    removeCartItem: (state, action) => {
      return state.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeCartItem } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
