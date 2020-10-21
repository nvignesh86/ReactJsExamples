import React, { useState } from 'react';
import usePreviousState from './usePreviousState';

export default function CustomHook(){
    const [count,setCount] = useState(0);
    const {previouState} = usePreviousState(count);

    const handleClick = (val,event)=>{
        setCount(count+val);
    }

    return (
        <>
        <div>Previous Count: {previouState}</div>
        <div>Count : {count}</div>
        <button onClick={handleClick.bind(this,1)}>Increment</button>
        <button onClick={handleClick.bind(this,-1)}>Decrement</button>
        </>
    )
}