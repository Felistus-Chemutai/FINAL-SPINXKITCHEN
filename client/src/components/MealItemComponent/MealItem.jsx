import React from "react";
import soup from "/food/soup.jpg";
import "../MealItemComponent/MealItem.css";
import { Navigate, useNavigate } from "react-router-dom";

const MealItem = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card" id={meal.IdMeal} onClick={Navigate(`/${meal.IdMeal}`)}> 
        <img src={meal.strMealThumb} alt="" />
        <h3>
          {" "}
          {meal.strArea} {meal.strCategory}
        </h3>
      </div>
    </>
  );
};

export default MealItem;
