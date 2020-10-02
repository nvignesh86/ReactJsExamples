import React,{Component} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import options from './Options';

class CustomTypeAhead extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected:[]
        }
    }

    handleChange=(val)=>{
     this.setState({selected:val});  
    }


    render=()=>{
        return  <Typeahead        
        id="basic-typeahead-single"
        labelKey="name"
        onChange={this.handleChange}
        options={options}
        placeholder="Choose a state..."
        selected={this.state.selected}
        multiple
      />
    }
}
export default CustomTypeAhead;