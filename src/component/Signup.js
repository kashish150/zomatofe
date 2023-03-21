import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Signup = () => {
  //for getting value that what user put we have to use hook!!

  const [inpval, setinp] = useState({
    name: "",
    contact: "",
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
        <div className="imgBox2">
          <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"></img>
        </div>
        <div className="container">
          <h2> Sign up </h2>
          <form>
            <input
              className="input"
              type="text"
              onChange={setData}
              value={inpval.name}
              placeholder="Username"
              name="name"
              required
            />
            <input
              className="input"
              type="number"
              onChange={setData}
              value={inpval.contact}
              placeholder="Contact"
              name="contact"
              required
            />
            <input
              className="input"
              type="email"
              onChange={setData}
              value={inpval.email}
              placeholder="e-mail"
              name="email"
              required
            />
            <input
              className="input"
              type="password"
              onChange={setData}
              value={inpval.password}
              placeholder="Password"
              name="password"
              required
            />
            <br />{" "}
            <button type="submit" id="btn">
              {" "}
              <NavLink to="/search" id="redirect">
                Register{" "}
              </NavLink>{" "}
            </button>
            <p>
              Already have an account?{" "}
              <a href="/login" id="Register">
                Log in
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Signup;
