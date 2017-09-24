import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    state: (state = { 1: [1,2] }) => state,

}, console.log("What is this state ", this.state) );

export default rootReducer;