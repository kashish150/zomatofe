import React, { useState } from "react";
import { Link } from "react-router-dom";
const Cards = ({ data }) => {
  const [cartcount, setcartcount] = useState(0);
  return (

<>

<h5 id="res_title"> Restaurents near you</h5>
<div className="res_container">
      {data.map((element, k) => {
      return (
          <>
              <Link id="resto_link" to={`/products/${element._id}`}>
                  <div id="res_img" className="res_grid image">
                    <img src={element.imgdata}></img>
                  </div>
                  <div className="resgrid">
                    <h3 id="reshead">{element.restuarentName}</h3>
                    <span id="res_span">{element.email}&nbsp;★</span>
                  </div>
              </Link>
          </>
        );
      })}
       </div>
    </>
  );
};

export default Cards;
