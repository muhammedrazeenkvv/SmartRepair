import React, { useState } from 'react'

const NumberAdd = () => {
    const[number,setNumber]=useState([]);
    function handleIncrement() {
      setNumber([...number,number.length]);
    };
    function handledecrement() {
      if (number.length>0) {
        number.pop();
        setNumber([...number]);
      }
    };


  return (
    <div>
      <h2>Numbers:</h2>
      <h3>{number}</h3>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handledecrement}>-</button>
    </div>
  )
}

export default NumberAdd
