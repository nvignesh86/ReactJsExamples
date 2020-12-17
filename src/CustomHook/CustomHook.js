import React, { useEffect, useState } from 'react';
import usePreviousState from './usePreviousState';
import useInput from './useInput';
import useFetch from './useFetch';

export default function CustomHook(){
    const [count,setCount] = useState(0);
    const {previouState} = usePreviousState(count);
    const [value,onChange] = useInput("vignesh");
    const [execute,response,error] = useFetch();

    const handleClick = (val,event)=>{
        setCount(count+val);
    }

    useEffect(()=>{
        execute("https://api.github.com/search/users?q=nvignesh");
    },[]);

    useEffect(()=>{
        console.log("Response->",response);
        console.log("Error->",error);
    },[response,error])


    useEffect(()=>{
        console.log("input-->",value);
    },[value]);

    return (
        <>
        <div>Previous Count: {previouState}</div>
        <div>Count : {count}</div>
        <button onClick={handleClick.bind(this,1)}>Increment</button>
        <button onClick={handleClick.bind(this,-1)}>Decrement</button>
        <input value={value} onChange={onChange}></input>
        {
            response?.items?.map((item)=>{
                return <div key={item?.id}>{item?.login} - {item?.id}</div>
            })
        }
        </>
    )
}