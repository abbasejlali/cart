import React, { useContext } from "react";

// spa
import { Link } from "react-router-dom";

// context
import { Betting } from "../../context/BettingContext";

// img
import shoppingimge from "../../img/shoppingimge.png";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(Betting);
  return (
    <div className={styles.main}>
      <div className={styles.productsdiv}>
        <Link to="/products">Products</Link>
      </div>
      <div className={styles.logocartdiv}>
        <Link to="/cart">
          <img src={shoppingimge} alt="cart" />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
