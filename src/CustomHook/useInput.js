import {useState} from 'react';

function useInput(val){
    const [value,setValue] = useState(val);
    const onChange = (e)=>{        
        setValue(e.target.value);
    };
    return [value,onChange];
}
export default useInput;