import React, { useContext } from "react";
// function
import { cutname, isincart } from "../../helper/function";
// contest
import { Betting } from "../../context/BettingContext";
const CardShop = ({ productsdata }) => {
  const { image, title, price } = productsdata;
  const { state, dispatch } = useContext(Betting);
  return (
    <div>
      <div>
        <img src={image} alt="img" />
        <h2>{cutname(title)}</h2>
        <span>price : {price}</span>
      </div>
      <div>
        {isincart(state, productsdata.id) ? (
          <button
            onClick={() => dispatch({ type: "ICREASE", payload: productsdata })}
          >
            +
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "ADD_ITEM", payload: productsdata })
            }
          >
            Add to Card
          </button>
        )}
      </div>
    </div>
  );
};

export default CardShop;
