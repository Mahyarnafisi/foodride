import React from "react";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes["meal-item"]}>
      <div className={classes.image}>
        <img src="#" alt="" />
      </div>
      <div className={classes.body}>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <h2 className={classes.price}>{price}</h2>
      </div>
      <div className={classes.form}>form</div>
    </li>
  );
}

export default MealItem;
