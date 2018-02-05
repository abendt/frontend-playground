import React, { Component } from "react";
import { Button, Input, List } from 'semantic-ui-react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [
        {id: 0, text: 'item 1', completed: false},
        {id: 1, text: 'item 1', completed: true}
        ]};

        this.count = 2;
    }


    addTodo(todo) {
        const newTodo = {id: this.count++, text: todo, completed: false};

        this.setState((prevState, props) => {

            const prevTodos = prevState.todos;

            prevTodos.push(newTodo);

            const nextState = {todos: prevTodos};

            return nextState;
        });

    }

  render() {
    return (
      <div>
        <AddTodo onAddTodo={(todo) => this.addTodo(todo)}/>

        <div>
            <List selection verticalAlign='middle'>
                {
                    this.state.todos.map((todo) => <Todo key={todo.id}
                        text={todo.text}
                        completed={todo.completed} />)
                }
            </List>
        </div>
      </div>
    );
  }
}

export default TodoList;