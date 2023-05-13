import React, { useState, useEffect } from "react";
import card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, NavLink } from "react-router-dom";
const Cart = (props) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState();
  const [cartu, updateCart] = useState(true);
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
      props.setcartvalue(res.data.cartItems.length);
    });
  }, [cartu]);

  function handlecart(v, item) {
    var value = Number(v);
    axios
      .post(`http://localhost:3000/api/cart/updateCartBackend`, {
        newProduct: {
          product: item.product,
          quantity: value,
          productPrice: item.pricePerQuantity,
          productName: item.name,
        },
      })
      .then((res) => {
        console.log(res.data);
        updateCart(!cartu);
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
        <div>
          {cart != null ? (
            <div>
              <div id="cart_heading">Shopping Cart</div>
              <p id="price">Price</p>
              <hr />
              <div>
                {cart.cartItems.map((item) => {
                  return (
                    <div className="cart_inner">
                      <div id="productimage">
                        {item.image}
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
                          width="200px"
                          height="200px"
                        ></img>
                      </div>
                      <div id="Product_name">{item.productName}</div>
                      <div className="Counter">
                        <button
                          id="decrement"
                          disabled={0}
                          onClick={() => {
                            handlecart(-1, item);
                          }}
                        >
                          -
                        </button>{" "}
                        {item.quantity}
                        <button
                          id="increment"
                          onClick={() => {
                            handlecart(1, item);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div id="cart_product_price">{item.productPrice}</div>{" "}
                      <div id="Total_price">
                        {" "}
                        {item.quantity * item.productPrice}
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="cart_inner">Total Amount = {"500"}</div>
            </div>
          ) : (
            <div>Empty CART</div>
          )}
        </div>
        <div className="cart_inner">
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
