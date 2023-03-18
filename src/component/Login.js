import React from "react" ;
import {useState} from "react" ;
import { NavLink } from "react-router-dom";
const Login = () => {
    //for getting value that what user put we have to use hook!!
const [inpval, setinp] = useState({
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
            <div id="imgBox">
                <img src="https://img.freepik.com/premium-vector/chef-man-cooking-restaurant-kitchen-vector-chef-guy-preparing-delicious-dish-character-cooker-wearing-professional-suit-hat-cook-delicacy-meal-food-kitchenware-flat-cartoon-illustration_87720-5448.jpg" >
                </img>
            </div>
        <div className="container">
       <b>  <h1> <center> Sign in </center> </h1> </b> 
                <form>
            <input className="input" type="email" onChange={setData} value={inpval.name} placeholder="Email" name="email" required /> 
           <br/> <input className="input" type="password" onChange={setData} value={inpval.password} placeholder="Password" name="password" required /> 
           <br/> <button type="submit" id="btn">Login</button>
            <p>Don't have an account ? <a id="Register" href="/signup">Create an account</a></p>
        </form>
        </div>
        </section>
        </>
    )
}
export default Login;
