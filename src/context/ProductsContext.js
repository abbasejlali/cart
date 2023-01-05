import React, { useEffect, useState } from "react";
// Api
import { Getapi } from "../servies/Api";

export const Products = React.createContext();
const ProductsContext = ({ children }) => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      setProduct(await Getapi());
    };

    fetchapi();
  }, []);
  return (
    <div>
      <Products.Provider value={Product}>{children}</Products.Provider>
    </div>
  );
};

export default ProductsContext;
