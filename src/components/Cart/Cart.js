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
      <table className="table table-success table-striped mt-5">
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
            <td>Total before tax:</td>
            <td>{totalBeforeTax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Estimated Tax:</td>
            <td>{tax.toFixed(2)}</td>
          </tr>
          <tr className="fw-bold fs-4 text-danger">
            <td>Order Total:</td>
            <td>{grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
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
