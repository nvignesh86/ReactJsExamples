import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CustomTypeAhead from './../TypeAhead/CustomTypeAhead';
import APITypeAhead from './../TypeAhead/APITypeAhead';
import SearchBox from './../SearchBox/SearchBox';
import ChildRouteComponent from './ChildRouteComponent';
import UpdateRedux from './../ReactRedux/UpdateRedux';
import ReactProvider from './../Context/ReactProvider';
import HOCComponent from './../HOC/HOCComponent';
import ErrorBoundaryBase from '../ErrorBoundary/ErrorBoundaryBase';
import ForwardRef from './../ForwardRef/ForwardRef';
//import MaterialUIBase from './../MaterialUI/MaterialUIBase';
import GridEx from './../MaterialUI/GridEx';
import RegistrationComponent from './../RegistrationComponent/RegistrationComponent';
import RegistrationCompUseReducer from '../RegistrationComponent/RegistrationCompUseReducer';
import CurrencyList from './../CurrencyExchange/CurrencyList';
import AsyncMethod from './../AsyncMethod/AsyncMethod';
import Hook from './../Hook/Hook';
import CustomHook from './../CustomHook/CustomHook';
import LineCharts from './../Charts/LineCharts'

export default function BaseComponent(){
    return (
        <Switch>
            <Route exact path="/" component={SearchBox}></Route>
            <Route exact path="/typeAhead" component={CustomTypeAhead}></Route>
            <Route exact path="/api" component={APITypeAhead}></Route>
            <Route path="/child" component={ChildRouteComponent}></Route>
            <Route path="/redux" component={UpdateRedux}></Route>
            <Route path="/context" component={ReactProvider}></Route>
            <Route path="/hoc" component={HOCComponent}></Route>
            <Route path="/error" component={ErrorBoundaryBase}></Route>
            <Route path="/forwardRef" component={ForwardRef}></Route>
            <Route path="/materialui" component={GridEx}></Route>
            <Route path="/registration" component={RegistrationComponent}></Route>
            <Route path="/registrationUseReducer" component={RegistrationCompUseReducer}></Route>                      
            <Route path="/currencyList" component={CurrencyList}></Route>
            <Route path="/asyncMethod" component={AsyncMethod}></Route>
            <Route path="/hook" component={Hook}></Route>
            <Route path="/customHook" component={CustomHook}></Route>
            <Route path="/lineCharts" component={LineCharts}></Route>                       
            <Route path="*"><div>No Route set </div></Route>
        </Switch>
    );
}