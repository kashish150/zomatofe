import React from "react";
import "./App.css";
import Login from "./component/Login";
import Cards from "./component/Cards";
import Signup from "./component/Signup";
import Search from "./component/Search";
// import Resturant from "./component/RestaurentDashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
// import Search from "./component/Search";
import Navbaar from "./component/Navbaar";
import Resturant from "./component/RestaurentDashboard";
import Dropdown from "./component/Dropdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/navbaar" element={<Navbaar />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/resturant" element={<Resturant />} />
          <Route
            exact
            path="/Dropdown"
            element={<Dropdown status="Delivered" />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
