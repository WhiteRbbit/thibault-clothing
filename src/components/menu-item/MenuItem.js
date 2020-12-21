import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match, pageUrl }) => {
  return (
    <div
      className={`${size} menuItem`}
      onClick={() => history.push(`${match.url}${pageUrl}`)}
    >
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

export default withRouter(MenuItem);
