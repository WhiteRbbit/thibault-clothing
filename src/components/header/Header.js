import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logoContainer" to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__options">
        <Link className="header__option" to="/shop">
          SHOP
        </Link>
        <Link className="header__option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
