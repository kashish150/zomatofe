import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./RestaurentDashboard.css";
import Cards from "./Cards";
const RestaurentLogin = () => {
  //for getting value that what user put we have to use hook!!

  const [orders, setOrders] = useState({
    orders: [],
  });

  useEffect(() => {
    setoutput();
  }, []);

  const setoutput = () => {
    console.log("called");
    axios
      .get(
        `http://localhost:3000/api/order/getRestaurentOrders/${"64142a494d532e7558195d1c"}`
      )
      .then((res) => {
        // setOrders(res.data);
        console.log("restaurent");
        console.log(res.data);
        setOrders(res.data);
      });
  };

  return (
    <div>
      Restaurent DashBoard Order
      <div className="restaurentParent">
        {orders.length > 0 ? (
          <div>
            <table>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order._id}</td>
                    <td>{order.restaurent}</td>
                    <td>{order.product}</td>
                    <td>{order.status}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <div> Empty </div>
        )}
      </div>
    </div>
  );
};
export default RestaurentLogin;
