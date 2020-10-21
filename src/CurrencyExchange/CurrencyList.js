import React,{useCallback, useState,useMemo, useEffect, useLayoutEffect} from 'react';
import Currency from './Currency';
const currencyInfo = {
    currencyList:[{
        id:"1",
        name:"Euro",
        convertRate:"0.87"
    },
    {
        id:"2",
        name:"SG",
        convertRate:"1.67"
    }
    ]
}

export default function CurrencyList(props){
    const handleChange = (event)=>{
        setBaseCurrency(event.target.value)
    }
    
    const someCalculate = (data)=>{
        return data + 10;
    }

    const result = useMemo(()=>{
        console.log("usememo called")
       return someCalculate(1);
    },[]);

    useEffect(()=>{
        console.log("Mounted");
    },[]);

    const callParent = useCallback(()=>{
        console.log("Test");
    },[]);

    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    });
    

    const [baseCurrency,setBaseCurrency] = useState(1);

    return (
        <>
        <input type="text" onChange={handleChange} value={baseCurrency}/>
       { currencyInfo.currencyList.map(currency=>{
            return <Currency key={currency.id} name={currency.name} baseCurrency={baseCurrency} convertRate={currency.convertRate}
                        callParent={callParent}
                        childValue={result}
                    />   
        })}
        </>
    );
}