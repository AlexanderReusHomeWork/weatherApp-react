import CityHeader from "./pages/CityHeader";
import SearchInput from "./pages/SearchInput";
import TodayWeather from "./pages/TodayWeather";
import FutureWeatherContainer from "./pages/FutureWeatherContainer";
import Loader from "./components/Loader";
import ErrorContainer from "./components/ErrorContainer";
import useCurrentLocation from "./customHooks/useCurrentLocation";
import { changeWeatherTrigger } from "./redux/slices/weather-slice";

import "./App.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const isLoadingWeather = useSelector((state) => state.weather.isLoading);
  const errorWeather = useSelector((state) => state.weather.error);
  console.log("App");

  const currentLocation = useCurrentLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeWeatherTrigger(currentLocation));
  }, [dispatch, currentLocation]);

  return (
    <div className="App">
      {errorWeather && (
        <ErrorContainer type="weather" position={{ top: "10px" }} />
      )}
      {isLoadingWeather && (
        <Loader
          styles={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
      {!isLoadingWeather && !errorWeather && (
        <>
          <CityHeader position={currentLocation} />{" "}
          {currentLocation && (
            <>
              <SearchInput />
              <TodayWeather />
              <FutureWeatherContainer />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
