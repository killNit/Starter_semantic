import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useHistory } from 'react-router-dom';
import { useFormInput } from "../customHooks/useFormInput";

const Register = (props) => {
  const email = useFormInput("roobs@gmail.com", "Email");
  const password = useFormInput("123456", "Password");
  const passwordConfirmation = useFormInput("123456", "Password Confirmaiton");
  // CAN add new fiels through migration here...const passwordConfirmation = useFormInput("123456", "Password Confirmaiton");

  const { handleRegister } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
      alert("Password is not a match, try again");
    } else {
      handleRegister(
        {
          // If new fields are added through migratino update here as well
          email: email.value,
          password: password.value,
        },
        history
      );
    }
  };

  

    return(
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <p>{email.lable}</p>
        <input autoFocus {...email} />
        <p>{password.lable}</p>
        <input type="password" {...password} />
        <p>{passwordConfirmation.lable}</p>
        <input type="password" {...passwordConfirmation} />
        <button type="submit">REGISTER</button>
        </form>
      </div>
    );
};

export default Register;