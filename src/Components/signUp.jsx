import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [signUpObj, setSignUpObj] = useState({
    username: "",
    email: "",
    password: "",
  });

  const takeUsername = (e) => {
    setSignUpObj({ signUpObj, username: e.target.value });
  };
  const takeEmail = (e) => {
    setSignUpObj({ ...signUpObj, email: "" });
  };
  const takePassword = (e) => {
    setSignUpObj({ signUpObj, password: e.target.value });
  };

  return (
    <div>
      <div id="sign-in-main-container">
        <div className="signin-main-content2">
          <img
            className="signin-oreo-logo"
            src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg"
            alt=""
          />
          <div className="signup-head">
            <h2
              style={{
                color: "white",
                margin: "none",
                padding: "none",
              }}
            >
              Sign Up
            </h2>
          </div>
          <span
            style={{
              color: "white",
              marginBottom: "20px",
            }}
          >
            Register a new memebership
          </span>
          <form className="input-form2">
            <span className="sign-form form1">
              <input
                className="signin-email-input input1"
                type="email"
                name="email"
                placeholder="Enter User Name"
                onChange={takeUsername}
              />
              <AccountCircleIcon className="icon1" />
            </span>
            <span className="sign-form form1">
              <input
                className="signin-password-input input1"
                type="email"
                name="email"
                placeholder="email"
                onChange={takeEmail}
              />
              <MailIcon className="icon1" />
            </span>
            <span className="sign-form form1">
              <input
                className="signin-password-input input1"
                type="email"
                name="email"
                placeholder="Password"
                onChange={takePassword}
              />
              <LockIcon className="icon1" />
            </span>
          </form>
          <div className="checkbox-container">
            <Checkbox color="default" />
            <span
              className="footer-watermark-container "
              style={{ width: "20rem" }}
            >
              I read and agree to the
              <span className="footer-themepark"> terms of usage</span>
            </span>
          </div>
          <button className="input1 sign-in-button">Sign In</button>
          <span className="forget-password">Forget Password?</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
