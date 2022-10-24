import classes from "./CityHeader.module.scss";
import { useSelector } from "react-redux";
import { IStoreState } from "../models/interfaces";
const CityHeader = function ({ position }: { position: any }) {
  //position type????/
  const weather = useSelector(
    (state: IStoreState) => state.weather.weatherData
  );
  return (
    <section className={classes["city"]}>
      {!position && (
        <h2 style={{ color: "#fc5353" }}>
          Please turn on your geolocation for app to work properly
        </h2>
      )}
      {position && (
        <p>
          {weather?.cityProp}, {weather?.country}
        </p>
      )}
    </section>
  );
};

export default CityHeader;
