import React, { useReducer } from 'react'

function reducer(state,action) {
    switch (action.type) {
        case "increment":return state+1
        case "decrement":return state-1
        case "reset":return 0
            
            break;
    
        default:
            break;
    }
}

const Counter2 = () => {

    const [count,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
      <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
    </div>
  )
}

export default Counter2
