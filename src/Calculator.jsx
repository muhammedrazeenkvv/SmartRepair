import React, { useState } from 'react'

const Calculator = () => {

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState("")

    const handleOperation = (operation) => {
        if (num1 === "" || num2 === "") {
            setResult("please enter both the numbers" )
            return;
        }

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        switch (operation) {
            case "add":
                setResult(`Result:${n1 + n2}`);
                break;

            case "substract":
                setResult(`Result:${n1 - n2}`);
                break;

            case "multiply":
                setResult(`Result:${n1 * n2}`);
                break;

            case "divide":
                if (n2===0) {
                    setResult("cannot divide by zero")
                }
                else{
                    setResult(`Result:${n1 / n2}`);
                }
                break;

            default:
                setResult("")
                break;
        }
    }


    return (
        <div >
        <div style={{textAlign:'center', marginTop:'30px' }}>
        <h1>Simple Calculator</h1>
            <input style={{margin:'20px' }} type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} /><br />
            <button style={{backgroundColor:'gold', margin:'8px'}} onClick={() => handleOperation("add")}>➕</button>
            <button style={{backgroundColor:'gold', margin:'8px'}} onClick={() => handleOperation("substract")}>➖</button>
            <button style={{backgroundColor:'gold', margin:'8px'}} onClick={() => handleOperation("multiply")}>✖</button>
            <button style={{backgroundColor:'gold', margin:'8px'}} onClick={() => handleOperation("divide")}>➗</button>
            <h3 style={{marginTop:'30px'}}>{result}</h3>

        </div>
        </div>
    )
}

export default Calculator
