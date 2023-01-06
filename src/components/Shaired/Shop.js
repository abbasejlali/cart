import React, { useContext } from "react";
import { Products } from "../../context/ProductsContext";
import CardShop from "./CardShop";

const Shop = () => {
  const products = useContext(Products);
  return (
    <div>
      {products.map((item) => (
        <CardShop key={item.id} productsdata={item} />
      ))}
    </div>
  );
};

export default Shop;
