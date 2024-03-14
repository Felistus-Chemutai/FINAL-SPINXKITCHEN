import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const CategoryRouter = Router();

CategoryRouter.get("/get", CategoryController.GetCategory);
CategoryRouter.post("/add", CategoryController.AddCategory);
CategoryRouter.delete("/:id", CategoryController.DeleteCategory);

export default CategoryRouter;
