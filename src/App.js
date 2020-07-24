import React, {createContext, useContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [isAuthorized,setIsAuthorized]=useState(false);

  const LogIn = () => {
    if (!isAuthorized) {
      setIsAuthorized(true);
    }

  };

  const LogOut = () => {
    if (isAuthorized) {
      setIsAuthorized(false);
    }
  };

  return (
      <UserContext.Provider value={{
        isAuthorized,
        LogIn,
        LogOut
      }}>
        {children}
      </UserContext.Provider>
  )

};


function App() {
  const [counter,setCounter]=useState(0);
  const userContext = useContext(UserContext);
  const [todo,setTodo] = useState(null);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos${counter}`)
        .then(response => response.json())
        .then(res => setTodo(res) )
  },[counter]);
  return (
    <div>
      {
        !userContext.isAuthorized && <button onClick={()=>userContext.LogIn()}> log in </button>
      }
      {
        userContext.isAuthorized && <button onClick={()=>userContext.LogOut()}> log out </button>
      }
      {
        userContext.isAuthorized && (
            <h1 onClick={()=>{
              // setCounter(counter+1);
              setCounter((prevCounter)=> prevCounter+1)
            }}>
              {counter}
            </h1>
        )
      }
    </div>
  );
}

export default App;
