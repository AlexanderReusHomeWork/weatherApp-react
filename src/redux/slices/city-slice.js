import { createSlice } from "@reduxjs/toolkit";

const initialCityState = {
  cityData: [],
  isLoading: false,
  error: "",
};

const citySlice = createSlice({
  name: "city",
  initialState: initialCityState,
  reducers: {
    getCityTrigger(state) {
      state.isLoading = true;
    },
    getCityError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCitySuccess(state, action) {
      state.length = 0;
      state.cityData = [...action.payload];
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const { getCityTrigger, getCityError, getCitySuccess } =
  citySlice.actions;
export default citySlice.reducer;
