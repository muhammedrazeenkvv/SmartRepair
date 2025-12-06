import React from "react"
import { useContext } from "react"
import { myContext } from "./App"

const Hai = ()=> {
    const value = useContext(myContext)
  return (
    <div>
      hai -{value}
    </div>
  )
}

export default Hai

