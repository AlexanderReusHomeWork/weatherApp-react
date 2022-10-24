import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import classes from "./Locations.module.scss";
import { changeWeatherTrigger } from "../redux/slices/weather-slice";
import { getCitySuccess } from "../redux/slices/city-slice";
import { IStoreState } from "../models/interfaces";

const Locations = function ({
  visibility,
  setVisibility,
}: {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const citiesList = useSelector((state: IStoreState) => state.city.cityData);
  console.log(citiesList);
  const dispatch = useDispatch();

  const clickHandler = (e: React.MouseEvent) => {
    setVisibility(false);
    const chosenLocation = (e.target as HTMLParagraphElement).textContent;
    const filteredCity = citiesList.filter(
      (elem) => elem.formatted === chosenLocation
    );

    const { lat, lng } = filteredCity[0].geometry;

    dispatch(changeWeatherTrigger({ latitude: lat, longitude: lng }));

    dispatch(getCitySuccess([]));
  };

  const displayLocations = citiesList.map((loc) => {
    return (
      <p key={loc.formatted} onClick={clickHandler}>
        {loc.formatted}
      </p>
    );
  });

  return (
    <>
      {visibility && (
        <div className={classes["locations"]}>
          {displayLocations}
          {citiesList.length === 0 && <Loader />}
        </div>
      )}
    </>
  );
};

export default Locations;