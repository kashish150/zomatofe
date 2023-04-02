import React,{ useState } from "react"

const Counter= () => {
    
    const[count,setCount]=useState(0)
	return (
        <>
        <div className="countbody">
        <div className="decrement">
        <button id="dec" onClick={() => {setCount(count-1)}} disabled={count===0}>-</button>
        </div>
        <div className="value">
        {count}
        </div>
        <div className="increment">
        <button id="inc" onClick={() => {setCount(count+1)}}>+</button>
        </div>
        </div>
         </>
    )
    }

export default Counter;