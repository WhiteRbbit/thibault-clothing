import React from "react";
import ShopCollection from "../../components/shop-collection/ShopCollection";
import SHOP_DATA from "./shop-data";

const ShopPage = () => {
  return (
    <div className="shopPage">
      {SHOP_DATA.map((data) => (
        <ShopCollection key={data.id} title={data.title} items={data.items} />
      ))}
    </div>
  );
};

export default ShopPage;
