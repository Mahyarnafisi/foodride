import React, { Fragment } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const mealsData = [
  {
    id: 1,
    name: "Rome Pizzeria",
    description: "Tomato sauce, mozzarella cheese, kebab meat and optional sauce.",
    price: 22.9,
  },

  {
    id: 2,
    name: "Del Bosco",
    description: "Fresh pappardelle in a creamy sauce with cream, thyme, fresh seasonal mushrooms,",
    price: 29,
  },

  { id: 3, name: "Gnocchi alla Roast", description: "Fresh gnocchi with pork fillet, red onion, mushroom of the day, chilli, garlic and butter.", price: 18.9 },
  { id: 4, name: "Margherita", description: "Tomato sauce, Cheese", price: 21.9 },
];

function AvailableMeals(props) {
  const MealList = mealsData.map((meal) => (
    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}>
      {meal.name}
    </MealItem>
  ));
  return (
    <Fragment>
      <Card>
        <ul className={classes["meals-list"]}>{MealList}</ul>
      </Card>
    </Fragment>
  );
}

export default AvailableMeals;
