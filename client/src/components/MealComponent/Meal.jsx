import React from "react";
import "../MealComponent/Meal.css";
import MealItem from "../MealItemComponent/MealItem";

const Meal = () => {
  return (
    <>
      <div className="main">
        <div className="heading">
          <h2>Search your food recipe</h2>
          <p>Amazing ideas here,we value your passion</p>
        </div>
        <div className="searchbox">
          <input type="search" className="search-bar" />
        </div>
        <div className="container">
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
        </div>
      </div>
    </>
  );
};

export default Meal;
