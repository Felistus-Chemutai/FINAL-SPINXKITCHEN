import { Router } from "express";
import RecipeController from "../controllers/RecipeController.js";

const RecipeRouter = Router();

// GET /recipes/get
RecipeRouter.get("/get", RecipeController.GetRecipe);
// POST /recipes/add
RecipeRouter.post("/add", RecipeController.AddRecipe);
// DELETE /recipes/:id
RecipeRouter.delete("/:id", RecipeController.DeleteRecipe);

export default RecipeRouter;
