import React, { useState } from "react";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  const [cartcount, setcartcount] = useState(0);
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
          <div id="grid_container">
          <Link to={`/products/${element.id}`}>
          
            <div className="grid-item">
              <div className="image">
                <img src={element.imgdata}></img>
              </div>
              <div className="carddata">
                <h3 id="cardhead">{element.rname}</h3>
                <span>{element.rating}&nbsp;★</span>
              </div>
            </div>
            </Link>
          </div>
          
          </>
        );
      })}
    </>
  );
};

export default Cards;
