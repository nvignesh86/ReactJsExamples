import React from 'react' ;
import { Switch, Route,Link} from 'react-router-dom';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import ChildParams from './ChildParams';

function ChildRouteComponent(){
       
    return (
        <>
        <Link to={"/child/first"}>First</Link>
        <Link to={"/child/second?q=test"}>Second</Link>
        <Link to={"/child/test123?q=test"}>Three</Link>
        <Switch>
            <Route exact path={"/child"} >My First Child Router</Route>
            <Route exact path={"/child/first"} component={FirstChild}/>
            <Route exact path={"/child/second"} component={SecondChild}/>
            <Route path={"/child/:childId"} component={ChildParams} /> 
        </Switch>
        </>
    );
}
export default ChildRouteComponent;