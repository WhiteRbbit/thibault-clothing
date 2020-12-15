import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__menu">
        <div className="homepage__menuItem">
          <div className="homepage__menuContent">
            <h1 className="homepage__menuContentTitle">HATS</h1>
            <span className="homepage__menuContentSubtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__menuItem">
          <div className="homepage__menuContent">
            <h1 className="homepage__menuContentTitle">JACKETS</h1>
            <span className="homepage__menuContentSubtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__menuItem">
          <div className="homepage__menuContent">
            <h1 className="homepage__menuContentTitle">SNEAKERS</h1>
            <span className="homepage__menuContentSubtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__menuItem">
          <div className="homepage__menuContent">
            <h1 className="homepage__menuContentTitle">WOMENS COLLECTION</h1>
            <span className="homepage__menuContentSubtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="homepage__menuItem">
          <div className="homepage__menuContent">
            <h1 className="homepage__menuContentTitle">MENS COLLECTION</h1>
            <span className="homepage__menuContentSubtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
