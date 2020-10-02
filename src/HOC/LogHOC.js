import React from 'react';

function LogHOC(NewComponent){
    return class WrapperComponent extends React.Component{
                
                 componentDidMount=()=>{
                     console.log("Wrapper Component Mounterd");
                 }

                render=()=>{
                    return <NewComponent {...this.props}></NewComponent>
                }
    }
}
export default LogHOC;