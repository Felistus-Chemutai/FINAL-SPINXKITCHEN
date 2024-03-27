import { validationResult } from "express-validator";
import prisma from "../../prisma.js";

import {
  generateHashedPassword,
  generateToken,
  comparePassword,
} from "../Middlewares/auth.js";

const Register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ status: "fail", message: errors.array() });
    }

    const { username, password, email } = req.body;

    const existingUser = await prisma.user.findMany({
      where: {
        OR: [{ password: password }, { email: email }],
      },
    });
    if (existingUser.length > 0) {
      return res
        .status(400)
        .send({ status: "fail", message: "user exists already" });
    }
    const hashedPassword = await generateHashedPassword(password);

    await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        email: email,
      },
    });

    res
      .status(200)
      .send({ status: "success", message: "data sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", message: "internal server error" });
  }
};

const Login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ status: "fail", message: errors.array() });
    }
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res
        .status(401)
        .send({ status: "fail", message: "invalid username" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        status: "fail",
        message: "invalid password try again",
      });
    }

    const token = generateToken(user.id);
    req.session.user = user;
    res.cookie("auth_token", token);
    res.status(201).send({ status: "success", token, user });
  } catch (error) {
    res.status(500).send({ status: "fail", message: error.message });
  }
};

const AuthCountroller = {
  Register,
  Login,
};

export default AuthCountroller;
