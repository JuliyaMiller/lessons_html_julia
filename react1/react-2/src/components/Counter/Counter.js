import React from 'react'
import { useState, useEffect } from 'react';
import Button from './Button';

export default function Counter() {
    const [count, setCount] = useState(0); 
    
    useEffect(() => {
      document.title = `Ваш счётчик равен ${count} `;  
    });

    return (
        <div>
            <p>Ваш счётчик равен {count}</p>
            <Button text='+' count={count} setCount={setCount} number={+1}/>
            <Button text='-' count={count} setCount={setCount} number={-1}/>
        </div>
    )
}
