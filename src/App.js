import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const cartCloseHandler = () => {
    setCartVisible(false);
  };

  const cartShowHandler = () => {
    if (cartVisible === false) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  };

  return (
    <CartProvider>
      <div className="app">
        <Navbar cartOpen={cartShowHandler} />
        <main>
          {cartVisible && <Cart cartClose={cartCloseHandler} />}
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
