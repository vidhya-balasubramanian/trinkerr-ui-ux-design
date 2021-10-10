import Image from "next/image";

import Angel from "../../assets/angel.svg";
import Fyer from "../../assets/fyer.svg";
import Zerodha from "../../assets/zerodha.svg";

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <p className="main-content-title">Welcome to the future of investing</p>
      <div className="main-content2">
        <span style={{ color: "#9631DC" }}>India’s</span> First
      </div>
      <div className="main-content3">Social Trading Platform</div>
      <p className="main-content-desc">
        New to trading? No idea where to invest? Find the top traders, observe
        their movements in the market and invest the smart way to make your
        money grow.
      </p>
      <div className="mc-input-btn-wrapper flex-container1">
        <div style={{ position: "relative" }}>
          <span className="mc-input-prefix">+91</span>
          <input className="main-content-mobile-number" />
        </div>
        <button type="button" className="main-content-get-started-btn ">
          Get Started
        </button>
      </div>
      <p className="mc-supported-brokers-title">Supported Brokers</p>
      <div className="flex-container1">
        <div className="mr30 img-wrapper">
          <Image src={Zerodha} alt="" />
        </div>
        <div className="mr30 img-wrapper">
          <Image src={Fyer} alt="" />
        </div>
        <div className="img-wrapper">
          <Image src={Angel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
