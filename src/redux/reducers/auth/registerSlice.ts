import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DynamicType,
  ReducerTypes,
  RegisterTypes,
} from "../../../@types/fileTypes";
import API from "../../api";

export const register = createAsyncThunk(
  "register",
  async (registerData: RegisterTypes, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/signup/registration", registerData);
      return data;
    } catch (error) {
      return rejectWithValue((error as DynamicType).response);
    }
  },
);

const initialState: ReducerTypes = {
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload.data?.message;
    });
  },
});

export default registerSlice.reducer;
