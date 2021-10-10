import Image from "next/image";

import Logo from "../../assets/logo.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title-elem">
        <div className="img-wrapper" style={{marginRight: '0.72rem'}}>
          <Image src={Logo} alt="" />
        </div>
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
          <li >
            <a
              href="https://twitter.com/Trinkerr_IN"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: 10 }}
            >
              <Image src={Twitter} alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsM_3XZEEQpNSk3Vk3OjQJw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Youtube} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
