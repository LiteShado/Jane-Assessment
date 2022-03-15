import SearchbarCSS from "../css/SearchbarCSS.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";


const Searchbar = ({ placeholder, data }) => {
  const [filtered, setFiltered] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [allProduct, setAllProduct] = useState([]);

  // const fetchProducts = () => {
  //   axios.get().then((response) => {
  //     setAllProduct(response);
  //   });
  // };
  // useEffect(fetchProducts, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
            placeholder={placeholder}
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

        {/* product list */}

        {filtered.length !== 0 && (
          <div className="results">
            {filtered.map((product) => {
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
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
