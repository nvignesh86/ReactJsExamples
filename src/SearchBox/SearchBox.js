import React,{Component} from 'react';
import _ from 'lodash';
import listItems from './ListItems';

class SearchBox extends Component{
    
    constructor(props){
        super(props);
        this.state={
                value:'',
                listItems:[],
                isLoading:false
        };
        this.searchDebounce = _.debounce(this.search,500);
    }


    handleChange=(e)=>{      
        let val = e.target.value;
        this.setState((prevState,prevProps)=>{
            return {value:val}
        });
        this.searchDebounce(val);
    }

    search=(query)=>{
        console.log(query,listItems);
        this.setState({isLoading:true});
        fetch("https://api.github.com/search/users?q="+query)
        .then((res)=>{return res.json()})
        .then((resp)=>{
            this.setState({isLoading:false});
            console.log(resp);
            this.setState({listItems:resp.items})
        });

        //this.setState({listItems:listItems.filter((record)=>{return record.name.toUpperCase().indexOf(query.toUpperCase())!==-1})});
    }



    render=()=>{
       return (
        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
            <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            {this.state.isLoading && <div>Loading...</div>}
            <ul>
                {
                    this.state.listItems && this.state.listItems.map((record)=>{
                    return <li key={record.id}>{record.login}</li>
                    })
                }
            </ul>
            </div>
            
        </div>
       );
    }
}
export default SearchBox;