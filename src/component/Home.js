import React from "react";
import { NavLink } from "react-router-dom";
const Home = () =>{
  return(
        <>
        <div className="homepage">
        <div className="loginlink"> 
                  <NavLink to="/login">Login</NavLink>
                  </div>
                  <div className="signuplink">
                  <NavLink to="signup"> Signup</NavLink>
                  </div>
        </div>
        </>
    )

}

export default Home ;