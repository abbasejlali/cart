import React, { useContext } from "react";
// context
import { Betting } from "../../context/BettingContext";
// functions
import { cutname, quantitycount } from "../../helper/function";
// img
import trash from "../../img/trash.png";

const CardCart = ({ product }) => {
  const { image, title, quantity, price } = product;
  const { state, dispatch } = useContext(Betting);
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
        <div>
          {quantitycount(state, product.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: product })
              }
            >
              <img src={trash} alt="trash" />
            </button>
          )}
          {quantitycount(state, product.id) > 1 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -
            </button>
          )}
          {
            <button
              onClick={() => dispatch({ type: "ICREASE", payload: product })}
            >
              +
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default CardCart;
