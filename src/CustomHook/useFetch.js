import {useState} from 'react';

const useFetch = () =>{
    const [response,setResponse] = useState();
    const [error,setError] = useState();

    const execute = async (url)=>{
        let res = await fetch(url)
        res = await res.json();
        if(res!=null){
            setResponse(res);
        }else{
            setError("Api failed");
        }
        
    }
    return [execute,response,error]
}
export default useFetch;