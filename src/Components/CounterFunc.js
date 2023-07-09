import React, { useState } from "react";
import '../css/Counter.css'

const CounterFunc = () => {
    const [count, setCount] = useState(0)
    const minus = () => {
        setCount(count => count - 1)
    }
    const plus = () => {
        setCount(count => count + 1)
    }
    return (
        <div className="counter">
            <div className="counter__buttons">
                <button className="counter__minus" onClick={minus}>-</button>
                <div className="counter__count">{count}</div>
                <button className="counter__plus" onClick={plus}>+</button>
            </div>
            <div className="counter__code">
                <pre>
                    <code>{`const CounterFunc = () => {
    const [count, setCount] = useState(0)
    const minus = () => {
        setCount(count => count - 1)
    }
    const plus = () => {
        setCount(count => count + 1)
    }
    return (        
        <div className="counter">
            <button className="counter__minus" onClick={minus}>-</button>
            <div className="counter__count">{count}</div>
            <button className="counter__plus" onClick={plus}>+</button>
        </div> 
    )
}`}</code>
                </pre>
            </div>
        </div>
    )
}

export default CounterFunc;