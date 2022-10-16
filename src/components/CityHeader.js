import classes from "./CityHeader.module.scss";
import { useSelector } from "react-redux";
const CityHeader = function ({ position }) {
  const weather = useSelector((state) => state.weather);
  return (
    <section className={classes["city"]}>
      {!position && (
        <h2 style={{ color: "#fc5353" }}>
          Please turn on your geolocation for app to work properly
        </h2>
      )}
      {position && (
        <p>
          {weather.cityProp}, {weather.country}
        </p>
      )}
    </section>
  );
};

export default CityHeader;
