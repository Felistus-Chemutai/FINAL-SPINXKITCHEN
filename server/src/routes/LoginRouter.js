import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
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
        email: email
      }
    });

    // Check if user exists
    if (!userLogin) {
      return res.status(401).send("Invalid username or password"); // User not found
    }

    const passwordMatch = await comparePasswords(password, userLogin.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid username or password");
    }
    res.status(200).send("Login successful");
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).send("Internal server error");
  }
});

export default router;
