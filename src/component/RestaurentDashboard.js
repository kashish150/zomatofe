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
        `http://localhost:3000/api/product/getAllProducts/${"64142a494d532e7558195d1c"}`
      )
      .then((res) => {
        // setOrders(res.data);
        console.log("restaurent");
        console.log(res.data);
      });
  };

  return (
    <div>
      Restaurent DashBoard Order
      <div className="restaurentParent">
        {
          <Cards
            title="DOMINOS"
            author="ORDER_ID-#482498YEUWI"
            price="6000"
            img="https://content3.jdmagicbox.com/comp/mumbai/68/022pgl02068/catalogue/image-restaurant-and-bar-goregaon-west-mumbai-home-delivery-restaurants-ihb12.jpg"
          />
        }
      </div>
    </div>
  );
};
export default RestaurentLogin;
