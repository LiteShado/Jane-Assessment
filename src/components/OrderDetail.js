import { useParams, Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderDetail = (props) => {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState({});

  const fetchOrderDetail = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then((response) => {
      setOrderDetail(response.data);
    });
  };
  useEffect(fetchOrderDetail, []);

  const calculator = () => {
    let c = 0;
    if (!orderDetail.product) {
      return;
    }
    for (let i = 0; i < orderDetail.product.length; i++) {
      let newString = orderDetail.product[i].price.replace("$", "");
      let noDollar = parseFloat(newString);
      c += noDollar;
    }
    return c;
  };

  return (
    <div className="the-order">
      <div>
        {orderDetail.product ? (
          orderDetail.product.map((product) => {
            return (
              <div className="productt" key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {orderDetail.product && orderDetail.order && (
          <>
            <p>Total Price: ${calculator()}</p>
            <p>Address: {orderDetail.order.address}</p>
            <p>Credit Card Number: {orderDetail.order.creditCardNum}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
