import classes from "./ErrorContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCityError } from "../redux/slices/city-slice";

const ErrorContainer = function ({ type, position }) {
  const errorMessage = useSelector((state) => state[type].error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(getCityError(""));
      }, 2000);
    }
  }, [dispatch, errorMessage]);

  return (
    <p className={classes["errorMsg"]} style={position}>
      {errorMessage}
    </p>
  );
};
export default ErrorContainer;
