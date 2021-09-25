import React from "react";

const Cart = (props) => {
  const { cart } = props || {};
  //   const cart = props.cart || {};
  console.log(cart);

  /*  const cost = (previous, current) => previous + current.shipping;
  const shippingCost = cart.reduce(cost, 0);
    console.log(shippingCost); */

  //Use Reduce in Cart as Cart is array od object

  const totalReducer = (previous, current) => previous + current.price;
  const total = cart.reduce(totalReducer, 0);

  const shippingCost = cart.reduce(
    (previous, current) => previous + current.shipping,
    0
  );
  const totalBeforeTax = total + shippingCost;
  const tax = parseFloat(totalBeforeTax) * 0.1;
  const grandTotal = parseFloat(totalBeforeTax) + tax;

  return (
    <div>
      <h2>
        <i className="fas fa-shopping-cart">{cart.length}</i>
      </h2>
      <h4>{total.toFixed(2)}</h4>
      <h4>Shipping & Handing: {shippingCost.toFixed(2)}</h4>
      <h3>Total before tax: {totalBeforeTax.toFixed(2)}</h3>
      <h3>Tax:{tax.toFixed(2)}</h3>
      <h2>Total price: {grandTotal.toFixed(2)}</h2>
      <div>
        <table className="table table-success table-striped">
          <tbody>
            <tr>
              <td>Items</td>
              <td>{total.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping & Handing:</td>
              <td>{shippingCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
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
