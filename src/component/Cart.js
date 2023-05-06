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
      <div id="cart_heading">
        <center>My CART</center>
      </div>
      <div className="cart">
        {cart != null ? (
          <div>
            <table className="cart flex table">
              <tr>
                <th>Product Name :</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th>Total Product Price</th>
              </tr>
              {cart.cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.productName}</td>
                    <td className="flex">
                      <button id="dec" disabled={0}>
                        -
                      </button>{" "}
                      {item.quantity}
                      <button id="inc">+</button>
                    </td>
                    <td>{item.productPrice}</td>{" "}
                    <td> {item.quantity * item.productPrice}</td>
                  </tr>
                );
              })}
            </table>
            <div>Total Amount = {"500"}</div>
          </div>
        ) : (
          <div>Empty CART</div>
        )}
      </div>
      <button
        id="place_order_btn"
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
