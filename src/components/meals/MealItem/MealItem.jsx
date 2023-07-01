import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { DefaultContext } from "react-icons";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes["meal-item"]}>
      <div className={classes.image}>
        <img className={classes["image__item"]} src={props.image} alt="" />
      </div>
      <div className={classes.body}>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <h2 className={classes.price}>{price}</h2>
      </div>
      <div className={classes.form}>
        <MealItemForm input={{ type: "number ", value: "1", min: "1", step: "1" }} />
      </div>
    </li>
  );
}

export default MealItem;
