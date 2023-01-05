import React from "react";
import Shop from "./components/Shaired/Shop";

// context
import ProductsContext from "./context/ProductsContext";
function App() {
  return (
    <div>
      <ProductsContext>
        <Shop />
      </ProductsContext>
    </div>
  );
}

export default App;
