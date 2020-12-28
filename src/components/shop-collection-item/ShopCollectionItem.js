import React from "react";
import "./ShopCollectionItem.scss";

const ShopCollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="shopCollectionItem">
      <div
        className="shopCollectionItem__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="shopCollectionItem__infos">
        <span className="shopCollectionItem__name">{name}</span>
        <span className="shopCollectionItem__price">{price}$</span>
      </div>
    </div>
  );
};

export default ShopCollectionItem;
