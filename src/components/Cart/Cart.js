import React from "react";

const Cart = (props) => {
  const { cart } = props || {};

  //Use Reduce in Cart as Cart is array od object

  return (
    <div>
      <h2>
        <i className="fas fa-shopping-cart">{cart.length}</i>
      </h2>
      <ul>
        {cart.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
