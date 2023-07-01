import React from "react";
import classes from "./NavbarCartButton.module.css";
import { BsBag } from "react-icons/bs";
function NavbarCartButton(props) {
  return (
    <button className={classes["cart__btn"]} onClick={props.onClick}>
      <BsBag />
      <span>3</span>
    </button>
  );
}

export default NavbarCartButton;
