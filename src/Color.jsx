import React, { useReducer } from 'react'
function Reducer (state,action) {
    switch (action.type) {
        case "colorChange":return "green"
    }
    
}

const Color = () => {
    const[color,dispatch]=useReducer(Reducer,"red")
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={()=>dispatch({type:"colorChange"})}>change color</button>
    </div>
  )
}

export default Color
