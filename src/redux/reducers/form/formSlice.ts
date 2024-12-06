import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface FormState {
  crop_id: string;
  country_id: string;
  duration: string;
  selectedCountries: string[];
}

const initialState: FormState = {
  crop_id: "",
  country_id: "",
  duration: "",
  selectedCountries: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: any }>,
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = formSlice.actions;

export default formSlice.reducer;
