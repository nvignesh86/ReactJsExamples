import React, { useState } from 'react';

export default function AsyncMethod(){

    const [userList,setUserList] = useState();

    const fetchApi= async (query)=>{
        let response = await fetch("https://api.github.com/search/users?q="+query);
        let data = await response.json();
        setUserList(data.items);
        console.log(data);
    }

    const handleClick=()=>{
        fetchApi("nvignesh86");
    }

    return (
        <>
        {
            userList?.map((user)=>{
                return (
                    <div key={user.id}>{user.login}</div>
                );
            })
        }
        <button onClick={handleClick}>Click</button>
        </>
    )
}