import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import rootReducer from './reducers'

const loggerMiddleware = (store) => (next) => (action) => {
    // console.log(action);
    //
    // if (action.type === 'ON_TODO_REMOVE' && !store.getState().userReducer.isLoggedIn ) {
    //     alert('you are not allowed to remove items until you are not logged in');
    //     return;
    // }

    next(action);
};

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware,thunk));
