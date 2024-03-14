import { Router } from "express";
import IngredientController from "../controllers/IngredientController.js";
const IngredientRouter = Router();
IngredientRouter.get("/get", IngredientController.GetIngredient);
IngredientRouter.post("/add", IngredientController.AddIngredient);
IngredientRouter.delete("/:id", IngredientController.DeleteIngredient);

export default IngredientRouter;
