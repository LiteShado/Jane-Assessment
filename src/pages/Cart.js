import { useState, useEffect } from "react";
import axios from "axios";
import CartCSS from "../css/CartCSS.css";

const Cart = (props) => {
  const [savedProducts, setSavedProducts] = useState([]);
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [shouldReload, setShouldReload] = useState(true);
  const [redirectToOrder, setRedirectToOrder] = useState(false);

  // const fetchSavedProducts = async () => {
  //   try {
  //     let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
  //     setSavedProducts(response.data);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  // useEffect(fetchSavedProducts, []);

  // const removeFromCart = async (productId) => {
  //   try {
  //     let response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}`);
  //     setShouldReload(!shouldReload);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  // useEffect(fetchSavedProducts, [shouldReload]);

  const removeFromCart = () => {
    console.log("remove")
  }

  const calculator = () => {
    let c = 0;
    for (let i = 0; i < savedProducts.length; i++) {
      let newNum = savedProducts[i].price.replace("$", "");
      let noDollar = parseFloat(newNum);
      c += noDollar;
    }
    return c;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}`, {
        address,
        creditCard,
      })
      .then((response) => {
        setShouldReload(!shouldReload);
        setRedirectToOrder(true);
      });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">My Cart</h1>

      {savedProducts.length > 0 ? (
        savedProducts.map((product, i) => {
          return;
          <div key={i}>
            <p>{product.name}</p>
            <img className="cart-image" src={product.image} />
            <p>{product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>
              Remove From Cart
            </button>
          </div>;
        })
      ) : (
        <p> Your cart is empty! </p>
      )}
      <p>Total Price: ${calculator()}</p>

      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="address">
            <h2>Address</h2>
          </label>
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <label htmlFor="cardnumber">
            <h2>Credit Card Number</h2>
          </label>
          <input
            value={creditCard}
            onChange={(e) => {
              setCreditCard(e.target.value);
            }}
          />

          <input id="submit-button" type="submit" value="Buy" />
        </form>
      </div>
    </div>
  );
};

export default Cart;
