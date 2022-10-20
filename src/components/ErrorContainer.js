import classes from "./ErrorContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { errorActions } from "../redux/slices/error-slice";

const ErrorContainer = function () {
  const errMsg = useSelector((state) => state.error.errMsg);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errMsg) {
      setTimeout(() => {
        dispatch(errorActions.setMessage(""));
      }, 2000);
    }
  }, [dispatch, errMsg]);

  return <p className={classes["errorMsg"]}>{errMsg}</p>;
};
export default ErrorContainer;
