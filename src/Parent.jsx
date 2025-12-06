import React from "react";
import Child from "./Child";

const Parent =() =>{
    return(
        <div>
            <h1>parent Component</h1>
            <Child name="razeen" age="23"/>
            <Child name="afthab" age="22"/>

        </div>
    )
}

export default Parent;