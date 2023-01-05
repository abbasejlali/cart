import React from "react";
// function
import { cutname } from "../../helper/function";
const CardShop = ({ productsdata }) => {
  const { image, title, price, quantity } = productsdata;
  return (
    <div>
      <div>
        <img src={image} alt="img" />
        <h2>cutname({title})</h2>
        <span>price : {price}</span>
      </div>
      <div>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default CardShop;
