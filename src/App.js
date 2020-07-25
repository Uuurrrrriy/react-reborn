import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import {store} from "./store";
import {TodosListWithRedux} from "./Todos";
import {UserPanelWithRedux} from "./UserPanel";

// const TodosList = ({ todos, removeItem }) => {
//     return (
//         <div>
//             {
//                 todos.map((el,i) => <div onClick={()=>{
//                     removeItem(i);
//                 }}> {el} </div>)
//             }
//         </div>
//     )
// };
//
// const mapStateToProps = (state) => {
//     // console.log(state);
//     return {
//         todos: state.todosReducer.todos
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         removeItem: (index) => ({type:'ON_TODO_REMOVE',payload: index})
//     },dispatch)
// };
//
// const TodosListWithRedux = connect(mapStateToProps,mapDispatchToProps)(TodosList);

// const UserPanel = ({isLoggedIn,logIn}) => {
//     return (
//         <div>
//             <h1>
//                 You are {isLoggedIn ? '' : 'not'} logged in
//             </h1>
//             { !isLoggedIn && (
//                 <button onClick={logIn}>
//                     log in
//                 </button>)
//             }
//         </div>
//     )
// };
//
//
// const mapStateToProps1 = (state) => {
//     // console.log(state);
//     return {
//         isLoggedIn: state.userReducer.isLoggedIn
//     }
// };
//
// const mapDispatchToProps1 = (dispatch) => {
//     return bindActionCreators({
//         logIn: () => ({type:'LOG_IN'})
//     },dispatch)
// };
//
//
// const UserPanelWithRedux = connect(mapStateToProps1,mapDispatchToProps1)(UserPanel);

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodosListWithRedux/>
        <UserPanelWithRedux/>
      </div>
    </Provider>
  );
}

export default App;
