import React, { useContext } from "react";
// spa
import { Link } from "react-router-dom";
// context
import { Betting } from "../../context/BettingContext";
// img
import shoppingimge from "../../img/shoppingimge.png";

const Navbar = () => {
  const { state } = useContext(Betting);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/cart">
          <img src={shoppingimge} alt="cart" />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
