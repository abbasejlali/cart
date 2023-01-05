import React from "react";
import axios from "axios";

const BASE_API = "https://jsonplaceholder.typicode.com/posts";

export const Getapi = async () => {
  const Product = await axios.get(BASE_API);
  return Product.data;
};
