import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import "../../sass/__hero.scss";
import herobg from "../../assets/bannerImg.webp";
import "../../sass/__hero.scss";
const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero__section">
          <div className="hero__info">
            <div>
              <h1>ONE PRICE</h1>
              <p>For orders from 3 to 10 items</p>
              <button>
                <span>BUY</span>
                <FaAngleRight />
              </button>
            </div>
          </div>
          <img src={herobg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
