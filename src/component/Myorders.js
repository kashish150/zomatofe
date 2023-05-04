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
   <h1 id="order_heading"> <center> My Order's </center> </h1>
      {orders.length > 0 ? (
<div> 
          {orders.map((order) => {
            return (
              <>
                      <div className="orders">
                        <div className="Upper_order_data">
                      <div >📷</div>
                      <div id="res_name">Burger King{order.name}</div>
                      <div id="order_status">{order.status}</div>
                      </div>
                      <div className="order_lower_data">
                <div >{order._id}</div>
                
                <div id="order_amount">₹{order.totalAmount}</div>
                </div>
                </div>
                </>
            );
          })}
      </div>  
      ) : (
        <div> No results Found.. </div>
      )}
    </div>
  );
};

export default MyOrders;
