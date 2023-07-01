import React from "react";
import classes from "./MealItemFormInput.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

function MealItemFormInput(props) {
  return (
    <div className={classes.input}>
      <button className={classes.button}>
        <BsDashLg className={classes.icon} />
      </button>
      <input className={classes.number} value={1} min={1} />

      <button className={classes.button}>
        <BsPlusLg className={classes.icon} />
      </button>
    </div>
  );
}

export default MealItemFormInput;
