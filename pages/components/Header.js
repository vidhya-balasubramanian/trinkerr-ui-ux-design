import React from "react";

import Logo from "../../assets/logo.svg";
import SigninIcon from "../../assets/signin.svg";


const Header = () => {
  return (
    <header>
      <div className="header-left-elements">
        <img src={Logo} alt="" className="header-logo" />
        <p className="header-company-name">Trinkerr</p>
      </div>
      <ul className="header-right-elements">
        <li>FAQ</li>
        <li>For Investors</li>
        <li>
          <a
            className="flex-container1"
            rel="noopener noreferrer"
            href="https://web.trinkerr.com/"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img src={SigninIcon} alt="" className="signin-icon" />
            <p>Sign in</p>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
