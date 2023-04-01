import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbaar = (props) => {
  return (
    <div className='navbaar'>
     <div className="items">
     <NavLink to="/" id="homelink" className='links'> Home </NavLink>  
     <NavLink to="/login" id="productlink" className='links'>Login</NavLink>  
     <NavLink to="/signup" id="editlink" className='links'> SignUp </NavLink>
     <NavLink to="/orders" id="link1" className='links'>My Orders </NavLink>
     <NavLink to="cart" id="link2" className='links'> My Cart {props.value} </NavLink> 
     </div>
    </div>
  )
}

export default Navbaar ;
//navbaar ,homelink,productlink,editlink,link1,link2,links,navhome,navadd,navedit,navlogin,navregister
