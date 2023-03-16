import React from "react" ;
import {useState} from "react" ;
import { NavLink } from "react-router-dom";
const Signup = () => {
    //for getting value that what user put we have to use hook!!
const [inpval, setinp] = useState({
    name:"",
    contact:"",
    email:"",
    password:""
})

const setData = (e) =>{
    console.log(e.target.value);
    const {name,value} = e.target;
    setinp((preval)=>{
        return{
            ...preval,
            [name]:value
        }
    })
        }

    return(
        <>
        <section>
            <div className="imgBox2">
               <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"></img> 
            </div>
        <div className="container">
        <h1> Sign up </h1>
        <form>
            <input className="inpt" type="text" onChange={setData} value={inpval.name} placeholder="Username" name="name" required />
            <input className="inpt" type="number" onChange={setData} value={inpval.contact} placeholder="Contact" name="contact" required />
            <input className="inpt"type="email" onChange={setData} value={inpval.email} placeholder="e-mail" name="email" required />
            <input className="inpt" type="password" onChange={setData} value={inpval.password} placeholder="Password" name="password" required /> 
          <br/>   <button className="btn">Register </button> 
            <p className="para">Already have an account? <a href="/login">Log in</a></p>
        </form>
        </div>
        </section>
        </>
    )
}
export default Signup;