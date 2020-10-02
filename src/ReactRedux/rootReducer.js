import userDetails from './userReducer';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
    userDetails
});
export default rootReducer;