import React from 'react';
import {Link} from 'react-router-dom';

export default function LeftPanel(){
    const links =[
        {link:"/",name:"Search Box(Debounce)"},
        {link:"/typeAhead",name:"Drop down"},
        {link:"/api",name:"Async TypeAhead"},
        {link:"/child",name:"Child Route"},
        {link:"/redux",name:"Redux"},
        {link:"/context",name:"React Context"},
        {link:"/hoc",name:"HOC Component"},
        {link:"/error",name:"Error Boundary"},
        {link:"/forwardRef",name:"Forward Ref"},
        {link:"/materialui",name:"Material UI"},
        {link:"/registration",name:"Registration Component"},
        {link:"/registrationUseReducer",name:"Registration Component Use Reducer"},
        {link:"/currencyList",name:"Currency List"},
        {link:"/asyncMethod",name:"Async Method"},
        {link:"/hook",name:"Hooks"},
        {link:"/customHook",name:"Custom Hook"},
        {link:"/lineCharts",name:"Line Charts"}
    ]
    return (
        <ul>
            {links.map((record)=>{
                return <li key={record.name}><Link to={record.link}>{record.name}</Link></li>
            })}
        </ul>
    );
}