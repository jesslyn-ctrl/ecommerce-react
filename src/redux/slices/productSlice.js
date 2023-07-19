import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./../../services";

export const getRecommendedProducts = createAsyncThunk(
  "products/getRecommended",
  async () => {
    const response = await productService.getRecommendedProducts();
    if (response.statusCode >= 400) {
      const errorMessage =
        response.error || "An error occurred during fetching 8 products data.";
      throw new Error(errorMessage);
    }
    return response.data;
  }
);

export const getAllProducts = createAsyncThunk("products/getAll", async () => {
  const response = await productService.getAllProducts();
  if (response.statusCode >= 400) {
    const errorMessage =
      response.error || "An error occurred during fetching all products.";
    throw new Error(errorMessage);
  }
  return response.data;
});

export const getProductDetail = createAsyncThunk(
  "products/getDetail",
  async (productId) => {
    const response = await productService.getProductDetail(productId);
    if (response.statusCode >= 400) {
      const errorMessage =
        response.error || "An error occurred during fetching product detail.";
      throw new Error(errorMessage);
    }
    return response.data;
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
