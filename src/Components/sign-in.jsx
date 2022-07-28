import React, { useState } from "react";
import "../CSS/signIn.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

const SignIn = () => {
  const [emailObj, setEmailObj] = useState({ username: "", password: "" });

  const handleUserNameChange = (e) => {
    setEmailObj({ ...emailObj, username: e.target.value });
    console.log(emailObj);
  };
  const handlePasswordChange = (e) => {
    setEmailObj({ ...emailObj, password: e.target.value });
    console.log(emailObj);
  };
  return (
    <div>
      <div id="sign-in-main-container">
        <div className="signin-main-content">
          <img
            className="signin-oreo-logo"
            src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg"
            alt=""
          />
          <h2 style={{ color: "white" }}>Login In</h2>
          <form className="input-form">
            <span className="sign-form form1">
              <input
                className="signin-email-input input1"
                type="email"
                name="email"
                placeholder="Enter User Name"
                onChange={handleUserNameChange}
              />
              <AccountCircleIcon className="icon1" />
            </span>
            <span className="sign-form form1">
              <input
                className="signin-password-input input1"
                type="email"
                name="email"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              <LockIcon className="icon1" />
            </span>
          </form>
          <button className="input1 sign-in-button">Sign In</button>
          <span className="forget-password">Forget Password?</span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
