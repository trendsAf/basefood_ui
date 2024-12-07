import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface FormState {
  crop_id: string;
  country_id: string;
  duration: string;
  selectedCountries: string[]; // Explicitly declare as an array of strings
}

const initialState: FormState = {
  crop_id: "",
  country_id: "",
  duration: "",
  selectedCountries: [], // Initialize as an empty array of strings
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
      state[field] = value; // Type-safe dynamic update
    },
  },
});

export const { updateField } = formSlice.actions;

export default formSlice.reducer;
