import React, { useState,  } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
const handleClick = async()=>{
  const response = await axios.post("http://localhost/4000/register",{username,email,password},{withCredentials:true})
  navigate("/login")
}
  return (
    <>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          id="email "
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="button"  onClick={handleClick
        }>
          register
        </button>
      </form>
    </>
  );
};

export default Register;
