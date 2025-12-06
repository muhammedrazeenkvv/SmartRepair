import React, { useEffect, useState } from 'react'

const Ab = () => {

     const [count, SetCount] = useState(0);

    useEffect(() =>{
        console.log("hello");},[]
    )
    return (
<div>
    <p>{ count}</p>
    <button onClick={() => SetCount(count + 1)}>+</button>
    <button onClick={() => SetCount(count - 1)}>-</button>
</div>
  )
}

export default Ab
