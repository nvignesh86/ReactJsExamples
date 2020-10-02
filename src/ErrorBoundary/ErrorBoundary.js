import React from 'react';

class ErrorBoundary extends React.Component{

    constructor(props){
        super();
        this.state = {
            isError:false
        }
    }

    static getDerivedStateFromError=(error)=>{
        console.log("ErrorBoundary Error:",error);
        return {isError:true}
    }

    componentDidCatch=(error,errorInfo)=>{
        console.log("Catch Error",error,errorInfo);
        this.setState({isError:true});
    }

    render=()=>{            
        return this.state.isError ? <div>Error Occurred</div> : this.props.children;
    }
}
export default ErrorBoundary;