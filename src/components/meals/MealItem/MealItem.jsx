import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Card-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

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
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
