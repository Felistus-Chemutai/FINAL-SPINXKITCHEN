import prisma from "../prisma.js";

module.exports.AddRecipe = async (req, res, body) => {
  try {
    const newRecipe = req.body;

    const newItem = await prisma.recipe.create(newRecipe);
    res.status(200).json(newItem).end();
  } catch (error) {
    console.error(`Something went wrong ${error}`);
  }
};
//add recipe implementation
module.exports.GetRecipe = async (req, res, body) => {
  try {
    const items = await getRecipes();
    if (items) {
      res.status(200).json(items);
    } else {
      res.status(404).send("not item found");
    }
  } catch (error) {
    console.error(`Something went wrong ${error}`);
  }
};
//delete impementation
