import React, { Fragment } from "react";
import classes from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";
function Meals(props) {
  return (
    <div className={classes.meals}>
      <h2 className={classes.title}>Available Meals</h2>
      <AvailableMeals />
    </div>
  );
}

export default Meals;
