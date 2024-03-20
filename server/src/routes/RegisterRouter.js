import express from "express";
import prisma from "../../prisma.js";
import bcrypt from "bcrypt";
import AddRegister from "../controllers/RegisterController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log();
  try {
    const { username, password, email } = req.body;

    const user = await prisma.user.findUnique({ where: { email: email } });
    console.log("User ", user);

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          username: username,
          hashedPassword: hashedPassword,
          email: email,
        },
      });
      console.log(newUser);
      return res.status(201).json(newUser).end();
    } else {
      res.status(401).send("user exists").end();
    }
  } catch (error) {
    console.error(error);
    // return res.status(500).json( "Internal server error");
  }
});
export default router;
