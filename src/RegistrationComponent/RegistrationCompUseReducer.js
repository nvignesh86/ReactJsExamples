import React,{useEffect, useReducer,useState} from 'react';
import RegistrationReducer from './RegistrationReducer';

const RegistrationCompUseReducer = () =>{
    const [state,dispatch] = useReducer(RegistrationReducer,{userName:"",password:"",confirmPassword:""});
    const [registerEnable,setRegisterEnable] = useState(false);
    const [errMsg,setErrMsg] = useState("");

    const registerClick=()=>{
        console.log("Register Button Clicked");
    }

    useEffect(()=>{
        if(state.userName.length >= 8 && state.password.length >= 8 && state.confirmPassword.length >= 8){
            if(state.password === state.confirmPassword){
                setRegisterEnable(true);
                setErrMsg("");
            }else{
                setRegisterEnable(false);
                setErrMsg("Password Mismatch");
            }
        }else{
            setRegisterEnable(false);
            setErrMsg("User name or password must be 8 or above character");
        }
    },[state]);

    const handleChange = (name,e)=>{
        dispatch({type:name,payload:e.target.value});
    }

    return (
        <>
        {errMsg && <div style={{color:'red'}} >{errMsg}</div>}
        <div>UserName: <input type="text" value={state.userName} onChange={handleChange.bind(this,"userName")}/></div>
        <div>Password: <input type="text" value={state.password} onChange={handleChange.bind(this,"password")}/></div>
        <div>Confirm Password: <input type="text" value={state.confirmPassword} onChange={handleChange.bind(this,"confirmPassword")}/></div>
        <div><button onClick={registerClick} disabled={!registerEnable}>Register</button></div>
        </>
    );
}
export default RegistrationCompUseReducer;