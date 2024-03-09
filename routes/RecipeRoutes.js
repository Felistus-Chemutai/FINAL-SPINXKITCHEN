import { Router, ro } from "express";
import router from "./recipeRoute";
const RecipeRoute = require("../controllers/Recipe")

router.get("/getGrecipe", RecipeRoute.GetRecipe);
router.post("/addRecipe", RecipeRoute.AddRecipe);
// router.put("/recipe", RecipeRoute.AddRecipe);
// router.delete("/recipe", RecipeRoute.AddRecipe);

