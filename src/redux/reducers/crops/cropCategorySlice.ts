import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { DynamicType } from "../../../@types/fileTypes"; // Import DynamicType if needed
import API from "../../api";

export interface CropCategory {
  id: number;
  name: string;
}

export interface CropCategoryState {
  isLoading: boolean;
  error: string | null;
  cropCategoryList: any[];
}

export const getCropsCategory = createAsyncThunk(
  "crop/getCropsCategory",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/general_routes/cropcategories", {
        headers: {
          "X-CSRF-TOKEN": `${Cookies.get("access_token")}`,
        },
        withCredentials: true,
      });
      return data as CropCategory[];
    } catch (error) {
      return rejectWithValue(
        (error as DynamicType)?.response?.data ||
          "Failed to fetch crops category",
      );
    }
  },
);

const initialState: CropCategoryState = {
  isLoading: false,
  error: null,
  cropCategoryList: [],
};

const cropCategorySlice = createSlice({
  name: "crop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCropsCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getCropsCategory.fulfilled,
        (state, action: PayloadAction<CropCategory[]>) => {
          state.isLoading = false;
          state.error = null;
          state.cropCategoryList = action.payload;
        },
      )
      .addCase(
        getCropsCategory.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload?.message || "Failed to fetch crops";
        },
      );
  },
});

export default cropCategorySlice.reducer;
