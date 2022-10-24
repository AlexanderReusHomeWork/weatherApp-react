import { createSlice } from "@reduxjs/toolkit";
import { ICitySlice } from "../../models/interfaces";

const initialCityState: ICitySlice = {
  cityData: [],
  isLoading: false,
  error: "",
};

const citySlice = createSlice({
  name: "city",
  initialState: initialCityState,
  reducers: {
    getCityTrigger(state, action) {
      state.isLoading = true;
    },
    getCityError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCitySuccess(state, action) {
      state.cityData = [...action.payload];
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const { getCityTrigger, getCityError, getCitySuccess } =
  citySlice.actions;
export default citySlice.reducer;
