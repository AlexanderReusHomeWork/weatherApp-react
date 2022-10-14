import CityHeader from "./components/CityHeader";
import SearchInput from "./components/SearchInput";
import TodayWeather from "./components/TodayWeather";

import "./App.module.scss";
import useCurrentPosition from "./customHooks/useCurrentLocation";
import useWeather from "./customHooks/useWeather";
import { useDispatch } from "react-redux";
import { weatherActions } from "./store/slices/weather-slice";
import { useEffect } from "react";
import FutureWeatherContainer from "./components/FutureWeatherContainer";

function App() {
  /* console.log(weather); */
  const pos = useCurrentPosition();
  /* console.log(pos); */
  const res = useWeather(pos);
  /*  console.log(res); */
  const dispatch = useDispatch();

  useEffect(() => {
    //fix error cannot update component while other component updating
    dispatch(weatherActions.changeWeather(res));
  });
  return (
    <div className="App">
      {/* <p style={{ color: "#fff" }}>{res?.cod}</p>{" "} */}
      {/* ? helped to fix crash when cod undefined during the first render */}
      <CityHeader />
      <SearchInput />
      <TodayWeather />
      <FutureWeatherContainer />
    </div>
  );
}

export default App;
