import {createStore} from 'redux';
import state from "./state";
import myReducers from "./reducers";

var store = createStore(myReducers,state);

export default store;