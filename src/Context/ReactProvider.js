import React from 'react';
import MyContext from './MyContext';
import ContextChild from './ContextChild';
import ConsumerChild from './ConsumerChild';

class ReactProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={data:"Sample React Context"}
    }

    changeContext=()=>{
        this.setState({data:"Change React Context"});
    }

    render=()=>{
            return (
                <>
            <MyContext.Provider value={{data:this.state.data}}>
                <ContextChild />
                <ConsumerChild />
                <div>
                    <button onClick={this.changeContext}>Change Context</button>
                </div>
            </MyContext.Provider>
               <div id="portal-ex"></div> 
               </>
            );
    }
}
export default ReactProvider;