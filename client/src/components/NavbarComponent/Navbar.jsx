import React, { useContext ,useState} from "react";

import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import DarkTheme from "../DarkThemeToggleComponent/DarkTheme"
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="main-container">
      <div className="nav">
        <ul className="home">
        <Link href="/">Home</Link>
        </ul>
        
        <ul>
          {!user ? (
            <>
              <li>
                <Link to="/register" className="link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/create-recipe" className="link">
                  CreateRecipe
                </Link>
              </li>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </ul>
        <DarkTheme/>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
