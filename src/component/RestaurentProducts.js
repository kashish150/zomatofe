import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const RestaurentProducts = (props) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [cart, setCart] = useState({});
  const [value, changevalue] = useState(true);
  function countOfProducts(e) {
    if (cart.cartItems == undefined) return 0;
    var count = 0;
    console.log(e);
    // console.log(cart.cartItems[0]);

    for (let i = 0; i < cart.cartItems.length; i++) {
      if (e._id == cart.cartItems[i].product) {
        console.log(cart.cartItems[i]);
        count = cart.cartItems[i].quantity;
      }
    }

    return count;
  }
  function handlecart(v, element) {
    var value = Number(v);
    // console.log(typeof value);
    axios
      .post(`http://localhost:3000/api/cart/updateCartBackend`, {
        user: "641818601ce7aa19c9d1cb19",
        newProduct: {
          product: element._id,
          quantity: value,
        },
      })
      .then((res) => {
        axios
          .get(
            `http://localhost:3000/api/cart/cartItems/${"641818601ce7aa19c9d1cb19"}`
          )
          .then((resp) => {
            // console.log("checkerfunction");
            setCart(resp.data);
            // console.log(resp.data.cartItems.length);
            props.setcartvalue(resp.data.cartItems.length);
            changevalue(!value);
          });
      });
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/product/getAllProducts/${"64142a494d532e7558195d1c"}`
      )
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        axios
          .get(
            `http://localhost:3000/api/cart/cartItems/${"641818601ce7aa19c9d1cb19"}`
          )
          .then((resp) => {
            setCart(resp.data);
            // console.log(resp.data);
            props.setcartvalue(resp.data.cartItems.length);
          });
      });
  }, [value]);

  return (
    <div>
      <div className="item_cards">
        <h1>PRODUCTS</h1>
        {products.length > 0 ? (
          products.map((element) => {
            return (
              <div>
                <card id="items">
                  <div></div>
                  <div className="Item_container">
                    <div id="res_name">{element.name}</div>
                    <div id="item_price">₹{element.pricePerQuantity}</div>
                    <div id="res_id">{element._id}</div>
                    <div className="countbody">
                      <div className="decrement">
                        <button
                          id="dec"
                          onClick={() => {
                            handlecart(-1, element);
                          }}
                          disabled={0}
                        >
                          -
                        </button>
                      </div>
                      <div className="value">{countOfProducts(element)}</div>
                      <div className="increment">
                        <button
                          id="inc"
                          onClick={(e) => {
                            handlecart(1, element);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </card>
              </div>
            );
          })
        ) : (
          <div>No products for this restaurent</div>
        )}
      </div>
    </div>
  );
};
export default RestaurentProducts;
