import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "missing-pet",
  initialState: {
    pet: [],
  },
  reducers: {
    missingPet: (state, action) => {
      state.pet = [action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { missingPet } = counterSlice.actions;

export default counterSlice.reducer;
