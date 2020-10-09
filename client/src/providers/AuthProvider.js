import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, history) => {
    try {
      let res = await axios.post("/api/auth/", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  const handleLogin = async (user, history) => {
    try {
      debugger;
      let res = await axios.post("api/auth/sign_in", user);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      alert("error in logging in");
      // debugger;
    }
  };

  const handleLogout = async (history) => {
    try {
      let res = await axios.delete("/api/auth/sign_out");
      setUser(res.data.data);
      history.push("/login");
    } catch (err) {
      alert("error: logout failed");
      // debugger;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        handleRegister,
        handleLogout,
        handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
