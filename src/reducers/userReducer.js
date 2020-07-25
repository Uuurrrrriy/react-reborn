const initialState = {
   isLoggedIn: false
};

export const userReducer = (state= initialState,action) => {
    switch (action.type) {
        case 'LOG_IN':{
            return {
                ...state,
                isLoggedIn: true
            }
        }
        default: {
            return state;
        }
    }
};
