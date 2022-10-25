import classes from "./ErrorContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCityError } from "../redux/slices/city-slice";
import { IStoreState, IStyle } from "../models/interfaces";
import { ERROR_COMPONENT_TYPE } from "../models/enums";

const ErrorContainer = function ({
  type,
  position,
}: {
  type: ERROR_COMPONENT_TYPE;
  position?: IStyle;
}) {
  const errorMessage = useSelector((state: IStoreState) => state[type].error);
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
