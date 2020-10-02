import React from 'react';
import MyContext from './MyContext';
class ChildPortal extends React.Component{
    render=()=>{
        return (
            <>
            <MyContext.Consumer>
                {(value)=>{
                    return (<div>Poral Get Context data {value.data} </div>
                        );
                }}
            </MyContext.Consumer>
            </>
        );
    }
}
export default ChildPortal;