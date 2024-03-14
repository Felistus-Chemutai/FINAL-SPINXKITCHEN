import express from "express";

import RecipeRouter from "./src/routes/RecipeRouter.js";
import CategoryRouter from "./src/routes/CategoryRouter.js";
import IngredientRouter from "./src/routes/IngredientRouter.js";
import ReviewRouter from "./src/routes/ReviewRouter.js";
import AuthRouter from "./src/routes/AuthRouter.js";
import adminRoute from "./src/Middlewares/admin-route.js";
import UserRouter from "./src/routes/UserRouter.js"

const app = express();
const port = process.env.PORT ?? 4000;

app.use(express.json());
app.use("/recipes", RecipeRouter);
app.use("/category", CategoryRouter);
app.use("/ingredient", IngredientRouter);
app.use("/review", adminRoute, ReviewRouter);
app.use("/user", UserRouter)
app.use("/auth", AuthRouter);

// app.get('/',(req,res)=>{
//     res.send('Pls work😂')
// })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
