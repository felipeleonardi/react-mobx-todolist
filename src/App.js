import React, { Component } from 'react';
import './App.css';
import { Provider } from 'mobx-react';

import TodoList from './Todo/TodoList';
import store from './Todo/TodoStore';

const stores = {
  store
}

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <TodoList/>
      </Provider>
    );
  }
}

export default App;
