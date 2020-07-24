import React from "react";
import { connect } from 'react-redux';
import {decrementActionCreator, incrementActionCreator} from "./actionCreators/counter";


const Counter = ({counter,isAuth,increment,decrement}) =>{
    console.log({counter,isAuth,increment,decrement});
    return (
        <div>
            <button onClick={increment}> increment </button>
            <button onClick={decrement}> decrement </button>
            <h1> Counter {counter} </h1>
        </div>
    )
};

const mapStateToProps = (state) => {  // pass redux store to props
    return {
        counter: state.counter,
        isAuth: state.userIsAuth
    }
};
// <Counter counter={state.counter} isAuth={state.userIsAuth} />

// const incrementActionCreator = () => ({type: 'Increment' });
// const decrementActionCreator = () => ({type: 'Decrement' });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(incrementActionCreator()),
//         decrement: () => dispatch(decrementActionCreator())
//     }
// };

export const CounterWithRedux = connect(mapStateToProps,{
    increment: incrementActionCreator,
    decrement: decrementActionCreator
})
(Counter);
