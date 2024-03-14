import prisma from "../../prisma.js";

const AddReview = async (req, res) => {
  try {
    const items = req.body;
    const newItem = await prisma.review.create({ data: newReview });
    res.status(200).json(items).end();
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message);
  }
};
const GetReview = async (req, res) => {
  try {
    const items = await prisma.review.findMany();
    if (items) {
      res.status(200).json(items).end();
    } else {
      res.status(404).send("not item found").end();
    }
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message).end();
  }
};
const DeleteReview = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const result = await prisma.review.delete(itemId);
    if (result) {
      res.status(200).json(items);
    } else {
      res.status(404).send("no item found");
    }
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message);
  }
};
const ReviewController = {
  AddReview,
  GetReview,
  DeleteReview,
};
export default ReviewController;
