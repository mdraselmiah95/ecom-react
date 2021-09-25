import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  //This is state is use for Cart

  const [cart, setCart] = useState([]);

  //Where State is use Event handler is also declare their

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
  };

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
              <Product
                key={product.key}
                product={product}
                handleAddProduct={handleAddProduct}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
