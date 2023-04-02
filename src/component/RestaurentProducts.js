import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Counter from "./Counter";
const RestaurentProducts = (props) => {
  const [products, setProducts] = useState([]);
  function handlecart(v, element) {
    var value = Number(v);
    console.log(typeof value);
    axios
      .post(`http://localhost:3000/api/cart/updateCartBackend`, {
        user: "641818601ce7aa19c9d1cb19",
        newProduct: {
          product: element._id,
          quantity: value,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/product/getAllProducts/${"64142a494d532e7558195d1c"}`,
        {
          restaurentId: "64142a494d532e7558195d1c",
        }
      )
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        console.log(products);
      });
  }, []);

  const { id } = useParams();
  return (
    <div>
      <div className="item_cards">
        <h1>PRODUCTS</h1>
        {products.length > 0 ? (
          products.map((element) => {
            return (
              <div>
                <card id="items">
                  <div>
                    <img
                      id="item_image"
                      src="data:image/jpeg;base64,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"
                    ></img>
                  </div>
                  <div className="Item_container">
                    <div id="res_name">{element.name}</div>
                    <div id="item_price">₹{element.pricePerQuantity}</div>
                    <div id="res_id">{element._id}</div>
                    <input
                      type="number"
                      onChange={(e) => {
                        handlecart(e.target.value, element);
                      }}
                    ></input>
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