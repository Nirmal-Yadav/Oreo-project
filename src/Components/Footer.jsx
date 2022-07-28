import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer id="footer-container">
        <span className="footer-link-container">
          <span className="contact-us">CONTACT US</span>
          <span className="about-us">ABOUT US</span>
          <span className="FAQ">FAQ</span>
        </span>
        <span className="footer-watermark-container">
          c 2022, Designed by
          <span className="footer-themepark">ThemeMaker</span>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
