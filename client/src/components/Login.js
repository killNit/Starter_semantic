import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useFormInput } from "../customHooks/useFormInput";

const Login = () => {
  const history = useHistory();
  const { handleLogin } = useContext(AuthContext);
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email: email.value, password: password.value }, history);
  };
  return (
    <div>
      <h1>LOG-IN</h1>
      <form onSubmit={handleSubmit}>
        <p>{email.label}</p>
        <input autoFocus {...email} />
        <p>{password.label}</p>
        <input type="password" {...password} />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
