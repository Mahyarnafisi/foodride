import React, { Fragment } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import item1 from "../../assets/1.webp";
import item2 from "../../assets/2.webp";
import item3 from "../../assets/3.webp";
import item4 from "../../assets/4.webp";
import item5 from "../../assets/5.webp";

const mealsData = [
  {
    id: 1,
    name: "Rome Pizzeria",
    description: "Tomato sauce, mozzarella cheese, kebab meat and optional sauce.",
    price: 22.9,
    image: item1,
  },

  {
    id: 2,
    name: "Del Bosco",
    description: "Fresh pappardelle in a creamy sauce with cream, thyme.",
    price: 29,
    image: item2,
  },

  { id: 3, name: "Gnocchi alla Roast", description: "Fresh gnocchi with pork fillet, red onion, mushroom of the day.", price: 18.9, image: item3 },
  { id: 4, name: "Margherita", description: "Tomato sauce, Cheese", price: 21.9, image: item4 },
  { id: 5, name: "Kebab pizza", description: "Beef, onion, pepperoni and sauce of your choice.", price: 19.9, image: item5 },
];

function AvailableMeals(props) {
  const MealList = mealsData.map((meal) => (
    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} image={meal.image}>
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
