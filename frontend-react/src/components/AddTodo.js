import React, {Component} from "react";
import {Button, Input} from 'semantic-ui-react'

class AddTodo extends Component {

    // https://reactjs.org/docs/forms.html

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

export default AddTodo;