import React, { useMemo } from 'react';

export default function MemoChild(){
     return useMemo(()=>{
        console.log("Memo Child");
        return <div>MemoChild</div>
    },[]);    
}