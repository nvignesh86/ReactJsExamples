import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

function Header(props){
    const {userDetails:{name:userName}} = props;
    return (
        <div className={"header"}>
            <div className={"title"}>React Js Example</div>
            <div className={"user-con"}>Name: {userName}</div>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return {
        userDetails:state.userDetails
    }
}
export default connect(mapStateToProps)(Header);