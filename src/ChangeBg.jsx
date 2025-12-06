import React, { useState } from 'react'
const ChangeBg = () => {

    const [backgroundColor, setBackgroundColor] = useState('#f7e8e8ff')

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div style={{ backgroundColor, height: '100vh', }}>
            <button onClick={() => { setBackgroundColor(getRandomColor) }}>change bg color</button>

        </div>
    )
}

export default ChangeBg
