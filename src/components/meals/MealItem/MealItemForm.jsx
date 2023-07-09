import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import ButtonPrimary from "../../UI/ButtonPrimary";
import MealItemFormInput from "./MealItemFormInput";

function MealItemForm(props) {
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();
  console.log(amountInputRef.current.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (enteredAmountNum === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
      setValidAmount(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <MealItemFormInput ref={amountInputRef} input={{ min: 0, step: 1, max: 5 }} />

      <ButtonPrimary className="button" type="submit">
        {`${!validAmount ? "Add number" : "Add to cart"}`}
      </ButtonPrimary>
    </form>
  );
}

export default MealItemForm;
