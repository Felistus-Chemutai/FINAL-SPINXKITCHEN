import React, { useState } from "react";
import axios from "axios"
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", data, {
        withCredentials: true,
      });
      console.log('response: ', response.data);
      // set user
      setUser(response.data.user)
    } catch (error) {
        setUser(null)
      throw error;
    }
  };


  const logout = async () => {
    try {
        const response = ''// axios.get ya kulogout
        setUser(null)
    } catch (error) {
        setUser(null)
      throw error;
    }
  };


  const register = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        data,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
