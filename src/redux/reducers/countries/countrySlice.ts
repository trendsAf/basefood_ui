import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { DynamicType, GetCountryState } from "../../../@types/fileTypes";
import API from "../../api";

export const getCountry = createAsyncThunk(
  "country/getCountry",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/general_routes/countries", {
        headers: { "X-CSRF-TOKEN": `${Cookies.get("access_token")}` },
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        (error as DynamicType)?.response?.data || "Failed to fetch countrys",
      );
    }
  },
);

const initialState: GetCountryState = {
  isLoading: false,
  getError: null,
  countryList: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, (state) => {
        state.isLoading = true;
        state.getError = null;
      })
      .addCase(getCountry.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.getError = null;
        state.countryList = action.payload;
      })
      .addCase(getCountry.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.getError = action.payload?.message || "Failed to fetch country";
      });
  },
});

export default countrySlice.reducer;
