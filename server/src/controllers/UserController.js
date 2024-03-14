import prisma from "../../prisma.js";

const AddUser = async (req, res) => {
  try {
    const users = req.body;
    const newUser = await prisma.user.create({ data: newUser });
    if (users) {
      res.status(200).json(users).end();
    } else {
      res.status(400).send(" no user user").end();
    }
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message);
  }
};
const GetUser = async (req, body) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users).end();
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message).end();
  }
};
const DeleteUser = async (req, body) => {
  try {
    const userId = req.params.userId;
    const result = await prisma.delete.user(userId);
    if (result) {
      res.status(200).send("user deleted successfully");
    } else {
      res.status(404).send("no user found");
    }
  } catch (error) {
    console.log(`something went wrong:${error}`);
    res.status(500).send(error.message).end();
  }
};

const UserController = {
  AddUser,
  GetUser,
  DeleteUser,
};

export default UserController;
