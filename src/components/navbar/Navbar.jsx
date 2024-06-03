import React from "react";
import { GrCatalog } from "react-icons/gr";
import { FaBorderAll } from "react-icons/fa6";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { ImEnter } from "react-icons/im";
import { BsFillCalendarHeartFill } from "react-icons/bs";

import "../../sass/__navbar.scss";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="container">
        <div className="navbar__section">
          <div className="navbar__section-logo">
            <NavLink to={"/"}>
              <h2>AliExpress</h2>
            </NavLink>
          </div>
          <div className="navbar__section-links">
            <button>
              <GrCatalog />
              <p>Katalog </p>
            </button>
            <div className="search__input">
              <input type="text" placeholder="xiomi mi 11 ultra" />
              <button>Qidirib topilsin</button>
            </div>
            <NavLink to={"/wishlist"}>
              <button>
                <BsFillCalendarHeartFill />
                <p>Wishlist</p>
              </button>
            </NavLink>
            <NavLink to={"/cart"}>
              <button>
                <HiMiniShoppingCart />
                <p>Savat</p>
              </button>
            </NavLink>
            <NavLink to={"/admin"}>
              <button>
                <ImEnter />
                <p>Kirilsin</p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
