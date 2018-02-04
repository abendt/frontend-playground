import React, { Component } from "react";
import { Button, Input, List } from 'semantic-ui-react'

const Todo = ({text, completed}) => {

    const icon = completed  ? 'star' : 'empty star';

    return (
        <List.Item>
                    <List.Icon name={icon} size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header>{text}</List.Header>
                    </List.Content>
        </List.Item>
    );
}

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value) {
            this.props.onAddTodo(this.state.value);
        }
        event.preventDefault();
        this.setState({value: ''});
    }

    render() {
        return (<div>
                <Input placeholder="enter todo" value={this.state.value} onChange={this.handleChange} />
                <Button primary onClick={this.handleSubmit}>add</Button>
            </div>);
    }
}

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