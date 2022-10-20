import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather-slice";
import cityReducer from "./slices/city-slice";
import errorReducer from "./slices/error-slice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    city: cityReducer,
    error: errorReducer,
  },
});
