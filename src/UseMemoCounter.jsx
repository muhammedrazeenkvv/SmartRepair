import React, { useMemo, useState } from 'react'

const UseMemoCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount1 = () => {
        setCount1(count1 + 1)
    }

    const incrementCount2 = () => {
        setCount2(count2 + 1)
    }

    // function evenOrOdd() {
    //     let i=0;
    //     while (i<2000000000)i++;

    //     return count1%2===0
    // }

    const evenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;

        return count1 % 2 === 0
    }, [count1])
    return (
        <div>
            <button onClick={incrementCount1}>result1:{count1}</button>
            <span> {evenOrOdd ? "even" : "odd"}  </span>

            <br /> <br />
            <button onClick={incrementCount2}>result2:{count2}</button>
        </div>
    )
}

export default UseMemoCounter
