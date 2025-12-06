import React,{useState} from 'react'

const ShowHideText = () => {
     const [text,setText] = useState("Hello react learner👋")
    const [buttontext,setButtonText]=useState("hide text")

    function change() {
        if (text === "") {
            setText("Hello react learner👋")
            setButtonText("Hide Text")
        } else {
            setText("")
            setButtonText("Show Text")
        }
        
    }
  return (
    <div>
        <p>{text}</p>
        <button onClick={change}>
            {buttontext}
           </button>
    </div>
  )
}

export default ShowHideText
