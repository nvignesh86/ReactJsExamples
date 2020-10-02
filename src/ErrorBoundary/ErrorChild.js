import React from 'react';

class ErrorChild extends React.Component{
    render=()=>{
        const {props:{data:{old}}} = this;
        return (
        <div>Error Child - {old}</div>
        );
    }
}
export default ErrorChild;