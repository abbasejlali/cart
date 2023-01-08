import React, { useContext } from "react";

// context
import { Betting } from "../../context/BettingContext";

// functions
import { cutname, quantitycount } from "../../helper/function";

// img
import trash from "../../img/trash.png";

// styles
import styles from "./CardCart.module.css";

const CardCart = ({ product }) => {
  const { image, title, quantity, price } = product;
  const { state, dispatch } = useContext(Betting);
  return (
    <div className={styles.main}>
      <img src={image} alt="img" />
      <div className={styles.counterdiv}>
        <span>Counter : {quantity}</span>
        <span>Price :{price}</span>
      </div>
      <div className={styles.titlediv}>
        <span>Title :</span>
        <span>{cutname(title)}</span>
      </div>
      <div className={styles.buttons}>
        {quantitycount(state, product.id) === 1 && (
          <button
            className={styles.btnimg}
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}
          >
            <img src={trash} alt="trash" />
          </button>
        )}
        {quantitycount(state, product.id) > 1 && (
          <button
            className={styles.buttondec}
            onClick={() => dispatch({ type: "DECREASE", payload: product })}
          >
            -
          </button>
        )}
        {
          <button
            className={styles.buttonplus}
            onClick={() => dispatch({ type: "ICREASE", payload: product })}
          >
            +
          </button>
        }
      </div>
    </div>
  );
};

export default CardCart;
