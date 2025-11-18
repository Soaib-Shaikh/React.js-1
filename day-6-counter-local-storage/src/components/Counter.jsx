import React, { useEffect, useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let oldCount = JSON.parse(localStorage.getItem('count'));
        setCount(oldCount);

    }, [])

    useEffect(() => {
        if (count != 0) {
            localStorage.setItem('count', count)
        }
    }, [count])

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDecrement = () => {
        setCount((count) => count - 1);
    }

    return (
        <>
            <div className="card">
                <h2>Count is: {count}</h2>
                <button type='button' onClick={handleIncrement}>Increment</button>
                <button type='button' onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    )
}

export default Counter
