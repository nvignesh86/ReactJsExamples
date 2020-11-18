import React, {useCallback, useEffect, useState} from 'react';
import ChildHook from './ChildHook';
import CallBackHookChild from './CallBackHookChild';
import MemoChild from './MemoChild';

function StateHook(){
    const [count,setCount] = useState(0);
    const [data,setData] = useState(1);

    const handleClick=()=>{
        setCount(count+1);
    }    

    const handleDecrease=()=>{
        setCount(count-1);
    };

    useEffect(()=>{
        console.log("Count",count);
    },[count]);

    const calData = ()=>{
        return data + 10;
    }

    const handleChange = (e)=>{
        setData(e.target.value);
    }

    const parentCallBack=useCallback(()=>{
        console.log("parentCallBack");
    },[]);

    console.log("before render");
    return (
        <>
        <div>Count : {count}</div>
        <button onClick={handleClick}>Increase</button>
        <ChildHook count={count} handleDecrease={handleDecrease}/>
        <input type="text" value={data} onChange={handleChange}/>
        <div>{calData()}</div>
        <CallBackHookChild parentCallBack={parentCallBack}/>
        <MemoChild/>
        </>
    );
}
export default StateHook;