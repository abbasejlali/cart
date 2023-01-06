import React, { useContext } from "react";
// function
import { cutname, isincart, quantitycount } from "../../helper/function";
// contest
import { Betting } from "../../context/BettingContext";
import { Link } from "react-router-dom";
const CardShop = ({ productsdata }) => {
  const { image, title, price } = productsdata;
  const { state, dispatch } = useContext(Betting);
  return (
    <div>
      <div>
        <img src={image} alt="img" />
        <h2>{cutname(title)}</h2>
        <span>price : {price}</span>
        <Link to={`/products/${productsdata.id}`}>Details</Link>
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
        {quantitycount(state, productsdata.id) > 0 && (
          <span>{quantitycount(state, productsdata.id)}</span>
        )}
        {quantitycount(state, productsdata.id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productsdata })
            }
          >
            Remove
          </button>
        )}

        {quantitycount(state, productsdata.id) > 1 && (
          <button
            onClick={() =>
              dispatch({ type: "DECREASE", payload: productsdata })
            }
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default CardShop;
