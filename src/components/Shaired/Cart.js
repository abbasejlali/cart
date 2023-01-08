import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardCart from "./CardCart";

// Context
import { Betting } from "../../context/BettingContext";

// styles
import styles from "./Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(Betting);

  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        {state.selectedItems.map((items) => (
          <CardCart key={items.id} product={items} />
        ))}
      </div>
      <div className={styles.checkoutdiv}>
        {state.itemsCounter > 0 && (
          <div>
            <span>ItemsCounter : {state.itemsCounter}</span>
            <span>TotalPrice : {state.total}</span>
            <div>
              <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                Checkout
              </button>
              <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>
          </div>
        )}

        {state.checkout === true && (
          <div>
            <span>Successfuly!!!</span>
            <Link to="/products">Back to Products</Link>
          </div>
        )}
        {state.checkout === false && state.itemsCounter === 0 && (
          <div>
            <span>oooooppppppssssssss!!!</span>
            <Link to="/products">Back to Products</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
