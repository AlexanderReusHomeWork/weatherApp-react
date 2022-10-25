import { IOpenweathermap, IOpenCageData } from "../models/interfaces";

const API_KEY_WEATHER = "02b462b89c44372685da70c8e38eba1b";
const API_KEY_LOCATION = "695f04fe03e3469192ed31e883367c13";

export const getWeatherData = async ({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) => {
  if (!longitude && !latitude) return;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&id=524901&appid=${API_KEY_WEATHER}&units=metric&cnt=6`
  );
  const data: IOpenweathermap = await res.json();

  const weatherData = {
    cityProp: data.city.name,
    country: data.city.country,
    currentTemp: data.list[0].main.temp,
    feelsLike: data.list[0].main.feels_like,
    humidity: data.list[0].main.humidity,
    pressure: data.list[0].main.pressure,
    visibility: data.list[0].visibility,
    windSpeed: data.list[0].wind.speed,
    weather: data.list[0].weather[0].main,
    description: data.list[0].weather[0].description,
    list: data.list,
  };

  return weatherData;
};

export const getCityCoords = async (cityName: string) => {
  if (!cityName) return;
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${cityName.trim()}&key=${API_KEY_LOCATION}&language=en&pretty=1&no_annotations=1`
  );
  const data: IOpenCageData = await res.json();

  return data.results;
};
