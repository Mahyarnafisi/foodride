import "./App.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Meals />
        {/* <Cart /> */}
      </main>
    </div>
  );
}

export default App;
