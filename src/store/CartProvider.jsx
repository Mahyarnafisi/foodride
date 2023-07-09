import React, { useReducer } from "react";

import CartContext from "./Card-context";

const CART_INITIAL = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat();
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

//-------------------------------------------------
const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const deleteItemToCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCart,
    deleteItem: deleteItemToCart,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
