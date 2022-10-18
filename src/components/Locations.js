import { useDispatch } from "react-redux";
import { cityCations } from "../store/slices/city-slice";
import Loader from "./Loader";
import classes from "./Locations.module.scss";

const Locations = function ({ citiesDebounce, visibility, setVisibility }) {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const chosenLocation = e.target.textContent;
    const filteredCity = citiesDebounce.filter(
      (elem) => elem.formatted === chosenLocation
    );
    dispatch(cityCations.getCity(filteredCity));
    setVisibility(false);
    citiesDebounce.length = 0;
  };

  const displayLocations = citiesDebounce.map((loc) => {
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
          {citiesDebounce.length === 0 && <Loader />}
        </div>
      )}
    </>
  );
};

export default Locations;
