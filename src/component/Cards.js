import React from "react";
import "./Cards.css";

const Cards = ({ title, author, price, img }) => {
  const products = [
    {
      productId: "74872352",
      produtName: "PIZZA",
      productPrice: 250,
      productQuantity: 5,
      productImage: "",
    },
  ];
  console.log(products.length);
  //   const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <div>
          {products.length > 0 ? (
            <div>
              <div>
                {products.map((product) => {
                  return (
                    <div className="productDetails">
                      <div>{product.produtName}</div> &nbsp; =
                      <div>{product.productPrice}</div> &nbsp; X &nbsp;
                      <div>{product.productQuantity}</div> &nbsp;=
                      <div>
                        {product.productPrice * product.productQuantity}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p>Total Price - {price}Rs</p>
            </div>
          ) : (
            <div>Empty products</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
