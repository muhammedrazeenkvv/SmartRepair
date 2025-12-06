import React, { useEffect, useState } from 'react'

const Counter3 = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('hello')
    },[count]);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter3
