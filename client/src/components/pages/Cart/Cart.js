import React from "react";
import "./style.css";

const Cart = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="cart-page col-md-8">
          <div className="p-2"></div>

          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
            <div className="mr-1">
              <img
                className="rounded"
                src="https://i.imgur.com/XiFJkhI.jpg"
                width="70"
              />
            </div>
            <div className="d-flex flex-column align-items-center product-details">
              <span className="font-weight-bold">Milk Chocolate</span>
            </div>
            <div className="d-flex flex-row align-items-center qty">
              <i className="fa fa-minus text-danger"></i>
              <h5 className="text-grey mt-1 mr-1 ml-1">2</h5>
              <i className="fa fa-plus text-success"></i>
            </div>
            <div>
              <h5 className="text-grey">$20.00</h5>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa fa-trash mb-1 text-danger"></i>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
            <input
              type="text"
              className="form-control border-0 gift-card"
              placeholder="discount code/gift card"
            />
            <button
              className="btn btn-outline-warning btn-sm ml-2"
              type="button"
            >
              Apply
            </button>
          </div>
          <div className="checkbtn d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
            <button
              className="btn btn-warning btn-block btn-lg ml-2 pay-button"
              type="button"
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
