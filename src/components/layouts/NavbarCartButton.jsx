import React, { useContext } from "react";
import CartContext from "../../store/Card-context";
import classes from "./NavbarCartButton.module.css";
import { BsBag } from "react-icons/bs";

function NavbarCartButton(props) {
  const CartCtx = useContext(CartContext);
  const cartItemNum = CartCtx.items.length;
  console.log(cartItemNum);

  return (
    <button className={classes["cart__btn"]} onClick={props.onClick}>
      <BsBag />
      <span>{cartItemNum}</span>
    </button>
  );
}

export default NavbarCartButton;
