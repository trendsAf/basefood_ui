import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicType } from "../../../@types/fileTypes";
import { ReducerTypes } from "../../../@types/fileTypes";
import API from "../../api";

export const verifyAccount = createAsyncThunk(
  "verifyAccount",
  async (userId: string, { rejectWithValue }) => {
    try {
      const data = await API.get(`/signup/virify-email/${userId}`);
      return data;
    } catch (error) {
      rejectWithValue((error as DynamicType).response);
    }
  },
);

const initialState: ReducerTypes = {
  isLoading: false,
  error: null,
  isVerified: false,
  message: "",
};

const verifyAccountSlice = createSlice({
  name: "verifyAccount",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(verifyAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      verifyAccount.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isVerified = true;
        state.message = action.payload.message;
      },
    );
    builder.addCase(
      verifyAccount.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      },
    );
  },
});

export default verifyAccountSlice.reducer;
