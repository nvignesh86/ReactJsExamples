import {UPDATE_USER} from './Action.js';
const userDetails=(state={name:"Vignesh"},action)=>{
    state = state || null;
    switch(action.type){
        case UPDATE_USER:   
            state = action.payload;
            return {...state};
        default:
            return state;
    }
}
export default userDetails;