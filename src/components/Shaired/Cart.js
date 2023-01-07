import React, { useContext } from "react";
// Context
import { Betting } from "../../context/BettingContext";
import CardCart from "./CardCart";

const Cart = () => {
  const { state, dispatch } = useContext(Betting);

  return (
    <div>
      <div>
        <div>
          {state.selectedItems.map((items) => (
            <CardCart key={items.id} product={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
