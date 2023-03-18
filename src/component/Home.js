import React from "react";
import { NavLink } from "react-router-dom";
const Home = () =>{
  return(
        <>
        <div className="homepage">
          <h5 id="heading">Zomato</h5>
                  <NavLink to="/login" id="loginlink">Login</NavLink> 
                  <NavLink to="/signup" id="signuplink">Signup</NavLink>
                  <NavLink to="/resturant" id="resturantlink"> Add resturant</NavLink>
            </div>
        </>
    )

}

export default Home ;