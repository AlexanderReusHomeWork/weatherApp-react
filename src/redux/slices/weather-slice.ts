import { createSlice } from "@reduxjs/toolkit";
import { IWeatherSlice } from "../../models/interfaces";

const initialWeatherState: IWeatherSlice = {
  weatherData: {
    cityProp: "",
    country: "",
    currentTemp: 0,
    feelsLike: 0,
    humidity: 0,
    pressure: 0,
    visibility: 0,
    windSpeed: 0,
    weather: "",
    description: "",
    list: [],
  },
  isLoading: false,
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  reducers: {
    changeWeatherTrigger(state, action) {
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
