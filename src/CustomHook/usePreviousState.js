import { useEffect,useRef } from 'react';

export default function usePreviousState(val){
    const previouState = useRef();

    useEffect(()=>{
        console.log("Previosu state calling",val);
        previouState.current = val;
    });

    return {
        previouState: previouState.current
    }
}