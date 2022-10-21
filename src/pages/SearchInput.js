/* import useCities from "../customHooks/useCities"; */
import ErrorContainer from "../components/ErrorContainer";
import Locations from "./Locations";
import useDebounce from "../customHooks/useDebounce";
import { getCityTrigger } from "../redux/slices/city-slice";

import classes from "./SearchInput.module.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SearchInput = function () {
  const [visibility, setVisibility] = useState(false);
  const [inputDebounce, setInputDebounce] = useState();
  const dispatch = useDispatch();

  const debounce = useDebounce(inputDebounce, 1000);

  useEffect(() => {
    dispatch(getCityTrigger({ city: debounce, eventType: "" }));
  }, [debounce, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getCityTrigger({ city: e.target[0].value, eventType: e.type }));
    setVisibility(false);
  };

  const searchInputHandler = (e) => {
    setVisibility(true);
    setInputDebounce(e.target.value);

    if (e.target.value === "") {
      setVisibility(false);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes["search-form"]}>
        <ErrorContainer type="city" />
        <div className={classes["search-form-container"]}>
          <input
            onChange={searchInputHandler}
            type="text"
            value={visibility === false ? "" : inputDebounce}
            id="city-search"
            placeholder="Enter location..."
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <Locations visibility={visibility} setVisibility={setVisibility} />
      </form>
    </>
  );
};

export default SearchInput;
