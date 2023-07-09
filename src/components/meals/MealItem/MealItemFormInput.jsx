import React from "react";
import classes from "./MealItemFormInput.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

const MealItemFormInput = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <button className={` ${classes.button} `}>
        <BsDashLg className={classes.icon} />
      </button>

      <input ref={ref} className={classes.number} {...props.input} />

      <button className={`${classes.button}`}>
        <BsPlusLg className={classes.icon} />
      </button>
    </div>
  );
});

export default MealItemFormInput;
