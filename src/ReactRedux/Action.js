
const UPDATE_USER = "UPDATE_USER";
const updateUser =(userDetails)=>{
    return {
        type:UPDATE_USER,
        payload:userDetails
    }
}
const getUser=(userDetails)=>{
    return (dispatch,getState,extraPrams)=>{
        console.log(getState(),extraPrams);
        fetch("https://api.github.com/search/users?q="+userDetails.name).then(res=>res.json()).then((res)=>{
            console.log(res.items);
            dispatch(updateUser({name:res.items[0].login}))
        });
    }
}
export {UPDATE_USER,updateUser,getUser}