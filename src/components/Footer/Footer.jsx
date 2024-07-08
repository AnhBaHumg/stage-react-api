import "./Footer.css";
import React from "react";

const Footer = () => {
  const handleGitHubLink = () => window.open("https://github.com/AnhBaHumg");
  const handleFaceBookLink = () => window.open("https://www.facebook.com/");
  const handleTripleTenLink = () => window.open("https://tripleten.com/");

return (
  <footer className="footer">
    <p className="footer__copyright">
      {" "}
      © {new Date().getFullYear()} Supersite, Powered by News API
    </p>
    <nav className="footer__nav">
      <ul className="footer__links">
        <li>
          <button className="footer__button">Home</button>
        </li>
        <li>
          <button className="footer__button" onClick={handleTripleTenLink}>
            TripleTen
          </button>
        </li>
      </ul>
      <ul className="footer__icons">
        <li>
          <button
            className="footer__link-icon footer__link-icon-github"
            onClick={handleGitHubLink}
          ></button>
        </li>
        <li>
          <button
            className="footer__link-icon footer__link-icon-facebook"
            onClick={handleFaceBookLink}
          ></button>
        </li>
      </ul>
    </nav>
  </footer>
);
};

export default Footer;