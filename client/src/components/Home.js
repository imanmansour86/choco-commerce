import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/photos/chocolate-assortment-background-top-view-of-different-kinds-of-picture-id1276645382?b=1&k=20&m=1276645382&s=170667a&w=0&h=ba4ZvgTsuvpIqTzAlYLXVqbcpxVeoKh2cKOUgYoaJN8="
                alt="Card image cap"
              />
              <div className="card-body">
                <Link to={`/products/${product.id}`}>
                  <h5 className="card-title">{product.name}</h5>
                </Link>
                <p className="card-text">
                  Price: <em>$449</em>
                </p>
                <a href="#" className="add-cart btn btn-primary">
                  ADD TO CART
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
