import prisma from "../../prisma.js";

const AddCategory = async (req, res, body) => {
  try {
    const newCatgory = req.body;
    const newItem = await prisma.category.create({ data: newCategory });
    res.status(200).json(newItem).end();
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message).end();
  }
};
const GetCategory = async (req, res, body) => {
  try {
    const items = await prisma.category.findMany();
    if (items) {
      res.status(200).json(items);
    } else {
      res.status(404).send("not item in category found");
    }
  } catch (error) {
    console.log(`something went wrong:${erro}`);
    res.status(500).send(error.message);
  }
};
const DeleteCategory = async (req, res, body) => {
  try {
    const itemId = req.params.id;
    const result = await prisma.category.delete(itemId);
    if (result) {
      res.status(200).send("item deleted successfully");
    } else {
      res.status(404).send("item in category cannot be found");
    }
  } catch (error) {
    console.log(`something went wrong:${erro}`);
    res.status(500).send(error.message);
  }
};

const CategoryController = {
  AddCategory,
  GetCategory,
  DeleteCategory
};

export default CategoryController
