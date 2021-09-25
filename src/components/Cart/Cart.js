import React from "react";

const Cart = (props) => {
  const { cart } = props || {};
  //   console.log(cart);

  //Use Reduce in Cart as Cart is array od object
  const totalReducer = (previous, current) => previous + current.price;
  const total = cart.reduce(totalReducer, 0).toFixed(2);
  const tax = 0.1 * total;
  const totalPrice = total + tax;

  return (
    <div>
      <h2>
        <i className="fas fa-shopping-cart">{cart.length}</i>
      </h2>
      <h2>{total}</h2>
      <h3>Tax:{tax}</h3>
      <h2>Total price: {totalPrice}</h2>
      {/* <ul>
        {cart.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
