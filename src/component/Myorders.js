import React, { useState, useEffect } from "react";
import card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/order/getAllOrder/${"641818601ce7aa19c9d1cb19"}`
      )
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      });
  }, []);

  return (
    <div>
      <div>MY ORDERS</div>
      {orders.length > 0 ? (
        <table>
          {orders.map((order) => {
            return (
              <tr>
                <td>{order._id}</td>
                <td>{order.status}</td>
                <td>{order.totalAmount}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <div> empty </div>
      )}
    </div>
  );
};

export default MyOrders;
