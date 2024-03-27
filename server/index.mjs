import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import RecipeRouter from "./src/routes/RecipeRouter.js";
import CategoryRouter from "./src/routes/CategoryRouter.js";
import IngredientRouter from "./src/routes/IngredientRouter.js";
import ReviewRouter from "./src/routes/ReviewRouter.js";
import AuthRouter from "./src/routes/AuthRouter.js";
import adminRoute from "./src/Middlewares/admin-route.js";
import UserRouter from "./src/routes/UserRouter.js";
import RegisterRouter from "./src/routes/RegisterRouter.js";
import loginRouter from "./src/routes/LoginRouter.js"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
//use cors
const whitelist = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const app = express();
const port = process.env.PORT // 4000;
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(session({
  secret: process.env.SECRET_KEY ?? "secret",
  resave: true,
  saveUninitialized: false,
}))
app.use(express.json());
app.use("/recipe", RecipeRouter);
app.use("/category", CategoryRouter);
app.use("/ingredient", IngredientRouter);
app.use("/review", adminRoute, ReviewRouter);
app.use("/user", UserRouter);
app.use("/auth", AuthRouter);
app.use("/register", RegisterRouter);
app.use("/login", loginRouter)


app.get("/", (req, res) => {
  res.send("Pls work😂");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
