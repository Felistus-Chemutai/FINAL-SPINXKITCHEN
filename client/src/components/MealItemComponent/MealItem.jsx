import React from "react";
import soup from "/food/soup.jpg";
import "../MealItemComponent/MealItem.css";

const MealItem = () => {
  return (
    <>
      <div className="card">
        <img src={soup} alt="" />
        <h3> Malenge Supu😂</h3>
      </div>
    </>
  );
};

export default MealItem;
