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
    updateProduct: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.title = action.payload.title;
        product.price = action.payload.price;
        product.description = action.payload.description;
        product.category = action.payload.category;
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
