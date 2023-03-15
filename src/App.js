import logo from "./logo.svg";
import "./App.css";
import Home from './component/Home' ;
import Login from './component/Login' ;
import Signup from './component/Signup' ;
import Dashboard from './component/Dashboard' ;
import {Switch,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Routes>
        <Route exact path="/" element={<Home/>} />
       <Route exact path="/login" element={<Login/>} />
       <Route exact path="/signup" element={<Signup/>} />
       <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
