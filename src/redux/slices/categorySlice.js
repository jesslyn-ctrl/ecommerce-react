import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "./../../services";

export const getCategoriesData = createAsyncThunk(
  "categories/get",
  async () => {
    const response = await categoryService.getCategories();
    if (response.statusCode >= 400) {
      const errorMessage =
        response.error || "An error occurred during fetch category data.";
      throw new Error(errorMessage);
    }
    return response.data;
  }
);

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(getCategoriesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
