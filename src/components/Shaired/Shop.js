import React, { useEffect, useState } from "react";
// Api
import Api from "../../servies/Api";
const Shop = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      setProduct(await Api);
    };

    fetchapi();
  }, []);

  return <div></div>;
};

export default Shop;
