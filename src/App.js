import "./App.css";
import React, { useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbaar from "./component/Navbaar";
import RestaurentProducts from "./component/RestaurentProducts";
import Cart from "./component/Cart";
import MyOrders from "./component/Myorders";
import ResturantMain from "./component/ResturantMain";
function App() {
  const [value, setvalue] = useState(0);
  function setcartvalue(value) {
    console.log(value);
    setvalue(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navbaar value={value} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/search"
            element={<ResturantMain value={value} setvalue={setvalue} />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart setcartvalue={setcartvalue} />}
          />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route
            exact
            path="/products/:id"
            element={<RestaurentProducts setcartvalue={setcartvalue} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
