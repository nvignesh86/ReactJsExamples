import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
//import App from './App';
//import CustomTypeAhead from './TypeAhead/CustomTypeAhead';
//import APITypeAhead from './TypeAhead/APITypeAhead';
//import SearchBox from './SearchBox/SearchBox';
import RegistrationComponent from './RegistrationComponent/RegistrationComponent';
//import ReactLazy from "./ReactLazy/ReactLazy";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RegistrationComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
