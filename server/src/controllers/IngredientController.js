import prisma from "../../prisma.js";

const AddIngredient = async (req, res, body) => {
  try {
    const items = req.body;
    const newItem = await prisma.ingredient.create({ data: newIngredient });
    res.status(200).json(items).end();
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message);
  }
};
const GetIngredient = async (req, res, body) => {
  try {
    const items = await prisma.ingredient.findMany();
    if (items) {
      res.status(200).json(items);
    } else {
      res.status("not items found");
    }
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message).end();
  }
};
const DeleteIngredient = async (req, res, body) => {
  try {
    const itemId = req.params.id;
    const result = await prisma.ingredient.delete(itemId);
    if (result) {
      res.status(200).send("item deleted successfully");
    } else {
      res.status(404).send("no item found");
    }
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message);
  }
};
const IngredientController = {
  AddIngredient,
  GetIngredient,
  DeleteIngredient
};
export default IngredientController;
