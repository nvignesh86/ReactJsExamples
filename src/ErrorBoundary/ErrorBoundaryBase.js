import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorChild from './ErrorChild';

class ErrorBoundaryBase extends React.Component{
    render=()=>{
        // comment error child props to check error boundary catch the error. sample props below
        //data={{old:"test"}} 
        return (<ErrorBoundary >
                    <ErrorChild /> 
            </ErrorBoundary>);
    }
}
export default ErrorBoundaryBase;