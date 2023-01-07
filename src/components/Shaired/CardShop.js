import React, { useContext } from "react";
// function
import { cutname, isincart, quantitycount } from "../../helper/function";
// context
import { Betting } from "../../context/BettingContext";
// spa
import { Link } from "react-router-dom";
// img
import trash from "../../img/trash.png";
// styles
import styles from "./CardShop.module.css";

const CardShop = ({ productsdata }) => {
  const { image, title, price } = productsdata;
  const { state, dispatch } = useContext(Betting);
  return (
    <div className={styles.cardmain}>
      <div className={styles.iclude}>
        <img src={image} alt="img" />
        <div>
          <h2>{cutname(title)}</h2>
          <span>price : {price}</span>
          <Link to={`/products/${productsdata.id}`}>Details</Link>
        </div>
      </div>
      <div className={styles.buttons}>
        {isincart(state, productsdata.id) ? (
          <button
            className={styles.buttonplus}
            onClick={() => dispatch({ type: "ICREASE", payload: productsdata })}
          >
            +
          </button>
        ) : (
          <button
            className={styles.buttonadd}
            onClick={() =>
              dispatch({ type: "ADD_ITEM", payload: productsdata })
            }
          >
            Add to Card
          </button>
        )}
        {quantitycount(state, productsdata.id) > 0 && (
          <span className={styles.span}>
            {quantitycount(state, productsdata.id)}
          </span>
        )}
        {quantitycount(state, productsdata.id) === 1 && (
          <button
            className={styles.btnimg}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productsdata })
            }
          >
            <img src={trash} alt="trash" />
          </button>
        )}

        {quantitycount(state, productsdata.id) > 1 && (
          <button
            className={styles.buttondec}
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
