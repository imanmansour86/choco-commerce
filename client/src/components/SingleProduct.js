import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART } from "../utils/actions";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [state, dispatch] = useStoreContext();

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      cartItem: { product, purchaseQuantity: 1 },
    });
  };

  const { id } = useParams();
  //fetch data from api as soon as component is loaded
  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProduct(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.error(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="singleproductContainer">
        <div className="single-item">
          <div key={product.id} className="singlecard">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/photos/chocolate-assortment-background-top-view-of-different-kinds-of-picture-id1276645382?b=1&k=20&m=1276645382&s=170667a&w=0&h=ba4ZvgTsuvpIqTzAlYLXVqbcpxVeoKh2cKOUgYoaJN8="
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>

              <p className="card-text">
                Price: <em>$449</em>
              </p>
              <a
                onClick={() => addToCart(product)}
                href="#"
                className="add-cart single-add-cart btn btn-primary"
              >
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            {product.description}
          </p>
        </div>
      </div>
    );
  }
};

export default SingleProduct;
