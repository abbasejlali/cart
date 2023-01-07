import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <span>&#xf290;</span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
