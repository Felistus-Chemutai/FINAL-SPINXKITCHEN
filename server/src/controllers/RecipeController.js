import prisma from "../../prisma.js";

const AddRecipe = async (req, res, next) => {
  try {
    const newRecipe = req.body;

    const newItem = await prisma.recipe.create({ data: newRecipe });
    res.status(200).json(newItem).end();
  } catch (error) {
    console.error(`Something went wrong ${error}`);
    res.status(500).send(error.message).end();
  }
};

//add recipe implementation
const GetRecipe = async (req, res, next) => {
  try {
    const items = await prisma.recipe.findMany();
    if (items) {
      res.status(200).json(items);
    } else {
      
      res.status(404).send("not item found");
      
    }
  } catch (error) {
    console.error(`Something went wrong ${error}`);
    res.status(500).send(error.message).end();
  }
};
//delete impementation
const DeleteRecipe = async (req, res) => {
  try {
    const itemId = req.params.id;
    const result = await prisma.recipe.delete(itemId);

    if (result) {
      res.status(200).send("item deleted successfully").end();
    } else {
      res.status(404).send("item not found").end();
    }
  } catch (error) {
    res.status(500).send(error.message).end();
  }
};

const RecipeController = {
  AddRecipe,
  GetRecipe,
  DeleteRecipe,
};

export default RecipeController;
