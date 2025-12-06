import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);

    const double = useMemo(() => {
        console.log("calculating...");
        return number * 2;
    }, [number]);

    const themeStyle = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
        padding: "20px",
    };
    return (
        <div style={themeStyle}>
            <h2>useMemoDemo</h2>
            <p>Number:{number}</p>
            <p>Double{double}</p>

            <button onClick={() => setNumber(number + 1)}>Increase Button</button>
            <button onClick={() => setTheme(!theme)}>Change theme</button>

        </div>
    );
}

export default UseMemoDemo
