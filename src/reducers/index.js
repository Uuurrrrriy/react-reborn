import {combineReducers} from "redux";
import {todosReducer} from "./rodosReducer";
import {userReducer} from "./userReducer";


const reducers = combineReducers({
    todosReducer,
    userReducer
});

export default reducers;
