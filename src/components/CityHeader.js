import classes from "./CityHeader.module.scss";
import { useSelector } from "react-redux";
const CityHeader = function () {
  const weather = useSelector((state) => state.weather);
  return (
    <section className={classes["city"]}>
      <p>
        {weather.cityProp}, {weather.country}
      </p>
    </section>
  );
};

export default CityHeader;
