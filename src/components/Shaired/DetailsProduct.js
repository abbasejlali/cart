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
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category :</span>
          <span> {category} </span>
        </p>
        <div>
          <span>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
      <img src={image} alt="product" />
    </div>
  );
};

export default DetailsProduct;
