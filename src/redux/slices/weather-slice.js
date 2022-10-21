import { createSlice } from "@reduxjs/toolkit";

const initialWeatherState = {
  weatherData: {},
  isLoading: false,
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  reducers: {
    changeWeatherTrigger(state) {
      state.isLoading = true;
    },
    changeWeatherError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeWeatherSuccess(state, action) {
      state.weatherData = action.payload;
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const {
  changeWeatherTrigger,
  changeWeatherError,
  changeWeatherSuccess,
} = weatherSlice.actions;
export default weatherSlice.reducer;
