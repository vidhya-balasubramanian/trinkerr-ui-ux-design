import Image from "next/image";

import Logo from "../../assets/logo.svg";
import SigninIcon from "../../assets/signin.svg";

const Header = () => {
  return (
    <header>
      <div className="header-left-elements">
        <div className="header-logo img-wrapper">
          <Image src={Logo} alt="" />
        </div>

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
            <div className="signin-icon img-wrapper">
              <Image src={SigninIcon} alt="" />
            </div>
            <p>Sign in</p>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
