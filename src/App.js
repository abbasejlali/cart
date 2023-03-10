import React from "react";
import Shop from "./components/Shaired/Shop";
import DetailsProduct from "./components/Shaired/DetailsProduct";
import Navbar from "./components/Shaired/Navbar";
import Cart from "./components/Shaired/Cart";
// styles
import styles from "./style.css";
// context
import ProductsContext from "./context/ProductsContext";
import BettingContext from "./context/BettingContext";
// spa
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <ProductsContext>
        <BettingContext>
          <Navbar />
          <Switch>
            <Route path="/products/:id" component={DetailsProduct} />
            <Route path="/products" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Redirect from="/" to="/products" />
          </Switch>
        </BettingContext>
      </ProductsContext>
    </div>
  );
}

export default App;
