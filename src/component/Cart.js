import React, { useState, useEffect } from "react";
import card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, NavLink } from "react-router-dom";
const Cart = ({ data }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState();

  useEffect(() => {
    if (Cookies.get("token") === undefined) {
      navigate("/login");
    } else {
      axios.defaults.headers.common["x-auth-token"] = JSON.parse(
        Cookies.get("token")
      );
      console.log(Cookies.get("token"));
    }
    axios.get(`http://localhost:3000/api/cart/cartItems`).then((res) => {
      console.log(res.data);
      setCart(res.data);
    });
  }, []);

  function handlecart(v, item) {
    var value = Number(v);
    axios
      .post(`http://localhost:3000/api/cart/updateCartBackend`, {
        user: "641818601ce7aa19c9d1cb19",
        newProduct: {
          product: item._id,
          quantity: value,
          productPrice: item.pricePerQuantity,
          productName: item.name,
        },
      })
      .then((res) => {
        axios.get(`http://localhost:3000/api/cart/cartItems`).then((resp) => {
          // setCart(resp.data);
          // props.setcartvalue(resp.data.cartItems.length);
          // setCart(!value);
        });
      });
  }

  function handlePlaceOrder() {
    axios.post(`http://localhost:3000/api/order/placeorder`).then((res) => {
      console.log(res.data);
    });
  }
  return (
    <>
    <div className="cart_body">
      <div >
        {cart != null ? (
          <div>
                  <h1 id="cart_heading">
                  Cart
                    </h1>
            <div>
                  <div className="cartimage">
                    <img src="https://img.freepik.com/free-vector/order-paying-contactless-payment-by-credit-card-order-basket-laptop-bank-card-male-online-customer-with-tablet-cartoon-character_335657-2563.jpg?w=740&t=st=1683899021~exp=1683899621~hmac=23e7929634870624117a51d6ea6376b41be45edb79ae4217fd82f72c79e1c96b"></img>
                    </div>
              {cart.cartItems.map((item) => {
                return (
                  <div className="content_in_cart">
                    <div className="cart_start_data">
                    <div  id="Product_name">{item.productName}</div>
                    <div  id="cart_product_price">{item.productPrice}</div>{" "}
                    <div className="Counter">
                      <button id="decrement" disabled={0}>-</button>{" "}
                      {item.quantity}
                      <button id="increment">+</button>
                    </div>
                    <div  id="Total_price"> {item.quantity * item.productPrice}</div>
                    </div>
                    </div>
                );
              })}

            </div>
            <div className="note">Total Amount Payable = {"500"}</div>
          </div>
        ) : (
          <div>Empty CART</div>
        )}
      </div>
      <div >
              <button
        id="place_order_btn"
        onClick={() => {
          handlePlaceOrder();
        }}
      >
        PLACE ORDER
      </button>
      </div>

      </div>
    </>
  );
};

export default Cart;
