import {connect} from "react-redux";
import React from "react";
import {onCompleteActionCreator} from "./actionCreators/todos";

const Todos = ({todos,onTaskComplete}) =>{
    console.log({todos});
    return (
        <div>
            <div> {
                todos.map(el => (
                    <div className={el.done ? 'done' : ""}>
                        {el.task}
                        <button onClick={()=>{
                            onTaskComplete(el.task)
                        }}>
                            complete task
                        </button>
                    </div>
                ))
            } </div>
        </div>
    )
};

const mapStateToProps = (state) => {  // pass redux store to props
    return {
        todos: state.todos
    }
};
// <Counter counter={state.counter} isAuth={state.userIsAuth} />

// const incrementActionCreator = () => ({type: 'Increment' });
// const decrementActionCreator = () => ({type: 'Decrement' });

// const onCompleteActionCreator = (payload) => ({type: 'ON_COMPLETE',payload });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(incrementActionCreator()),
//         decrement: () => dispatch(decrementActionCreator())
//     }
// };

export const TodosWithRedux = connect(mapStateToProps,{
    onTaskComplete: onCompleteActionCreator
})
(Todos);
