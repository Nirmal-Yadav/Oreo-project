import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ signUpIn }) => {
  const [value, setValue] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setValue(!value);
    signUpIn(value);
  };
  return (
    <div>
      <header id="header-container">
        <span className={` ${menu ? "new-logo" : "signin-logo-container"}  `}>
          Oreo
        </span>
        <span className="menu-icon-container">
          <MenuIcon
            className="menu-icon"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          />
        </span>
        <span
          className={` ${menu ? "new-menubox" : "signin-link-container"}  `}
        >
          <span className="signin-home-container font">Home</span>
          <span className="sign-in-search-result font">Search Result</span>
          <span className="signin-twitter-icon">twit</span>
          <span className="signin-facebook-icon">fb</span>
          <span className="signin-insta-icon">inst</span>
          {value ? (
            <button className="signup-button" onClick={handleClick}>
              SIGN UP
            </button>
          ) : (
            <button className="signup-button" onClick={handleClick}>
              SIGN IN
            </button>
          )}
        </span>
      </header>
    </div>
  );
};
export default Header;

// {value ? (
//   <button className="signup-button" onClick={handleClick}>
//     SIGN UP
//   </button>
// ) : (
//   <button className="signup-button" onClick={handleClick}>
//     SIGN IN
//   </button>
// )}
