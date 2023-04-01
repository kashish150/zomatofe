import "./App.css";
import React, { useState } from "react";
import Login from "./component/Login";
import Cards from "./component/Cards";
import Counter from "./component/Counter";
import Signup from "./component/Signup";
import ResturantMain from "./component/ResturantMain";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbaar from "./component/Navbaar";
import RestaurentProducts from "./component/RestaurentProducts";
import Resturant from "./component/RestaurentDashboard";
import Dropdown from "./component/Dropdown";
import RestaurentDashboard from "./component/RestaurentDashboard";
import Cart from "./component/Cart";
import MyOrders from "./component/Myorders";
import Fooditems from "./component/Fooditems";

function App() {
  const [value, setvalue] = useState(0);
  function setcartvalue (value) {
    setvalue(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbaar value={value}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/search" element={<ResturantMain value={value} setvalue={setvalue} />}/>
          <Route exact path="/resturant" element={<Resturant />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/items" element={<Fooditems/>} />
          <Route exact path="/Dropdown" element={<Dropdown status="Delivered" />}/>
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/products/:id" element={<RestaurentProducts setvalue={setvalue}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
