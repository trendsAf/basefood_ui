import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  DynamicType,
  PricingFormValues,
  ReducerTypes,
} from "../../../@types/fileTypes";
import API from "../../api";

export const pricing = createAsyncThunk(
  "pricing",
  async (pricingData: PricingFormValues, { rejectWithValue }) => {
    const token = Cookies.get("access_token");
    try {
      const { data } = await API.post("/user/crops/prices", pricingData, {
        headers: { "X-CSRF-TOKEN": token },
        withCredentials: true,
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        (error as DynamicType)?.response?.data || "An error occurred",
      );
    }
  },
);

const initialState: ReducerTypes = {
  isLoading: false,
  error: null,
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(pricing.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(pricing.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(pricing.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload?.message || "Failed to submit business info";
    });
  },
});

export default pricingSlice.reducer;
