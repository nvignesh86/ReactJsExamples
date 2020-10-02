import React,{useCallback, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {updateUser,getUser} from './Action'; 
function UpdateRedux(){
    const [name,setName] = useState();
    const dispatch = useDispatch();
    const userName = useSelector(state => state.userDetails.name);
    
    const handleChange=useCallback((e)=>{
        setName(e.currentTarget.value);
    },[]);

    const handleClick =()=>{
        dispatch(updateUser({name:name}));
    }

    const updateThunk =()=>{
        dispatch(getUser({name:name}));
    }

    return (
        <>
            <div>{userName}</div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Update TextBox Name</button>
            <button onClick={updateThunk}>Update using thunk</button>
        </>
    );
}
export default UpdateRedux;