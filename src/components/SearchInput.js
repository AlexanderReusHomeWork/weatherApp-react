import { useEffect, useState } from "react";
import useCities from "../customHooks/useCities";
/* import ErrorContainer from "./ErrorContainer"; */

import classes from "./SearchInput.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cityCations } from "../store/slices/city-slice";

const SearchInput = function () {
  const [submitInput, setSubmitInput] = useState();
  /*  const [inputChange, setInputChange] = useState(); */

  const dispatch = useDispatch();
  const cities = useCities(submitInput);

  useEffect(() => {
    dispatch(cityCations.getCity(cities));
  }, [dispatch, cities]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitInput(e.target[0].value);
  };

  /* const searchInputHandler = (e) => {
    setInputChange(e.target.value);
  }; */
  return (
    <>
      {/* <ErrorContainer /> */}
      <form onSubmit={submitHandler} className={classes["search-form"]}>
        <div className={classes["search-form-container"]}>
          <input
            /* onChange={searchInputHandler} */
            /* value={inputChange} */
            type="text"
            id="city-search"
            placeholder="Enter location..."
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
