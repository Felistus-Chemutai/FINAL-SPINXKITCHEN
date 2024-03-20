import express from "express"
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

//using cors middleware

//creating register
const AddRegister = async (req, res) => {
  console.log()
  try {
    const {username ,password,email}  =  req.body;
    // const password = await req.body;
    // const email  = await req.body;
    //check if the user exists
    // const user = prisma.user.findUnique({ where: { email: email } });

    // if (!user) {
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(password, salt);
      
      const newUser = await prisma.user.create({
        data: {
          username: username,
          password: password,
          email: email,
        },
      });
      res.status(201).json(newUser).end();
    // } else {
    //   res.status(401).send("user exists").end();
    // }
  } catch (error) {
    console.error( error);
    // return res.status(500).json( "Internal server error");
  }
};


export default AddRegister;
