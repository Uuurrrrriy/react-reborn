import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React, {useEffect} from "react";

const TodosList = ({ todos, removeItem, getTodos }) => {
    useEffect(()=>{
        getTodos();
    },[]);
    return (
        <div>
            {
                todos.map((el,i) => <div onClick={()=>{
                    removeItem(i);
                }}> {el.title} </div>)
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        todos: state.todosReducer.todos,
    }
};

const getData = () => (dispatch) => {
    return  fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dispatch({type: 'END_LOADING', payload: json}))
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeItem: (index) => ({type:'ON_TODO_REMOVE',payload: index}),
        getTodos: getData
    },dispatch)
};

export const TodosListWithRedux = connect(mapStateToProps,mapDispatchToProps)(TodosList);
