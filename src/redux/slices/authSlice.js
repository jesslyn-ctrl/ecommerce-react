import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService, userService } from "./../../services";

export const getLoginToken = createAsyncThunk("auth/login", async (data) => {
  const response = await authService.login(data);
  if (response.statusCode >= 400) {
    const errorMessage = response.error || "An error occurred during login.";
    throw new Error(errorMessage);
  }
  return response.data;
});

export const getUserDetail = createAsyncThunk(
  "auth/getUserDetail",
  async (userId) => {
    const response = await userService.getUserDetail(userId);
    if (response.statusCode >= 400) {
      const errorMessage =
        response.error || "An error occurred during fetch user detail.";
      throw new Error(errorMessage);
    }
    return response.data;
  }
);

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLoginToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(getLoginToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.error = action.payload?.error || "Failed to fetch user details";
      });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
