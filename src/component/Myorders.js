import React, { useState, useEffect } from "react";
import card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, NavLink } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (Cookies.get("token") === undefined) {
      navigate("/login");
    } else {
      axios.defaults.headers.common["x-auth-token"] = JSON.parse(
        Cookies.get("token")
      );
      console.log(Cookies.get("token"));
    }
    axios.get(`http://localhost:3000/api/order/getAllOrder`).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      <h1 id="order_heading">
        {" "}
        <center> My Order's </center>{" "}
      </h1>
      {orders.length > 0 ? (
        <div>
          {orders.map((order) => {
            return (
              <>
                <div className="orders">
                  <div className="Upper_order_data">
                    <div>📷</div>
                    <div id="res_name">Burger King{order.name}</div>
                    <div id="order_status">{order.status}</div>
                  </div>
                  <div className="order_lower_data">
                    <div>{order._id}</div>

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
