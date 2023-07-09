import React, { useReducer } from "react";

import CartContext from "./Card-context";

const INITIAL_DATA = {
  items: [],
  totalAmount: 0,
};

const postReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + state.item.price * state.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return INITIAL_DATA;
};

//
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(postReducer, INITIAL_DATA);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const deleteItemToCart = (id) => {
    dispatchCart({ type: "REMOVE" });
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    deleteItem: deleteItemToCart,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
