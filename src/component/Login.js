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
            <div className="imgBox">
                <img src="https://static.vecteezy.com/system/resources/previews/007/278/547/original/work-at-home-concept-illustration-freelance-man-working-on-computer-at-her-house-isolated-on-white-background-online-study-education-vector.jpg">
                </img>
            </div>
        <div className="container">
       <b>  <h1> Sign in </h1> </b> 
                <form>
            <input className="input" type="email" onChange={setData} value={inpval.name} placeholder="Email or contact" name="email" required /> 
           <br/> <input className="input" type="password" onChange={setData} value={inpval.password} placeholder="Password" name="password" required /> 
           <br/> <button className="btn" > Log in </button>
            <p>Don't have an account ? <a href="/signup">create an account</a></p>
        </form>
        </div>
        </section>
        </>
    )
}
export default Login;