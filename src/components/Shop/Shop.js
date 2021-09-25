import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="row m-2">
        <div className="col-md-9">
          <div className="row">
            {products.map((product) => (
              <Product key={product.key} product={product} />
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Shop;
