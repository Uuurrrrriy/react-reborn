import {AUTH_USER, Decrement, Increment} from "./actionTypes/counter";
import {ON_COMPLETE} from "./actionTypes/todos";

const initialState = {
    counter: 0,
    userIsAuth: false,
    todos: [
        {
            task: 'learn react ',
            done: false
        },
        {
            task: 'learn react hooks',
            done: false
        },
        {
            task: ' learn redux ',
            done: false
        },
        {
            task: 'keep alive after that',
            done: false
        }
    ]
};

export const reducer =(state=initialState,action) =>{
    switch (action.type) {
        case Increment:{
            return {
                ...state,
                counter: state.counter+1
            };
        }
        case Decrement:{
            return {
                ...state,
                counter: state.counter-1
            };
        }
        case ON_COMPLETE:{
            // console.log(action);
            const updateTodos = state.todos.map(el => el.task === action.payload ? {...el,done: true} : el )
            return {
                ...state,
                todos: updateTodos
            }
        }
        case AUTH_USER:{
            return {
                ...state,
                userIsAuth: true
            }
        }
        default:
            return state;
    }
};
