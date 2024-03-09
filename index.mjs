import express from "express";

import recipeRouter from "./routes/recipeRoute.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(express.json());
app.use('/recipes',recipeRouter)

// app.get('/',(req,res)=>{
//     res.send('Pls work😂')
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})