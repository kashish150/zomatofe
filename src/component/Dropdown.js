import React, { Component } from "react";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";

const Dropdown = [
  { label: "Not_Processed" },
  { label: "Preparing" },
  { label: "On_The_Way" },
  { label: "Delivered" },
];

const DropDown = (props) => {
  const setoutput = (status) => {
    console.log("called");
    axios
      .post(`http://localhost:3000/api/order/updateStatus`, {
        orderId: "64182edfd67fe2f2786dbea3",
        restaurentId: "64142a494d532e7558195d1c",
        status: "Cancelled",
      })
      .then((res) => {
        console.log(res);
        if (res.status == "200") {
          console.log("res.data");
          console.log(status);
          setStatus(status);
        } else {
          console.log("status change failed");
        }
      });
  };

  const [statestatus, setStatus] = useState(props.status);
  console.log("starting status" + statestatus);
  return (
    <label>
      Status
      <select
        value={statestatus}
        onChange={(e) => {
          setoutput(e.target.value);
        }}
      >
        {Dropdown.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;
