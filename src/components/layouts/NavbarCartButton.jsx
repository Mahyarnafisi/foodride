import React, { useContext } from "react";
import classes from "./NavbarCartButton.module.css";
import { BsBag } from "react-icons/bs";
import CartContext from "../store/cartContext";
function NavbarCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numItemCart = cartCtx.items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  return (
    <button className={classes["cart__btn"]} onClick={props.onClick}>
      <BsBag />
      <span>{cartCtx.items}</span>
    </button>
  );
}

export default NavbarCartButton;
