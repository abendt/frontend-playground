import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container className="App">
          <TodoList />
      </Container>
    );
  }
}

export default App;
