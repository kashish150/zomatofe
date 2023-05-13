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
              <h2 id="cart_heading">Cart</h2>
              <div>
                <div className="cartimage">
                  <img src="https://img.freepik.com/premium-vector/online-grocery-shopping-concept-isometric-shopping-cart-with-fresh-food-drink-order-food-grocery-online-from-app-by-smart-phone-vector-illustration-flat-style_165488-1403.jpg"></img>
                </div>
                {cart.cartItems.map((item) => {
                  return (
                    <div className="cart_details" >
                      <div id="Product_name">{item.productName}</div>
                      <div id="cart_product_price">{item.productPrice}</div>{" "}
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
                      <div id="Total_price">
                        {" "}
                        {item.quantity * item.productPrice}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="note">Total Amount Payble = {"500"}</div>
            </div>
          ) : (
            <div>Empty CART</div>
          )}
        </div>
        <hr></hr>
        <div>
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
