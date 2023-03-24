import React, { useState } from "react";
import card from "react-bootstrap/card";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const [cartcount, setcartcount] = useState(0);
  return (
    <>
      <Link to="/cart">
        <div> cart {cartcount} </div>
      </Link>

      {data.map((element, k) => {
        return (
          <>
            <Link to={`/products/${element.id}`}>
              <card style={{ width: "22rem", border: "none" }} className="mb-4">
                <card.Img variant="top" className="cd" src={element.imgdata} />
                <div className="card_body">
                  <div className="Upper_data ">
                    <h4 className="mt-2">{element.rname}</h4>
                    <span>{element.rating}&nbsp;★ </span>
                  </div>
                  <div className="lower-data">
                    <h5>{element.speciality}</h5>
                    <span>{element.price}</span>
                  </div>
                </div>
              </card>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Cards;
