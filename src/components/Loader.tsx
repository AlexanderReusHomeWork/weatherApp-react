import { IStyle } from "../models/interfaces";
import classes from "./Loader.module.scss";

const Loader = function ({ styles }: { styles?: IStyle }) {
  return (
    <div style={styles} className={classes["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
