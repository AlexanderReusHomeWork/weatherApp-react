import { createSlice } from "@reduxjs/toolkit";

const initialWeatherState = {};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  reducers: {
    changeWeather(state, action) {
      state.cityProp = action.payload?.city.name;
      state.country = action.payload?.city.country;
      state.currentTemp = action.payload?.list[0].main.temp;
      state.feelsLike = action.payload?.list[0].main.feels_like;
      state.humidity = action.payload?.list[0].main.humidity;
      state.pressure = action.payload?.list[0].main.pressure;
      state.visibility = action.payload?.list[0].visibility;
      state.windSpeed = action.payload?.list[0].wind.speed;
      state.weather = action.payload?.list[0].weather[0].main;
      state.description = action.payload?.list[0].weather[0].description;
      state.list = action.payload?.list;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
