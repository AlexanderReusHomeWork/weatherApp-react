import classes from "./ErrorContainer.module.scss";

const ErrorContainer = function ({ errorMsg }) {
  return <p className={classes["errorMsg"]}>{errorMsg}</p>;
};

export default ErrorContainer;
