import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
    {id: 1, content: 'buy milk'},
    {id: 2, content: 'play some games'},

    ]
  }

  deleteTodo = (id) => {
    console.log(id);
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
