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
      CART
      <div>
        <table>
          <tr>
            {cart != null ? (
              <tr>
                <td className="user">{cart._id}</td>

                <td className="user">{cart.user}</td>
                <td>
                  {cart.cartItems.map((item) => {
                    return (
                      <div>
                        <div>{item.name}</div>
                        <div>{item.quantity}</div>
                        <hr></hr>
                        <br></br>
                      </div>
                    );
                  })}
                </td>
                <td>{cart._id}</td>
              </tr>
            ) : (
              <div>Empty CART</div>
            )}
          </tr>
        </table>
        <button
          onClick={() => {
            handlePlaceOrder();
          }}
        >
          PLACE ORDER
        </button>
      </div>
    </>
  );
};

export default Cart;
