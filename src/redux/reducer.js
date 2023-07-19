import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";

const reducer = combineReducers({
  auth: authSlice,
  category: categorySlice,
  product: productSlice,
});

export default reducer;
