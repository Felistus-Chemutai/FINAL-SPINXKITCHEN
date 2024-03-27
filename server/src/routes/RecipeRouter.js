import { Router } from "express";
import RecipeController from "../controllers/RecipeController.js";
import AuthCountroller from "../controllers/AuthCountroller.js";
import protectedRoute from "../Middlewares/protected-route.js";

const RecipeRouter = Router();

// GET /recipes/get
RecipeRouter.get("/get", RecipeController.GetRecipe);
// POST /recipes/add
RecipeRouter.post("/add", protectedRoute, RecipeController.AddRecipe);
// DELETE /recipes/:id
RecipeRouter.delete("/:id", protectedRoute, RecipeController.DeleteRecipe);

export default RecipeRouter;
