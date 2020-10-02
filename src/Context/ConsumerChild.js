import React from 'react';
import MyContext from './MyContext';
import ReactPortal from './ReactPortal';

class ConsumerChild extends React.Component{
    render=()=>{
        return (
            <>
            <MyContext.Consumer>
                {(value)=>{
                    return (<div>Consumer examples {value.data} </div>
                        );
                }}
            </MyContext.Consumer>
            <ReactPortal />
            </>
        );
    }
}
export default ConsumerChild;