import classes from "./SearchInput.module.scss";

const SearchInput = function () {
  return (
    <form className={classes["search-form"]}>
      <div className={classes["search-form-container"]}>
        <input type="text" id="city-search" placeholder="Enter location..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
