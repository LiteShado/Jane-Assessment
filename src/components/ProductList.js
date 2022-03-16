import { Link } from "react-router-dom";
import AllProductCSS from "../css/AllProductCSS.css";
import ProductData from "../data/products.json";

const ProductList = ({ product }) => {
  return (
    <div className="productlist-container">
      {/* <Link to={`/${props.id}`}> */}
      <div className="single-container">
        <h3 className="product-name">{product.name}</h3>
        <img
          className="product-image"
          src={product.image_urls[0]}
          alt="this product"
        />
        <div className="product-desc">
          <p className="description">{product.description}</p>
          <p className="product-price">{product.price_each}</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductList;
