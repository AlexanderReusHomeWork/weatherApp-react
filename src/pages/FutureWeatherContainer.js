import FutureWeatherCard from "../components/FutureWeatherCard";

import classes from "./FutureWeatherContainer.module.scss";
import { useSelector } from "react-redux";

const FutureWeatherContainer = function () {
  const weather = useSelector((state) => state.weather);

  const displayList = weather.list?.map((elem, i) => {
    if (i === 0) return null;
    return (
      <FutureWeatherCard
        key={elem.dt}
        temp={elem.main.temp}
        icon={elem.weather[0].icon}
        time={elem.dt_txt}
      />
    );
  });
  return <section className={classes["today-forecast"]}>{displayList}</section>;
};

export default FutureWeatherContainer;
