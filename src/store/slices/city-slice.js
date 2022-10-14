import { createSlice } from "@reduxjs/toolkit";

const initialCityState = {};

const citySlice = createSlice({
  name: "city",
  initialState: initialCityState,
  reducers: {
    getCity(state, action) {},
  },
});

export const cityCations = citySlice.actions;
export default citySlice.reducer;
