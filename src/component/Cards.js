import React from "react";
import card from "react-bootstrap/card";
const Cards = ({ data }) => {
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
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
          </>
        );
      })}
    </>
  );
};

export default Cards;
