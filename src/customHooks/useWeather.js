import { useEffect, useState } from "react";

const API_KEY_WEATHER = "02b462b89c44372685da70c8e38eba1b";

const useWeather = function ({ latitude, longitude }) {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!latitude && !longitude) return; //helped to fix error with undefined lat and lon
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&id=524901&appid=${API_KEY_WEATHER}&units=metric&cnt=6`
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchWeatherData();
  }, [latitude, longitude]);

  return weather;
};

export default useWeather;
