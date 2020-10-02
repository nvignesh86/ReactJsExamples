import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Header from './../Header/Header';
import LeftPanel from './LeftPanel';
import BaseComponent from './BaseComponent';
import './ReactRouter.css';
import store from './../ReactRedux/Store'
import {Provider} from 'react-redux';

console.log("Store::",store.getState());

class ReactRouter extends React.Component{

    render=()=>{
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <div style={{display:"flex",width:"100%",height:"100%"}}>
                        <div className={"leftPanel"}>  <LeftPanel /></div>                 
                        <div style={{width:"70%",padding:"10px 10px 10px 10px"}}>  <BaseComponent /></div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default ReactRouter;