import { useSelector } from "react-redux";
import classes from "./TodayWeather.module.scss";

const TodayWeather = function () {
  const weather = useSelector((state) => state.weather.weatherData);
  return (
    <main className={classes["today-container"]}>
      <section className={classes["today-container-temp"]}>
        <p>{weather?.currentTemp}</p>
        <span>°C</span>
      </section>
      <section className={classes["today-container-details"]}>
        <h2>{weather?.weather}</h2>
        <p>
          Feels like: <span>{weather?.feelsLike}</span>
        </p>
        <p>
          Pressure: <span>{weather?.pressure}</span>
        </p>
        <p>
          Humidity: <span>{weather?.humidity}%</span>
        </p>
      </section>
      <section className={classes["today-container-hum"]}>
        <p>
          Wind: <span>{weather?.windSpeed} km/h</span>
        </p>
        <p>
          Visibility: <span>{weather?.visibility / 1000}km</span>
        </p>
        <p>
          Description: <span>{weather?.description}</span>
        </p>
      </section>
    </main>
  );
};

export default TodayWeather;
