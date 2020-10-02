import React from 'react';
import { withRouter } from 'react-router';

class WithRouterSample extends React.Component{
    render=()=>{
        const {props:{history:{location:{search}}}} = this;
        const params=new URLSearchParams(search);
        return(
        <div>Params-using withrouter- {params.get('q')}</div>
        );
    }
}
export default withRouter(WithRouterSample);