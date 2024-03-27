import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import './Login.css'
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault()
    console.log({ password, email });
    try {
      await login({ password, email });
      setEmail("");
      setPassword("");
      return navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
 <div className="login-details">
      <h1>Login</h1>
      <form className="login-form">

        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password" aria-autocomplete="inline">password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
  
        <button type="submit" onClick={handleClick}>
          login
        </button>
      </form>
      </div>
  );
};

export default Login;
