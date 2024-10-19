import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicType, ResetType } from "../../../@types/fileTypes";
import API from "../../api";

export const reset = createAsyncThunk(
  "reset",
  async (resetData: ResetType, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/signup/link_resend", resetData);
      return data;
    } catch (error: any) {
      return rejectWithValue((error as DynamicType).response);
    }
  },
);

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const resetSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(reset.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(reset.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.message = action.payload.message || "Reset link sent successfully.";
    });
    builder.addCase(reset.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.message =
        action.payload?.data?.message || "Failed to send reset link.";
    });
  },
});

export default resetSlice.reducer;
