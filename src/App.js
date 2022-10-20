import CityHeader from "./pages/CityHeader";
import SearchInput from "./pages/SearchInput";
import TodayWeather from "./pages/TodayWeather";
import FutureWeatherContainer from "./pages/FutureWeatherContainer";

import "./App.module.scss";
import useCurrentPosition from "./customHooks/useCurrentLocation";
import useWeather from "./customHooks/useWeather";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "./redux/slices/weather-slice";
import { useEffect } from "react";

function App() {
  const citiesArray = useSelector((state) => state.city);

  const enteredCityCoords = {
    latitude: citiesArray[0]?.geometry?.lat,
    longitude: citiesArray[0]?.geometry?.lng,
  };

  const position = useCurrentPosition();
  const weatherInitial = useWeather(position);
  const enteredWeather = useWeather(enteredCityCoords);
  const dispatch = useDispatch();

  useEffect(() => {
    //fix error cannot update component while other component updating
    dispatch(weatherActions.changeWeather(weatherInitial));
    if (enteredWeather) {
      dispatch(weatherActions.changeWeather(enteredWeather));
    }
  }, [dispatch, weatherInitial, enteredWeather]);

  return (
    <div className="App">
      {/* <p style={{ color: "#fff" }}>{res?.cod}</p>{" "} */}
      {/* ? helped to fix crash when cod undefined during the first render */}
      <CityHeader position={position} />
      {position && (
        <>
          <SearchInput />
          <TodayWeather />
          <FutureWeatherContainer />
        </>
      )}
    </div>
  );
}

export default App;
