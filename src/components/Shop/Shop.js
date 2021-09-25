import React from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <Product />
        </div>
        <div className="col-md-3">Cart calculation</div>
      </div>
    </div>
  );
};

export default Shop;
