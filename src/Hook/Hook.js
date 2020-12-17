import React, { useEffect,  useMemo} from 'react';
import StateHook from './StateHook';
function Hook(){

    useEffect(()=>{
        console.log("Hook Mounted");
    });

    useMemo(()=>{
        console.log("Use Memo before");
    })

    console.log("Hook Test");
    useMemo(()=>{
        console.log("Use Memo after");
    })

   
    return (
        <>
        <StateHook />
        </>
    );
}
export default Hook;