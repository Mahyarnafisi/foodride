import "./App.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
