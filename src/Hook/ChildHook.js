import React, { useEffect } from 'react';

function ChildHook(props){

    useEffect(()=>{
        console.log("New method changed");
    },[props.handleDecrease]);

    return (
        <button onClick={props.handleDecrease}> Decrease</button>
    );
}
export default ChildHook;