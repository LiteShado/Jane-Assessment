import { useParams, Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = (props) => {

  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  const fetchDetail = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then((response) => {
      setProductDetail(response.data.product);
    });
  };
  useEffect(fetchDetail, []);

  const cartSave = (e) => {
    axios.post(`${process.env.REACT_APP.BACKEND.URL}`, {}).then((response) => {
      console.log("saved successfully");
    });
  };

  return (
    <div className="product-container">
      {productDetail ? (
        <>
          <div className="details" key={productDetail.id}>
            <h1 className="product-name">{productDetail.name}</h1>
            <img className="product-image" src={productDetail.image} />
            <div className="product-desc">
              <p>{productDetail.description}</p>
            </div>
            <p>{productDetail.price}</p>
          </div>
          <button className="addToCart" onClick={cartSave}>
            Save To Cart
          </button>
          <Link to="/allproduct" className="reload-to-products">
            Go Back
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
