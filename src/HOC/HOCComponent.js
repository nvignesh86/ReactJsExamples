import React from 'react';
import LogHOC from './LogHOC';

class HOCComponent extends React.Component{
    render=()=>{
        return(
            <div>HOCComponent</div>
        );
    }
}
export default LogHOC(HOCComponent);