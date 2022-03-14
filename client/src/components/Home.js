import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import "../assets/nougat.jpeg";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [state, dispatch] = useStoreContext();

  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      cartItem: { product, purchaseQuantity: 1 },
    });
  };

  //fetch data from api as soon as component is loaded
  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
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
      <div className="productContainer">
        <div className="all-items">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={require(`../assets/${product.image}`)} />
              <div className="card-body">
                <Link to={`/products/${product.id}`}>
                  <h5 className="card-title">{product.name}</h5>
                </Link>
                <p className="card-text">
                  Price: <em>${product.price}</em>
                </p>
                <a
                  onClick={() => addToCart(product)}
                  href="#"
                  className="add-cart btn btn-primary"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>{JSON.stringify(state)}</div>
      </div>
    );
  }
};

export default Home;
