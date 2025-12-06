import React, { useState } from 'react'

const FormTracker = () => {

    const [text,setText] = useState("")

  return (
    <div>
      <form action="">
        <input type="text" onChange={(a)=>{setText(a.target.value)}}/>
      </form>
      <p>Text Display:{text}</p>
    </div>
  )
}

export default FormTracker
