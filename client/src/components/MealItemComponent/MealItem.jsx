import React from "react";
import soup from "/food/soup.jpg";
import "../MealItemComponent/MealItem.css";
import Favourite from "../FavouriteComponent/Favourite";
import { Link } from "react-router-dom";

const MealItem = ({ meal }) => {
  console.log({meal})
  return (
    <div className="meal-item">
      <div className="card" id={meal.IdMeal}>
        <Link to={`/recipes/${meal.idMeal}`}>
          <img src={meal.strMealThumb} alt="" />
        </Link>
        <h3>
          {" "}
          {meal.strArea} {meal.strCategory}
        </h3>
      </div>
      <Favourite />
    </div>
  );
};

export default MealItem;
