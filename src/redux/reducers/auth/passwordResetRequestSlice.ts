import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicType, ResetType } from "../../../@types/fileTypes";
import API from "../../api";

export const passwordResetRequest = createAsyncThunk(
  "passwordResetRequest",
  async (resetData: ResetType, { rejectWithValue }) => {
    try {
      const { data } = await API.post(
        "/auth/password_reset_request",
        resetData,
      );
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

const passwordResetRequestSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(passwordResetRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      passwordResetRequest.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action.payload.message;
      },
    );
    builder.addCase(
      passwordResetRequest.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      },
    );
  },
});

export default passwordResetRequestSlice.reducer;
