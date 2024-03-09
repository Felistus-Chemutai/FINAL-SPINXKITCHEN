import { Router } from "express";
import prisma from "../prisma.js";

const router = Router();

const getRecipes = async () => {
  return await prisma.recipe.findMany();
};

//get method
router.get("/recipes", async (req, res) => {
  const items = await getRecipes();
  if (items) {
    res.status(200).json(items);
  } else {
    res.status(404).send("not item found");
  }
});
//post method
router.post("/", async (res, req) => {
  try {
    const items = req.body;
    const newItem = await prisma.recipe.create({
      data: items,
    });

    res.json(newItem);
  } catch (error) {
    console.error(`not item found:${error}`);
  }
});

export default router;
