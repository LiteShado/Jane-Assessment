import SearchbarCSS from "../css/SearchbarCSS.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import ProductData from "../data/products.json";
import ProductList from "./ProductList";

const Searchbar = () => {
  const [filtered, setFiltered] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = ProductData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

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
    <div className="allproducts-container">
      <h1>Welcome to Canni-Mart</h1>

      <div className="search">
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter your search term"
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="search-icon">
            {filtered.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearbtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </div>


      <div className="allproducts-container">
        <h1 className="inventory-title">Current Inventory</h1>
        <div className="products-container">
          {filtered.length !== 0 ? (
            <div className="product-container">
              {filtered.slice(0, 15).map((product, i) => {
                return (
                <ProductList product={product} key={i} />
              )})}
            </div>
          )
          : (
          <div className="product-container">
          {ProductData.products.map((product, i) => {
            return (
            <ProductList product={product} key={i} />
            )})}
          </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Searchbar;
