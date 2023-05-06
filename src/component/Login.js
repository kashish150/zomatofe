import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, NavLink } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  function handleLogin() {
    axios
      .post("http://localhost:3000/api/users/login", {
        username: "werwefw@gmail.com",
        email: "werwefw@gmail.com",
        password: "ererrer",
        restuarentName: "kashish babbar",
        phoneNumber: "8950010348",
      })
      .then((res) => {
        Cookies.set("token", JSON.stringify(res.data.token));
        console.log(res.data);
        navigate("/search");
      });
  }

  const [inpval, setinp] = useState({
    email: "",
    password: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setinp((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section>
        <div id="imgBox">
          <img src="https://img.freepik.com/premium-vector/chef-man-cooking-restaurant-kitchen-vector-chef-guy-preparing-delicious-dish-character-cooker-wearing-professional-suit-hat-cook-delicacy-meal-food-kitchenware-flat-cartoon-illustration_87720-5448.jpg"></img>
        </div>
        <div className="container">
          <b>
            {" "}
            <h1>
              {" "}
              <u>
                <center> Login {props.value} </center>{" "}
              </u>
            </h1>
          </b>
          <form>
            <input
              className="input"
              type="email"
              onChange={setData}
              value={inpval.name}
              placeholder="Email"
              name="email"
              required
            />
            <br />
            <input
              className="input"
              id="pass"
              type="password"
              onChange={setData}
              value={inpval.password}
              placeholder="Password"
              name="password"
              required
            />
            <br />
            <button type="submit" id="btn" onClick={handleLogin}>
              <NavLink to="/search" id="redirect">
                Login
              </NavLink>
            </button>
          </form>
        </div>
      </section>
      <div className="data">
        <p>
          New user ?
          <NavLink to="/signup" id="Register">
            {" "}
            Signup{" "}
          </NavLink>
        </p>
      </div>
    </>
  );
};
export default Login;
