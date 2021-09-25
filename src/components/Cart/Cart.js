import React from "react";

const Cart = (props) => {
  const { cart } = props || {};
  //   console.log(cart);

  //Use Reduce in Cart as Cart is array od object
  const totalReducer = (previous, current) => previous + current.price;
  const total = cart.reduce(totalReducer, 0);
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h2>
        <i className="fas fa-shopping-cart">{cart.length}</i>
      </h2>
      <h2>{total.toFixed(2)}</h2>
      <h3>Tax:{tax.toFixed(2)}</h3>
      <h2>Total price: {grandTotal.toFixed(2)}</h2>
    </div>
  );
};

/* 
    <ul>
        {cart.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
*/
export default Cart;
