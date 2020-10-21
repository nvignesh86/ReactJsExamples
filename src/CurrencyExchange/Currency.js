import React,{useEffect} from 'react';

export default function Currency(props){    
    useEffect(()=>{
     console.log("Base Value",props.baseCurrency);   
    },[props.baseCurrency]);

    useEffect(()=>{
        console.log("Call Parent modified")
    },[props.callParent]);

    useEffect(()=>{
        console.log("child value",props.childValue);
    },[props.childValue]);

    return (
    <div>{props.name} -- {props.baseCurrency * props.convertRate}</div>
    );
}