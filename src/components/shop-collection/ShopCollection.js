import React from "react";
import ShopCollectionItem from "../shop-collection-item/ShopCollectionItem";
import "./ShopCollection.scss";

const ShopCollection = ({ title, items }) => {
  return (
    <div className="shopCollection">
      <h1 className="shopCollection __ title">{title.toUpperCase()}</h1>
      <div className="shopCollection__preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ShopCollectionItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default ShopCollection;
