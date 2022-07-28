import React, { useState } from "react";

import Header from "./header";
import Footer from "./Footer";
import SignIn from "./sign-in";
import SignUp from "./signUp";

const SignInUp = () => {
  const [signUp, setSignUp] = useState(true);
  const handleSignUpClick = (value) => {
    setSignUp(value);
  };

  return (
    <div id="signIn-container">
      <Header signUpIn={handleSignUpClick} />

      {signUp ? <SignIn /> : <SignUp />}
      <Footer />
    </div>
  );
};
export default SignInUp;
