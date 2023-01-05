import axios from "axios";

const BASE_API = "https://fakestoreapi.com";

export const Getapi = async () => {
  const Product = await axios.get(`${BASE_API}/products`);
  return Product.data;
};
