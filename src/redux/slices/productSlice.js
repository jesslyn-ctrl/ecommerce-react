import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./../../services";

export const getRecommendedProducts = createAsyncThunk(
  "products/getRecommended",
  async () => {
    const { data: response } = await productService.getRecommendedProducts();
    return response;
  }
);

export const getAllProducts = createAsyncThunk("products/getAll", async () => {
  const { data: response } = await productService.getAllProducts();
  return response;
});

export const getProductDetail = createAsyncThunk(
  "products/getDetail",
  async (productId) => {
    const { data: response } = await productService.getProductDetail(productId);
    return response;
  }
);

const initialState = {
  recommendedProducts: [],
  allProducts: [],
  productDetail: null,
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecommendedProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recommendedProducts = action.payload;
      })
      .addCase(getRecommendedProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      })
      .addCase(getProductDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.error || "Failed to fetch product details";
      });
  },
});

export default productSlice.reducer;
