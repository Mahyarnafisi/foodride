import React from "react";
import classes from "./Cart.module.css";
import { BsCreditCard } from "react-icons/bs";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        { id: 100, name: "food khubu", amount: 28.99, price: 16.99 },
        { id: 100, name: "food khubu", amount: 28.99, price: 16.99 },
      ].map((item) => {
        return <li className={classes["cart-item"]}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <div>
      <div className={classes.overlay}></div>
      <div className={classes.cart}>
        {cartItems}
        <div className={classes.total}>
          <span className={classes["amount-title"]}>Amount:</span>
          <span className={classes.amount}>36.88 $</span>
        </div>
        <div className={classes.action}>
          <button className={classes["btn-close"]}>Close</button>
          <button className={classes["btn-pay"]}>
            Pay <BsCreditCard className={classes["btn-icon"]} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
