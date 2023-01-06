import React from "react";
import Shop from "./components/Shaired/Shop";

// context
import ProductsContext from "./context/ProductsContext";
import BettingContext from "./context/BettingContext";
// spa
// import { Route, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <ProductsContext>
        <BettingContext>
          <Shop />
        </BettingContext>
      </ProductsContext>
    </div>
  );
}

export default App;
