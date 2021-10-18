import React from 'react'

export default function Button({number, count, text, setCount} ) {
    
    return (
        <button onClick={() => setCount(count + number)}>
            {text}
        </button>
    )
}
