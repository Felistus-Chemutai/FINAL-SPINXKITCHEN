import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [inputs, setInputs] = useState(
    (meal.strMeal = ""),
    (meal.strArea = ""),
    (meal.strCategory = ""),
    (meal.strIngredient1 = ""),
    (meal.strMeasure1 = ""),
    (meal.strIngredient2 = ""),
    (meal.strMeasure2 = "")((meal.strIngredient3 = "")),
    (meal.strMeasure3 = "")((meal.strIngredient4 = "")),
    (meal.strMeasure4 = "")((meal.strIngredient5 = "")),
    (meal.strMeasure5 = "")((meal.strIngredient6 = "")),
    (meal.strMeasure6 = "")((meal.strIngredient7 = "")),
    (meal.strMeasure7 = "")((meal.strIngredient8 = "")),
    (meal.strMeasure8 = ""),
    (meal.strInstructions = ""),
    `https://www.youtube.com/embed/${videoId}`
  );
  const [err, setError] = useState(null);
  const handleChange = (event) => {
    inputs(event.target.value);
  };
  const navigate = useNavigate();
  const handleClick = async () => {
    const response = await axios.post(
      "http://localhost/4000/recipe",
      { inputs },
      { withCredentials: true }
    );
    navigate("/recipe");
  };

  return (
    <>
      <h2>Create recipe</h2>
      <form>
        <label htmlFor="strMeal">Meal</label>
        <input
          type="strMeal"
          placeholder="strMeal"
          id="strMeal"
          value={strMeal}
          onChange={(event) => setInputs(event.target.value)}
        />

        <button type="button" onClick={handleClick}>
          createRecipe
        </button>
      </form>
    </>
  );
};

export default CreateRecipe;
