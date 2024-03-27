import React, { useEffect, useState } from "react";
import "../MealComponent/Meal.css";
import CreateRecipe from "../../pages/CreateRecipe";
import MealItem from "../MealItemComponent/MealItem";
import RecipeIndex from "../RecipeComponent/RecipeIndex";
import RecipeInfo from "../RecipeInfoComponent/RecipeInfo";


const Meal = () => {
  const [url, setUrl] = useState(
    "https:www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [meals, setMeals] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeals(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(
      `https:www.themealdb.com/api/json/v1/1/search.php?f=${alpha.toLowerCase()}`
    );
  };
  const searchRecipe = (event) => {
    if (event.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  console.log(url);
  return (
    <>
      <div className="main">
        <div className="heading">
          <h2>Search your food recipe</h2>
          <p>Amazing ideas here,we value your passion</p>
        </div>
        <div className="searchbox">
          <input
            type="search"
            className="search-bar"
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={searchRecipe}
          />
        </div>
        <div className="container">
          {meals && meals.length > 1 ? (
            meals.map((meal) => (
              <MealItem key={meal.id} id={meal.idMeal} meal={meal} />
            ))
          ) : (
            <span>no food found</span>
          )}
        </div>
        <div className="indexContainer">
          
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
          <RecipeInfo />
        {/* <CreateRecipe/> */}
        </div>
      </div>
    </>
  );
};

export default Meal;
