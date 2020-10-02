import React from 'react';
import MyContext from './MyContext';

class ContextChild extends React.Component{
    static contextType = MyContext;    
    render=()=>{
        console.log(this.context);
        const {context:{data}} = this;
        return (
            <div>test--{data}</div>
        );
    }
}
//ContextChild.contextType = MyContext; we can use above static code or this comment code for attaching context object in this variable.
export default ContextChild;