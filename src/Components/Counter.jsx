import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            <span>{counter}</span>
            <button>-</button>
        </div>
    )
}

export default Counter