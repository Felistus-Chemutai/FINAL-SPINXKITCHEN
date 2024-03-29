import React from "react";
import Meal from "../components/MealComponent/Meal";
import RecipeInfo from "../components/RecipeInfoComponent/RecipeInfo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import CreateRecipe from "../pages/CreateRecipe.jsx";
import NotFound from "../pages/NotFound.jsx";
import Navbar from "../components/NavbarComponent/Navbar.jsx";
import "./App.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Meal />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-recipe",
        element: <CreateRecipe />,
      },
      {
        path: "/recipes/:recipe_id",
        element: <RecipeInfo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
