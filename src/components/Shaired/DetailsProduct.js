import React, { useContext } from "react";

// spa
import { Link } from "react-router-dom";

// Context
import { Products } from "../../context/ProductsContext";

// styles
import styles from "./DetailsProduct.module.css";

const DetailsProduct = (props) => {
  const id = props.match.params.id;
  const data = useContext(Products);
  const product = data[id - 1];
  const { image, description, title, category, price } = product;
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <span>Category :</span>
          <span> {category} </span>
        </p>
        <div className={styles.pricediv}>
          <span>price : {price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
      <img src={image} alt="product" />
    </div>
  );
};

export default DetailsProduct;
