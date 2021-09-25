import React from "react";

const Product = (props) => {
  console.log(props.product);
  const { name, seller, img, stock, price } = props.product || {};
  return (
    <div className="col-md-6">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={img} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">
                <small>{name}</small>
              </h5>
              <p className="card-text">
                <small>by: {seller}</small>
              </p>
              <p className="card-text">
                <small>$ {price}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  only {stock} left in stock - order soon
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
