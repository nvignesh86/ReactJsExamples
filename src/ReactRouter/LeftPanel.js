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
        {link:"/materialui",name:"Material UI"}
    ]
    return (
        <ul>
            {links.map((record)=>{
                return <li key={record.name}><Link to={record.link}>{record.name}</Link></li>
            })}
        </ul>
    );
}