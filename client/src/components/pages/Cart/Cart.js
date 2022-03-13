import React from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../../utils/actions";
import "./style.css";
import { Elements } from "@stripe/react-stripe-js";

import { Link } from "react-router-dom";

// const Wrapper = (props) => (
//   <Elements stripe={stripePromise}>
//     <Cart {...props} />
//   </Elements>
// );

const Cart = () => {
  const [{ cartItems }, dispatch] = useStoreContext();

  const removeFromCart = (product) => {
    console.log("btn clicked", product);
    dispatch({
      type: REMOVE_FROM_CART,
      cartItem: product,
    });
  };

  const onChange = (purchaseQuantity, product) => {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      cartItem: product,
      purchaseQuantity: parseInt(purchaseQuantity),
    });
  };

  console.log("state", cartItems);
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="cart-page col-md-8">
          <div className="p-2"></div>

          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded"
            >
              <div className="mr-1">
                <img
                  className="rounded"
                  src="https://i.imgur.com/XiFJkhI.jpg"
                  width="70"
                />
              </div>
              <div className="d-flex flex-column align-items-center ">
                <span className=" text-blue">{item.product.name}</span>
              </div>
              <div className="d-flex flex-row align-items-center qty">
                <input
                  placeholder="1"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="9"
                  value={item.purchaseQuantity}
                  onChange={(e) => onChange(e.target.value, item.product)}
                />
                {/* <i className="fa fa-minus text-danger"></i>
                <h5 className="text-grey mt-1 mr-1 ml-1">2</h5>
                <i className="fa fa-plus text-success"></i> */}
              </div>
              <div>
                <h5 className="text-blue">{item.product.price}</h5>
              </div>
              <div className="d-flex align-items-center">
                <i
                  onClick={() => removeFromCart(item.product)}
                  className="fa fa-trash mb-1 text-danger"
                ></i>
              </div>
            </div>
          ))}

          <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
            <div className="text-grey">Order Total: 20$</div>
          </div>
          <div className="checkbtn d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
            <button
              className="btn btn-warning btn-block btn-lg ml-2 pay-button"
              type="button"
            >
              <Link to={`/checkout`}>Proceed Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
