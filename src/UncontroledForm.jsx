import React, { useRef } from 'react'

const UncontroledForm = () => {

    const inputRef = useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`submitted value ${inputRef.current.value}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
};

export default UncontroledForm
