import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicType } from "../../../@types/fileTypes";
import { ReducerTypes } from "../../../@types/fileTypes";
import API from "../../api";

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (
    { token, newPassword }: { token: string; newPassword: string },
    { rejectWithValue },
  ) => {
    try {
      const data = await API.post(`/auth/password_reset/${token}`, {
        password: newPassword,
      });
      return data;
    } catch (error: any) {
      return rejectWithValue((error as DynamicType).response || error.message);
    }
  },
);

const initialState: ReducerTypes = {
  isLoading: false,
  error: null,
  isVerified: false,
  message: "",
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      resetPassword.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isVerified = true;
        state.message = action.payload.message;
      },
    );
    builder.addCase(
      resetPassword.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
      },
    );
  },
});

export default resetPasswordSlice.reducer;
