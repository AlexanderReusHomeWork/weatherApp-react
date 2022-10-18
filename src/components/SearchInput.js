import useCities from "../customHooks/useCities";
import ErrorContainer from "./ErrorContainer";
import Locations from "./Locations";

import classes from "./SearchInput.module.scss";
import useDebounce from "../customHooks/useDebounce";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cityCations } from "../store/slices/city-slice";
import { errorActions } from "../store/slices/error-slice";

const SearchInput = function () {
  const [submitInput, setSubmitInput] = useState();
  const [inputDebounce, setInputDebounce] = useState();
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const debounce = useDebounce(inputDebounce, 1000);
  const citiesSubmit = useCities(submitInput);
  const citiesDebounce = useCities(debounce);

  useEffect(() => {
    dispatch(cityCations.getCity(citiesSubmit));
  }, [dispatch, citiesSubmit]);

  const submitHandler = (e) => {
    e.preventDefault();
    setVisibility(false);
    if (e.target[0].value === "") {
      dispatch(errorActions.setMessage("Please enter a city"));
    }
    setSubmitInput(e.target[0].value);
    e.target[0].value = "";
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
        <ErrorContainer />
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
        <Locations
          citiesDebounce={citiesDebounce}
          visibility={visibility}
          setVisibility={setVisibility}
        />
      </form>
    </>
  );
};

export default SearchInput;
