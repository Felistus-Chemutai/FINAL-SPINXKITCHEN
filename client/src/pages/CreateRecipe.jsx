import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import "./CreateRecipe.css";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newMeal, setNewMeal] = useState({
    title: "",
    category: "",
    description: "",
    instructions: "",
    videoUrl: "",
  });
  const [err, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMeal((prevMeal) => ({
      ...prevMeal,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log(newMeal);
    try {
      const response = await axios.post(
        "http://localhost:4000/recipe/add",
        newMeal,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      return navigate("/recipe");
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddIngredient = (name, measure) => {
    setIngredients((prevIngredients) => {
      return [...prevIngredients, { name, measure }];
    });
  };

  const handleRemoveIngredient = (name) => {
    console.log({ name });
    setIngredients((prevIngredients) => {
      return prevIngredients.filter((ingredient) => ingredient.name !== name);
    });
  };

  return (
    <>
      <h2>Create recipe</h2>
      <div className="meal-container">
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} />; */}
        <form>
          <label htmlFor="title">Meal</label>
          <input
            type="title"
            placeholder="Meal Name"
            name="title"
            id="title"
            value={newMeal.title}
            onChange={handleChange}
          />

          <label htmlFor="category">Category</label>
          <input
            type="category"
            placeholder="category"
            name="category"
            id="category"
            value={newMeal.category}
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="description"
            placeholder="description"
            name="description"
            id="description"
            value={newMeal.description}
            onChange={handleChange}
          />
          <label htmlFor="instructions">Instructions</label>
          <input
            type="instructions"
            placeholder="instructions"
            name="instructions"
            id="instructions"
            value={newMeal.instructions}
            onChange={handleChange}
          />
          <br />
          <div className="">
            {ingredients.map((ingredient) => {
              return (
                <div className="ingredient">
                  <p className="name">{ingredient.name}</p>
                  <p className="measure">{ingredient.measure}</p>
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(ingredient.name)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <IngredientInput onAddIngredient={handleAddIngredient} />
          <br />
          {/* {Array(8)
            .fill(0)
            .map((_, index) => (
              <>
                <label htmlFor={`strIngredient${index + 1}`}>
                  Ingredient {index + 1}
                </label>
                <input
                  type={`strIngredient${index + 1}`}
                  placeholder={`strIngredient${index + 1}`}
                  name={`strIngredient${index + 1}`}
                  id={`strIngredient${index + 1}`}
                  value={newMeal[`strIngredient${index + 1}`]}
                  onChange={handleChange}
                />
                <label htmlFor={`strMeasure${index + 1}`}>
                  Measure {index + 1}
                </label>
                <input
                  type={`strMeasure${index + 1}`}
                  placeholder={`strMeasure${index + 1}`}
                  name={`strMeasure${index + 1}`}
                  id={`strMeasure${index + 1}`}
                  value={newMeal[`strMeasure${index + 1}`]}
                  onChange={handleChange}
                />

                <input
                  type="
          strInstructions"
                  placeholder="
          strInstructions"
                  name="
          strInstructions"
                  id="
          strInstructions"
                  value={newMeal.strInstructions}
                  onChange={handleChange}
                />
                <input
                  type="strArea"
                  placeholder="strArea"
                  name="strArea"
                  id="strArea"
                  value={newMeal.strArea}
                  onChange={handleChange}
                />
              </>
            ))} */}

          <label htmlFor="videoUrl">Video URL</label>
          <input
            id="videoUrl"
            type="text"
            name="videoUrl"
            value={newMeal.videoUrl}
            onChange={handleChange}
          />

          <button type="button" onClick={handleClick}>
            createRecipe
          </button>
        </form>
      </div>
    </>
  );
};

const IngredientInput = ({ onAddIngredient }) => {
  const [ingredientName, setIngredientName] = useState("potatoes");
  const [measure, setMeasure] = useState("");

  const handleSelectChange = (event) => {
    console.log(event);
    setIngredientName(event.target.value);
  };

  const handleChange = (event) => {
    setMeasure(event.target.value);
  };

  const handleAddIngredient = () => {
    onAddIngredient(ingredientName, measure);
    setMeasure("");
    // setIngredientName("");
  };

  return (
    <div className="ingredient-input">
      <select
        name="ingredients"
        value={ingredientName}
        onChange={handleSelectChange}
      >
        <option value="tomatoes">Tomatoes</option>
        <option value="potatoes">Potatoes</option>
        <option value="onions">Onions</option>
        <option value="ginger">Ginger</option>
      </select>
      <input
        name="measure"
        type="text"
        value={measure}
        onChange={handleChange}
      />
      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>
    </div>
  );
};
export default CreateRecipe;
