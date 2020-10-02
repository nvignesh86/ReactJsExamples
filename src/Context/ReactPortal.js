import React from 'react';
import ReactDOM from 'react-dom';
import ChildPortal from './ChildPortal';

class ReactPortal extends React.Component{
    constructor(){
        super();
        this.el= document.createElement("div");
    }

    componentDidMount=()=>{
        document.getElementById("portal-ex").appendChild(this.el);
    }

    render=()=>{
        return (
            ReactDOM.createPortal(<ChildPortal />, this.el)
        );
    }
}
export default ReactPortal;