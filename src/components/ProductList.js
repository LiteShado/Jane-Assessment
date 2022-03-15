import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductList = (props) => {
  const [allProduct, setAllProduct] = useState([]);

  // const fetchProducts = () => {
  //   axios.get().then((response) => {
  //     setAllProduct(response);
  //   });
  // };
  // useEffect(fetchProducts, []);

  return (
    <div className="allproducts-container">
      <h1>Welcome to Canni-Mart</h1>
      <div className="products-container">
        {allProduct.length ? (
          allProduct.map((product) => {
            return (
              <div key={product.id} className="productlist-container">
                <Link to={`/${product.id}`}>
                  <div className="single-container">
                    <h3 className="product-name">{product.name}</h3>
                    <img
                      className="product-image"
                      src={product.image}
                      alt="this product"
                    />
                    <div className="product-desc">
                      <p className="description">{product.description}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
