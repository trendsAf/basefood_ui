import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { DynamicType, GetCropState } from "../../../@types/fileTypes";
import API from "../../api";

export const getCrops = createAsyncThunk(
  "crop/getCrops",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/general_routes/crops", {
        headers: { "X-CSRF-TOKEN": `${Cookies.get("access_token")}` },
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        (error as DynamicType)?.response?.data || "Failed to fetch crops",
      );
    }
  },
);

const initialState: GetCropState = {
  isLoading: false,
  getError: null,
  cropList: [],
};

const cropSlice = createSlice({
  name: "crop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCrops.pending, (state) => {
        state.isLoading = true;
        state.getError = null;
      })
      .addCase(getCrops.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.getError = null;
        state.cropList = action.payload;
      })
      .addCase(getCrops.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.getError = action.payload?.message || "Failed to fetch crops";
      });
  },
});

export default cropSlice.reducer;
