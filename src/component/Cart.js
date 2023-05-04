import React, { useState, useEffect } from "react";
import card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import axios from "axios";
const Cart = ({ data }) => {
  const [cart, setCart] = useState();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/cart/cartItems/${"64159ab19aba1055c817347c"}`
      )
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      });
  }, []);
  function handlePlaceOrder() {
    axios
      .post(`http://localhost:3000/api/order/placeorder`, {
        user: "641818601ce7aa19c9d1cb19",
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <>
    <div id="cart_heading"><center>My CART</center></div>
      <div className="cart">
            {cart != null ? (
              <div className="cart">
                <div className="cart">{cart._id}</div>
                <div className="cart">{cart.user}</div>
                  {cart.cartItems.map((item) => {
                    return (
                      <div className="cart">
                        <div className="cart">{item.name}</div>
                        <div className="cart">{item.quantity}</div>
                        </div>
                    );
                  })}
                <div className="cart">{cart._id}</div>
              </div>
            ) : (
              <div>Empty CART</div>
            )}
          </div>
        <button id="place_order_btn"
          onClick={() => {
            handlePlaceOrder();
          }}
        >
          PLACE ORDER
        </button>
    </>
  );
};

export default Cart;
