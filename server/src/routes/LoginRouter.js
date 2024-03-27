import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../Middlewares/auth.js";
const prisma = new PrismaClient();
const router = express.Router();

const comparePasswords = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("missing email or password");
  }

  try {
    const userLogin = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Check if user exists
    if (!userLogin) {
      return res.status(401).send("user not found"); // User not found
    }

    const passwordMatch = await bcrypt.compare(password, userLogin.hashedPassword);
    if (!passwordMatch) {
      return res.status(401).send("incorrect email or password");
    }
    const auth_token = generateToken(userLogin.id);
    res.cookie("auth_token", auth_token)
    res.status(200).send({status: 'success', user: userLogin});
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).send("Internal server error");
  }
});

export default router;
