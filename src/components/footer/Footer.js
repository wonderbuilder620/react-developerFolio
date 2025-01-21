import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "Let's talk ❤️ about how our perspective and experience can benefit your project."
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
            href="https://github.com/wonderbuilder620/react-developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            Yrii T.
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          ©2025, Made by Yrii Tokar
        </p>
      </div>
    </Fade>
  );
}
