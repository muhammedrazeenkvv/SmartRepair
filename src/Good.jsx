import React, { useContext } from 'react'
import { myContext } from './App'

const Good = () => {
    const{color,setColor} = useContext(myContext)
  return (
    <div>
      Good {color}
    </div>
  )
}

export default Good
