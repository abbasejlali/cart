import React from "react";
// functions
import { cutname } from "../../helper/function";
const CardCart = ({ product }) => {
  const { image, title, quantity, price } = product;
  return (
    <div>
      <div>
        <img src={image} alt="img" />
        <div>
          <span>Counter : {quantity}</span>
          <br />
          <span>Price :{price}</span>
        </div>
        <div>
          <span>{cutname(title)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
