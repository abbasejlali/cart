import React, { useContext } from "react";
import Shop from "./Shop";
// spa
import { Link } from "react-router-dom";
// Context
import { Products } from "../../context/ProductsContext";

const DetailsProduct = (props) => {
  const id1 = props.match.params.id;
  const data = useContext(Products);
  const productmain = data[id1 - 1];
  const { image, description, title, category, price } = productmain;

  return (
    <div>
      <div>
        <img src={image} alt="img" />
        <div>
          <span>{category}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{price}</span>
          <Link to={Shop}>Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
