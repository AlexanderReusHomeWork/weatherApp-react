import classes from "./ErrorContainer.module.scss";
import { useSelector } from "react-redux";

const ErrorContainer = function () {
  const errMsg = useSelector((state) => state.error.errMsg);

  return <p className={classes["errorMsg"]}>{errMsg}</p>;
};

export default ErrorContainer;
