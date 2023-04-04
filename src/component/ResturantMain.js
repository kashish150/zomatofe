import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
const ResturantMain = (props) => {
  const [fdata, setFdata] = useState([]);
  console.log(props.value + "props.value");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/restaurent/getAllRestaurent")
      .then((res) => {
        console.log(res);
        setFdata(res.data);
      });
  }, []);

  return (
    <>
      <div>RESTAURENT</div>
      <Cards data={fdata} />
    </>
  );
};

export default ResturantMain;
