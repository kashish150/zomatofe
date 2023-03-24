import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurentProducts = () => {
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
      <table>
        PRODUCTS
        {products.length > 0 ? (
          products.map((element) => {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td>{element.pricePerQuantity}</td>
                <td>{element._id}</td>
                <input
                  type="number"
                  onChange={(e) => {
                    handlecart(e.target.value, element);
                  }}
                ></input>
              </tr>
            );
          })
        ) : (
          <div>No products for this restaurent</div>
        )}
      </table>
    </div>
  );
};
export default RestaurentProducts;
