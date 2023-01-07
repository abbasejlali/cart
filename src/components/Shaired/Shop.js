import React, { useContext } from "react";
import { Products } from "../../context/ProductsContext";
import CardShop from "./CardShop";
// styles
import styles from "./Shop.module.css";
const Shop = () => {
  const products = useContext(Products);
  return (
    <div className={styles.main}>
      {products.map((item) => (
        <CardShop key={item.id} productsdata={item} />
      ))}
    </div>
  );
};

export default Shop;
