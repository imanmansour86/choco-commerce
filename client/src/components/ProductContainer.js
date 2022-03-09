import React, { useState, useEffect } from "react";

const ProductContainer = () => {
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
    );
  }
};

export default ProductContainer;
