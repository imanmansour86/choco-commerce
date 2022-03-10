import React from "react";
import "./style.css";

const Cart = () => {
  return (
    <div>
      <h1>Your Cart</h1>

      <div className="cart">
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-12 col-sm-8 items">
              <div className="cartItem row align-items-start">
                <div className="col-3 mb-2">
                  <img
                    className="w-100"
                    src="https://badux.co/smc/codepen/birdcage-posters.jpg"
                    alt="art image"
                  />
                </div>
                <div className="col-5 mb-2">
                  <p className="pl-1 mb-0">Product Name</p>
                </div>
                <div className="col-2">
                  <p className="cartItemQuantity p-1 text-center">1</p>
                </div>
                <div className="col-2">
                  <p id="cartItem1Price">$66</p>
                </div>
              </div>
              <hr />

              <hr />
            </div>
            <div className="col-12 col-sm-8 items">
              <div className="cartItem row align-items-start">
                <div className="col-3 mb-2">
                  <img
                    className="w-100"
                    src="https://badux.co/smc/codepen/birdcage-posters.jpg"
                    alt="art image"
                  />
                </div>
                <div className="col-5 mb-2">
                  <p className="pl-1 mb-0">Product Name</p>
                </div>
                <div className="col-2">
                  <p className="cartItemQuantity p-1 text-center">1</p>
                </div>
                <div className="col-2">
                  <p id="cartItem1Price">$66</p>
                </div>
              </div>
              <hr />

              <hr />
            </div>
            <div className="col-12 col-sm-4 p-3 proceed form">
              <div className="row mx-0 mb-2">
                <div className="col-sm-8 p-0 d-inline">
                  <h5>Total</h5>
                </div>
                <div className="col-sm-4 p-0">
                  <p id="total">$138.40</p>
                </div>
              </div>
              <a href="#">
                <button id="btn-checkout" class="shopnow">
                  <span>Checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
