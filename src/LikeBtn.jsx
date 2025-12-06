import React, { useState } from 'react'

const LikeBtn = () => {
    const [like, setLike] = useState("Liked")
    function change() {
        if (like === "Liked") {
            setLike("Unlike")
        }
        else {
            setLike("Liked")
        }
    }
    return (
        <div>
            <button onClick={change}> {like} </button>
        </div>
    )
}

export default LikeBtn
