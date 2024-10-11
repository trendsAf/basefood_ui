import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BusinessDetailsFormValues,
  DynamicType,
  ReducerTypes,
} from "../../../@types/fileTypes";
import API from "../../api";

export const businessInfo = createAsyncThunk(
  "businessInfo",
  async (businessInfoData: BusinessDetailsFormValues, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/confirmation", businessInfoData);
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

const businessInfoSlice = createSlice({
  name: "businessInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(businessInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(businessInfo.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(
      businessInfo.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error =
          action.payload?.message || "Failed to submit business info";
      },
    );
  },
});

export default businessInfoSlice.reducer;
