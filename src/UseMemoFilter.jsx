import React, { useMemo, useState } from 'react'

const UseMemoFilter = () => {
const [search,setSearch] = useState("");
const [count,setCount] = useState(0);

    const name=["Mega","Rahul","Asha","Anu","Kiran","Manu","Sara"]
    
    const filteredUser= useMemo(()=>{
        return name.filter((user)=>
        user.toLowerCase().includes(search.toLowerCase)
        )
    })
  return (
    <div>
      <h1>UseMemo Filter Example</h1>
      <br />
      <input type="text" placeholder='Search User' />


    </div>
  )
}

export default UseMemoFilter
