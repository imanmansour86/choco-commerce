import React, { useState } from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import {
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../../../utils/actions";
import "./style.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";
import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";

// const Wrapper = (props) => (
//   <Elements stripe={stripePromise}>
//     <Cart {...props} />
//   </Elements>
// );
import gif from "../../../assets/emptycart.gif";

const Cart = () => {
  const [{ cartItems }, dispatch] = useStoreContext();
  const [returnedWithSuccess, setReturnedWithSuccess] = useState();
  const [returnedWithFailure, setReturnedWithFailure] = useState();

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

  const onSuccess = (data) => {
    //post api

    const user = Auth.getUser();

    const address = JSON.stringify(data.data.success.billing_details.address);

    console.log("current items in cart", cartItems);
    console.log("user from local storage", user);

    fetch("http://localhost:3001/api/orders", {
      method: "POST",
      body: JSON.stringify({ address, user_id: user.id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) =>
        fetch("http://localhost:3001/api/order-details", {
          method: "POST",
          body: JSON.stringify({
            cartItems: JSON.stringify(cartItems),
            order_id: result.id,
          }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            dispatch({
              type: CLEAR_CART,
            });
            setReturnedWithSuccess(data);
          })
      );
    setTimeout(() => {
      window.location.assign("/");
    }, 3000);
  };
  const onFailure = (data) => {
    setReturnedWithFailure(data);
  };

  const getInfo = (returnedWithSuccess) => {
    console.log("test");
    console.log("returned with success", returnedWithSuccess);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        {returnedWithSuccess ? (
          <div>
            <h1>Payment successful</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to the home page</h2>
          </div>
        ) : (
          <div className="cart-page col-md-8">
            <div className="p-2"></div>

            {returnedWithFailure && <div>Your payment failed</div>}
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

            {cartItems.length > 0 ? (
              <div>
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                  <div className="text-grey">Order Total: 20$</div>
                </div>
                <div className="checkbtn d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                  <button
                    className="btn btn-warning btn-block btn-lg ml-2 "
                    type="button"
                  >
                    <CheckoutForm
                      name={"LaRoche Chocolate"}
                      description={"Current Balance"}
                      amount={4.99}
                      shippingAddress={"3375 Payne Drive"}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                    />

                    {/* Proceed Checkout */}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2>Your cart is empty</h2>
                <h2>
                  Shop all our Products <Link to="/">here!</Link>
                </h2>
                <iframe
                  src={require("../../../assets/emptycart.gif")}
                  width="480"
                  height="270"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
