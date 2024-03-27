import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import prisma from "../../prisma";



const comparePasswords = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("missing email or password");
  }

  try {
    const userLogin = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    });

    // Check if user exists
    if (rows.length === 0) {
      return res.status(401).send("Invalid email or password"); // User not found
    }

    // const user = rows[0];
    const passwordMatch = await comparePasswords(password, userLogin.password);
    if (!passwordMatch) {
      return res.status(401).send("Incorrect email or password");
    }
    res.status(200).send("Login successful");
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).send("Internal server error");
  }
};

const LoginController = {
  Login,
};

export default LoginController;
