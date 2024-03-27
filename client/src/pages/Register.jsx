import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import "./register.css"
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault()
    console.log({ username, email, password });
    try {
      await register({ username, email, password });
      setEmail("");
      setPassword("");
      setUsername("");
      return navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="register-details">
        <h1>Register</h1>

      <form className="register-form">
          
          <label htmlFor="username">username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            autoSave
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="button" onClick={handleClick}>
            register
          </button>
          <div className="login-link">
            <p>Already have an account?</p> <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
