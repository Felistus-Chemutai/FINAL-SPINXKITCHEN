import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../RecipeInfoComponent/RecipeInfo.css";

const RecipeInfo = () => {
  const { recipe_id } = useParams();
  const [meal, setMeal] = useState();
  const [videoId, setVideoId] = useState();

  const retrieveVideoId = (videoUrl) => {
    const urlParts = videoUrl.split("/");
    const lastPart = urlParts[urlParts.length - 1];
    const videoId = lastPart.split("=")[1];
    return videoId
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe_id}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        setVideoId(retrieveVideoId(data.meals[0].strYoutube))
      });
  }, [recipe_id]);

  return (
    <>
      {!meal ? (
        ""
      ) : (
        <>
          <div className="content">
            <img src={meal.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{meal.strMeal}</h1>
              <h2>{meal.strArea}</h2>
              <h3>{meal.strCategory}</h3>
          
            <div className="recipe-details">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <br />
                <h4>
                  {meal.strIngredient1}:{meal.strMeasure1}
                  {meal.strIngredient2}:{meal.strMeasure2}
                  {meal.strIngredient3}:{meal.strMeasure3}
                  {meal.strIngredient4}:{meal.strMeasure4}
                  {meal.strIngredient5}:{meal.strMeasure5}
                  {meal.strIngredient6}:{meal.strMeasure6}
                  {meal.strIngredient7}:{meal.strMeasure7}
                  {meal.strIngredient8}:{meal.strMeasure8}
                  {meal.strIngredient9}:{meal.strMeasure9}
                  {meal.strIngredient10}:{meal.strMeasure10}
                </h4>
                <div className="instructions">
                  <h2>Instructions</h2>
                  <br />
                  <h4>{meal.strInstructions}</h4>
                </div>
                <div className="video">
                  <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
                </div>
              </div>
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecipeInfo;
