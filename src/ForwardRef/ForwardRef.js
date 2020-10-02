import React from 'react';
import MyText from './MyText';
class ForwardRef extends React.Component{
    constructor(props){
        super(props);
        this.fref = React.createRef();
    }

    componentDidMount=()=>{
        console.log(this.fref.current.value);
    }

    render=()=>{
        return <MyText ref={this.fref}/>
    }
}
export default ForwardRef;