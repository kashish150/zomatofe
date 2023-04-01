import React, { useState } from "react";
import Cards from "./Cards";
import Fooddata from "./FoodData";

const ResturantMain = (props) => {
  const [fdata, setFdata] = useState(Fooddata);
  console.log(props.value + "props.value");
  function handleclick() {
    props.setvalue("kashishs");
    console.log("checking working");
    console.log(props.value);
  }
  return (
    <>
      <form className="d-flex justify-content-center align-items-center mt-8">
        <input
          id="search_input"
          type="text"
          placeholder="Search for resturants and foods"
        />
        <button
          id="search_btn"
          onClick={() => {
            handleclick();
          }}
        >
          Search
        </button>
      </form>
          <Cards data={fdata} />
        
    </>
  );
};

export default ResturantMain;
