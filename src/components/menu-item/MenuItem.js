import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menuItem`}>
      <div
        className="menuItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="menuItem__content">
        <h1 className="menuItem__contentTitle">{title.toUpperCase()}</h1>
        <span className="menuItem__contentSubtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
