import React from "react";
import classes from "./MealItemForm.module.css";
import ButtonPrimary from "../../UI/ButtonPrimary";
import MealItemFormInput from "./MealItemFormInput";
import { BsPlusLg } from "react-icons/bs";
function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <MealItemFormInput />
      <ButtonPrimary className="button" type="submit">
        Add to cart
      </ButtonPrimary>
    </form>
  );
}

export default MealItemForm;
