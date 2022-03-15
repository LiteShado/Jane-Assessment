import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myOrderCSS from "../css/myOrderCSS.css";

const MyOrder = (props) => {
  const [order, setOrder] = useState([]);

  // const fetchOrder = async () => {
  //   try {
  //     let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
  //     setOrder(response.data.order);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  // useEffect(fetchOrder, []);

  return (
    <div className="order-container">
      <h1>My Order</h1>
      <div className="order-box">
        {order.length > 0 ? (
          order.map((ord) => {
            return;
            <div className="order" key={ord.id}>
              <Link to={`/order/${ord.id}`}>
                <p className="orderCreated">{ord.createdAt}</p>
              </Link>
            </div>;
          })
        ) : (
          <p>No Order History</p>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
