import { put, call, takeLatest, all } from "redux-saga/effects";
import { getWeatherData, getCityCoords } from "../../api";
import {
  changeWeatherTrigger,
  changeWeatherError,
  changeWeatherSuccess,
} from "../slices/weather-slice";

import {
  getCityTrigger,
  getCityError,
  getCitySuccess,
} from "../slices/city-slice";

export function* handleWeatherData({ payload }) {
  try {
    const weather = yield call(getWeatherData, payload);
    yield put(changeWeatherSuccess(weather));
  } catch {
    yield put(changeWeatherError("Unable to load weather"));
  }
}

export function* handleCityData({ payload }) {
  try {
    const cities = yield call(getCityCoords, payload.city);
    yield put(getCitySuccess(cities));

    if (payload.eventType === "submit") {
      const searchInputCityWeather = yield call(getWeatherData, {
        latitude: cities[0].geometry.lat,
        longitude: cities[0].geometry.lng,
      });
      yield put(changeWeatherSuccess(searchInputCityWeather));
    }
  } catch {
    yield put(getCityError("Please enter a valid city"));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(changeWeatherTrigger, handleWeatherData),
    takeLatest(getCityTrigger, handleCityData),
  ]);
}
