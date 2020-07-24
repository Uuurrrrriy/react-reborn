import React, {useEffect, useState} from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import { CounterWithRedux} from "./Counter";
import {TodosWithRedux} from "./Todos";
import {store} from "./store";

// const store = createStore(reducer);

function App() {

  return (
      <Provider store={store}>
        <CounterWithRedux/>
        <TodosWithRedux/>
      </Provider>
  );
}

export default App;
