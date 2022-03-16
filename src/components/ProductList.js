import { Link } from "react-router-dom";
import AllProductCSS from "../css/AllProductCSS.css";
import { useState, useEffect } from "react";

import ProductData from "../data/products.json";

const ProductList = ({ product }) => {
  const [filtered, setFiltered] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);


  const newFilter = product.filter((value) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  })

  if (searchWord === "") {
      setFiltered([]);
    } else {
      setFiltered(newFilter);
    }

  };
  const clearInput = () => {
    setFiltered([]);
    setWordEntered("");
  };



  return (
    <div className="productlist-container">
      {/* <Link to={`/${props.id}`}> */}
      <div className="single-container">
        <h5 className="product-name">{product.name}</h5>
        <img
          className="product-image"
          src={product.image_urls[0]}
          alt="this product"
        />
        <p className="description">{product.description}</p>
        <p className="product-price">
          Price:{" "}
          {product.price_each === null
            ? "no price available"
            : "$" + product.price_each + "0"}
        </p>
        <button className="add-button">Add to Cart</button>
        <button className="buy-button">Buy Now</button>
        <p className="divider">__________________</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductList;
