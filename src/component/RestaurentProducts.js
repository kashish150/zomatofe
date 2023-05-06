import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, NavLink } from "react-router-dom";

const RestaurentProducts = (props) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [cart, setCart] = useState({});
  const [value, changevalue] = useState(true);
  function countOfProducts(e) {
    if (cart.cartItems == undefined) return 0;
    var count = 0;
    console.log(e);
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

    axios
      .post(`http://localhost:3000/api/cart/updateCartBackend`, {
        newProduct: {
          product: element._id,
          quantity: value,
          productPrice: element.pricePerQuantity,
          productName: element.name,
        },
      })
      .then((res) => {
        axios.get(`http://localhost:3000/api/cart/cartItems`).then((resp) => {
          setCart(resp.data);
          props.setcartvalue(resp.data.cartItems.length);
          changevalue(!value);
        });
      });
  }

  useEffect(() => {
    if (Cookies.get("token") === undefined) {
      navigate("/login");
    } else {
      axios.defaults.headers.common["x-auth-token"] = JSON.parse(
        Cookies.get("token")
      );
      console.log("Cookies.get(");
    }

    axios
      .get(`http://localhost:3000/api/product/getAllProductsUser/${id}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        axios.get(`http://localhost:3000/api/cart/cartItems`).then((resp) => {
          setCart(resp.data);
          console.log(resp.data);
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
              <>
                <card id="items">
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
              </>
            );
          })
        ) : (
          <div>empty</div>
        )}
      </div>
    </div>
  );
};
export default RestaurentProducts;
