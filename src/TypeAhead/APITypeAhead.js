import React from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';

class APITypeAhead extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
            options:[],
            selected:[]
        }
    }

handleSearch=(query)=>{
    this.setState({isLoading:true});
    fetch("https://api.github.com/search/users?q="+query)
    .then((res)=>{return res.json()})
    .then((resp)=>{
        //console.log(resp.items);
        this.setState({isLoading:false,options:resp.items});        
    });
}

handleChange=(val)=>{
    console.log("selected::",this.state.selected);
    this.setState({selected:val});
}

    render=()=>{
        const {state:{isLoading,options,selected}} = this;
        return (
            <AsyncTypeahead 
                id="async-type-ahead"
                isLoading={isLoading}
                labelKey="login"
                minLength={3}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                options={options}
                multiple
                selected={selected}
            />
        );
    }
}
export default APITypeAhead;