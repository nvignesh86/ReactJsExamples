import rootReducer from './rootReducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,/*{userDetails:{name:'Vignesh Nagarajan'}},*/applyMiddleware(thunk.withExtraArgument({url:"test",env:"env"})));
export default store;