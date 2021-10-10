import React from "react";

import Logo from "../../assets/logo.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";


const Footer = () => {
  return (
    <footer>
      <div className="footer-title-elem">
        <img src={Logo} alt="" />
        <p className="footer-company-title">Trinkerr</p>
      </div>
      <div className="footer-content-elem">
        <div className="footer-content-elem-left">
          <ul className="footer-ul-elements">
            <li>Company</li>
            <li>Support</li>
            <li>
              <a
                href="https://trinkerr.com/documents/terms-and-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://trinkerr.com/documents/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>Disclosures</li>
            <li>
              <a
                href="https://angel.co/company/trinkerr-learning-technologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
          <ul className="footer-ul-elements">
            <li>Resources</li>
            <li>Newsletter</li>
            <li>Podcast</li>
          </ul>
        </div>
        <ul className="footer-ul-elements">
          <li>Social</li>
          <li>
            <a href="https://twitter.com/Trinkerr_IN" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="" style={{ marginRight: 10 }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsM_3XZEEQpNSk3Vk3OjQJw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
