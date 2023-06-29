import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import { BsBag } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";

function Navbar(props) {
  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <h1 className={classes["logo__title"]}>FoodRide</h1>
        </div>

        <ul className={classes.menu}>
          <li className={classes["sign-in"]}>
            <BiSolidUser className={classes["sign-in__logo"]} /> Sign In
          </li>
        </ul>

        <div className={classes.cart}>
          <button className={classes["cart__btn"]}>
            <BsBag />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
