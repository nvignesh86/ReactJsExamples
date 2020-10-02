import React,{Component} from 'react';
const APITypeAhead = React.lazy(()=>{return import("./../TypeAhead/APITypeAhead")});

class ReactLazy extends Component{
    constructor(props){
        super(props);
        this.state={
            load:false
        }
    }

    handleClick=()=>{
        this.setState((prevState)=>{
            return {load:!prevState.load} 
        });
    }

    render=()=>{
        return (
        <div>{
                this.state.load && 
                <React.Suspense fallback={<div>Loading....</div>}>
                    <APITypeAhead />
                </React.Suspense>
            }
               <button onClick={this.handleClick}>Lazy Load</button> 
            </div>
        );
    }
}
export default ReactLazy;