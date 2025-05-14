import { productsArr } from "@/lib/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = productsArr;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: initialState.length > 0 ? state[state.length - 1].id + 1 : 1,
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
