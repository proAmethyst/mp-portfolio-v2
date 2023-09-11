import React from "react";
import "./Style/Header.scss";
import gh from "../Assets/GitHub.png";
import lki from "../Assets/LinkedIn.png";
import insta from "../Assets/Instagram.png";

const Header = () => {
  return (
    <div>
      <div className="home">
        <div className="buffer1"></div>
        <div className="text-box">
          <div className="main-title-1">I'm Profir Mihai</div>
          <div className="main-title-2">web developer</div>
          <div className="subtitle">and this is my portfolio</div>
        </div>

        <div className="buffer2"></div>

        <div className="social-box">
          <div className="social-media">
            <div className="gh-box">
              <a href="https://www.google.com" className="lnk">
                <img alt="gh" src={gh} />
              </a>
            </div>
            <div className="lki-box">
              <a href="https://www.google.com" className="lnk">
                <img alt="lki" src={lki} />
              </a>
            </div>
            <div className="insta-box">
              <a href="https://www.google.com" className="lnk">
                <img alt="insta" src={insta} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
