import React from "react";

const Child=(props)=>{
    return(
        <div>
            <h1>Hello,{props.name}</h1>
            <p>you are {props.age} years old</p>
        </div>
    )
}

export default Child;   


