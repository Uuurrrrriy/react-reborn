// const initialState = {
//     todos: [],
//     loading: false
// };

const initialState = {
    todos: [1,2,3,4],
    loading: false
};

export const todosReducer = (state=initialState,action) => {
    // switch (action.type) {
    //     case 'START_LOADING':{
    //         return {
    //             ...state,
    //             loading: true
    //         }
    //     }
    // }
    switch (action.type) {
        case 'ON_TODO_REMOVE': {
            return {
                ...state,
                todos: state.todos.filter((el,i) => i !== action.payload )
            }
        }
        case 'END_LOADING':{
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        }
        default: {
            return state;
        }
    }
};
