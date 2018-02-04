import React, { Component } from "react";
import { Button, Input, List } from 'semantic-ui-react'

const Todo = ({text, completed}) => {

    const icon = (completed === 'true') ? 'star' : 'empty star';

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
        console.log('A name was submitted: ' + this.state.value);
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
  render() {
    return (
      <div>
        <AddTodo />

        <div>
            <List selection verticalAlign='middle'>
                <Todo text='item 1' completed='false' />
                <Todo text='item 2' completed='false' />
                <Todo text='item 3' completed='false' />
                <Todo text='item 4' completed='true' />
            </List>
        </div>
      </div>
    );
  }
}

export default TodoList;